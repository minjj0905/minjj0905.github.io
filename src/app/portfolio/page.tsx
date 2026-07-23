import type { Metadata } from 'next';

import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: '작업한 프로젝트와 기여 내용을 정리했습니다.',
  alternates: { canonical: '/portfolio' },
};

const PortfolioPage = () => (
  <div className="animate-fade-up">
    <header className="py-4">
      <h1 className="font-gmarket text-3xl font-bold">Portfolio</h1>
      <p className="mt-2 text-text-secondary">작업한 프로젝트와 기여 내용입니다.</p>
    </header>

    <ul className="mt-8 flex flex-col gap-4">
      {projects.map((project) => (
        <li key={project.title} className="glass rounded-2xl p-6">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="break-keep-ko text-xl font-semibold">{project.title}</h2>
            <span className="text-sm text-text-tertiary">{project.period}</span>
          </div>

          <p className="mt-1 text-sm font-medium text-primary">{project.role}</p>
          <p className="break-keep-ko mt-3 text-text-secondary">{project.summary}</p>

          <ul className="break-keep-ko mt-4 flex list-disc flex-col gap-1.5 pl-5 text-[0.95rem] text-text-secondary marker:text-text-tertiary">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line/70 bg-bg-subtle/70 px-2 py-0.5 text-xs text-text-tertiary"
              >
                {tech}
              </li>
            ))}
          </ul>

          {project.links && project.links.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-4 border-t border-line/60 pt-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default PortfolioPage;
