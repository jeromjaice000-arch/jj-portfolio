import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/shared/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio',
  description: 'Personal Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-950 text-slate-100 antialiased selection:bg-primary selection:text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
