import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'return km;',
  description: `kmkim's blog`,
  icons: '/kmkim.png'
}

export default function Main() {
	return (
    <>hello, i'm kmkim</>
	);
}
