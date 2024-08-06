import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './_provider/theme-provider';
import { Header } from '@/shared/layout/header/Header';
import { Footer } from '@/shared/layout/footer/Footer';

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
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Header />
					{children}
				</ThemeProvider>
			</body>
			<Footer />
		</html>
	);
}
