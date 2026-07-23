import Link from 'next/link';

import NavLinks from '@/components/common/NavLinks';
import ThemeToggle from '@/components/common/ThemeToggle';
import { siteConfig } from '@/lib/site';

const Header = () => (
  <header className="sticky top-0 z-50 px-4 pt-3">
    <div className="glass mx-auto flex h-14 w-full max-w-3xl items-center justify-between rounded-2xl pl-5 pr-3">
      <Link href="/" className="font-gmarket text-lg font-bold tracking-tight">
        Minjj
        <span className="text-primary">.</span>
        log
      </Link>

      <div className="flex items-center gap-1">
        <NavLinks items={siteConfig.nav} />
        <ThemeToggle />
      </div>
    </div>
  </header>
);

export default Header;
