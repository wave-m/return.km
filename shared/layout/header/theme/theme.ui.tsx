'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeMode() {
	const { theme, setTheme } = useTheme();

	// [TODO] hydration bug checking
	const ThemeIcon = theme === 'light' ? Sun : Moon;

	return (
		<Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			<ThemeIcon className="absolute h-[1rem] w-[1rem] rotate-0 scale-100 transition-all" />
		</Button>
	);
}
