import Link from 'next/link';

import NavLinks from '@/components/common/NavLinks';
import ThemeToggle from '@/components/common/ThemeToggle';
import { siteConfig } from '@/lib/site';

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-line/50 bg-bg-base/70 backdrop-blur-lg backdrop-saturate-150">
    <div className="mx-auto flex h-12 w-full max-w-3xl items-center justify-between px-5">
      <Link href="/" className="font-gmarket text-lg font-bold">
        Minjj
        <span className="text-3xl leading-3 text-primary">.</span>
        log
      </Link>

      <div className="flex items-center gap-6">
        <NavLinks items={siteConfig.nav} />
        <ThemeToggle />
      </div>
    </div>
  </header>
);

export default Header;
