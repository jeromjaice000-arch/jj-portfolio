import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950 text-slate-100">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
