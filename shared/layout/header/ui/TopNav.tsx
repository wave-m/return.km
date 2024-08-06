'use client';

import Link from 'next/link';
import { menuNav } from '../lib/menu';
import { usePathname } from 'next/navigation';
import { cx } from 'class-variance-authority';

export function TopNav() {
  const pathname = usePathname();
  const isActive = (itemHref: string) => {
    return pathname === itemHref || pathname?.startsWith(itemHref);
  };

  return (
    <nav className="flex items-center gap-4 text-sm lg:gap-6">
      {menuNav.map((menu) => (
        <Link
          href={menu.href}
          key={menu.title}
          className={cx(
            'transition-colors hover:text-foreground/80',
            isActive(menu.href) ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          {menu.title}
        </Link>
      ))}
    </nav>
  );
}
