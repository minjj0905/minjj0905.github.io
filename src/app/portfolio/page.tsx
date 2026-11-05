import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { projects } from '@/data/projects';
import { isHiddenRoute } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: '작업한 프로젝트와 기여 내용을 정리했습니다.',
  alternates: { canonical: '/portfolio' },
};

const PortfolioPage = () => {
  if (isHiddenRoute('/portfolio')) notFound();

  return (
    <div>
      <header className="py-4">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="mt-2 text-text-secondary">작업한 프로젝트와 기여 내용입니다.</p>
      </header>

      <ul className="mt-8 flex flex-col divide-y divide-line/70">
        {projects.map((project) => (
          <li key={project.title} className="py-8 first:pt-0">
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

            <p className="mt-5 text-sm text-text-tertiary">{project.stack.join(' · ')}</p>

            {project.links && project.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-4">
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
};

export default PortfolioPage;
