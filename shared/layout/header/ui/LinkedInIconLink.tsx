'use client';

import { Button } from '@/shared/ui/button';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export const LinkedInIconLink = () => {
  const { theme } = useTheme();

  return (
    <Link href="https://www.linkedin.com/in/kyeongmin-kim-1549a8259/" passHref>
      <Button variant="ghost" size="icon" className="flex items-center justify-center" rel="noopener noreferrer">
        <Image
          width={16}
          height={16}
          alt="LinkedIn icon"
          src={theme === 'light' ? '/logo/linkedIn.svg' : '/logo/linkedIn-white.svg'}
          className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all"
        />
        <span className="sr-only">LinkedIn</span>
      </Button>
    </Link>
  );
};
