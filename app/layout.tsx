import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/shared/Navbar';
import { USER_INFO } from '@/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `${USER_INFO.name} | Portfolio`,
  description: USER_INFO.bio,
  openGraph: {
    title: `${USER_INFO.name} | Portfolio`,
    description: USER_INFO.bio,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, 'bg-dark-950 text-slate-50')}>
        <Navbar />
        <main>{children}</main>
        <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} {USER_INFO.name}. Built with Next.js & Tailwind.</p>
        </footer>
      </body>
    </html>
  );
}

import { cn } from '@/lib/utils';
