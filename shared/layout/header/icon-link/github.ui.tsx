'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export const GitHubLink = () => {
	const { theme } = useTheme();

	return (
		<Link href="https://github.com/wave-m" passHref>
			<Button variant="ghost" size="icon">
				<Image
					width={8}
					height={8}
					alt="github icon"
					src={theme === 'light' ? '/github-mark.svg' : '/github-mark-white.svg'}
					className="absolute h-[1rem] w-[1rem] rotate-0 scale-100 transition-all"
				/>
				<span className="sr-only">GitHub</span>
			</Button>
		</Link>
	);
};
