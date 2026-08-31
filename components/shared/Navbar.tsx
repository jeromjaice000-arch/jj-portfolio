'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail } from 'lucide-react';
import { USER_INFO } from '@/constants';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      scrolled ? 'py-3' : 'py-5'
    )}>
      <div className={cn(
        'max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full',
        scrolled ? 'glass' : 'bg-transparent'
      )}>
        <div className="font-bold text-xl tracking-tighter">
          <span className="text-gradient">{USER_INFO.nickname}</span>.dev
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={USER_INFO.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={USER_INFO.linkedin} target="_blank" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};
