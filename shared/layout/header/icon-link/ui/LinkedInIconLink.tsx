'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export const LinkedInIconLink = () => {
	const { theme } = useTheme();

	return (
		<Link href="https://www.linkedin.com/in/kyeongmin-kim-1549a8259/" passHref target="_blank">
			<Button variant="ghost" size="icon">
				<Image
					width={8}
					height={8}
					alt="github icon"
					src={theme === 'light' ? '/linkedIn.svg' : '/linkedIn-white.svg'}
					className="absolute h-[1rem] w-[1rem] rotate-0 scale-100 transition-all"
				/>
				<span className="sr-only">LinkedIn</span>
			</Button>
		</Link>
	);
};
