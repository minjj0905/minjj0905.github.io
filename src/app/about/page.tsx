import type { Metadata } from 'next';

import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `${siteConfig.author}에 대해 소개합니다.`,
  alternates: { canonical: '/about' },
};

const AboutPage = () => (
  <div className="animate-fade-up">
    <header className="py-4">
      <h1 className="font-gmarket text-3xl font-bold">About</h1>
    </header>

    <section className="prose-post mt-6">
      <p>
        안녕하세요, {siteConfig.author}입니다. 여기에 자기소개를 채워주세요. 어떤 문제를 즐겨 푸는지, 어떤 방식으로
        일하는지 적으면 좋습니다.
      </p>

      <h2>Contact</h2>
      <ul>
        <li>
          Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </li>
        <li>
          GitHub:{' '}
          <a href={`https://github.com/${siteConfig.githubId}`} target="_blank" rel="noreferrer">
            @{siteConfig.githubId}
          </a>
        </li>
      </ul>
    </section>
  </div>
);

export default AboutPage;
