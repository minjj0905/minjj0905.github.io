'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type NavLinksProps = {
  items: readonly { readonly label: string; readonly href: string }[];
};

const NavLinks = ({ items }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-6">
        {items.map(({ label, href }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-sm font-medium transition-colors',
                  active ? 'text-primary' : 'text-text-secondary hover:text-text-primary',
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
