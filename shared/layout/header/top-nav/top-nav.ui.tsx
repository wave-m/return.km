import Link from 'next/link';

const menuNav = [
	{
		title: 'Blog',
		href: '/blog',
	},
	{
		title: 'Profile',
		href: '/profile',
	},
];
export function TopNav() {
	// [TODO] 추후 use client로 변동될 예정

	return (
		<nav className="flex items-center gap-4 text-sm lg:gap-6">
			{menuNav.map((menu) => (
				<Link
					href={menu.href}
					key={menu.title}
					className="transition-colors hover:text-foreground/80 text-foreground/60"
					// active일 경우 text-foreground
				>
					{menu.title}
				</Link>
			))}
		</nav>
	);
}
