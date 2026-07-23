import { siteConfig } from '@/lib/site';

const Footer = () => (
  <footer className="relative z-10 mt-auto border-t border-line/60">
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-5 py-8 text-sm text-text-tertiary sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {siteConfig.author}
      </p>
      <div className="flex items-center gap-4">
        <a
          href={`https://github.com/${siteConfig.githubId}`}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-text-primary"
        >
          GitHub
        </a>
        <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-text-primary">
          Email
        </a>
        <a href="/rss.xml" className="transition-colors hover:text-text-primary">
          RSS
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
