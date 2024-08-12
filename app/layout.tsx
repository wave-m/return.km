import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './_provider/theme-provider';
import { Header } from '@/shared/layout/header';
import { Footer } from '@/shared/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KM KIM | Frontend Developer',
  description: `kmkim's blog`,
  icons: '/kmkim.png',
  openGraph: {},
};

/**
 * [TODO] GoogleAnalytics
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <div className="relative max-w-6xl w-[100%] mx-auto my-[2rem]">{children}</div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
