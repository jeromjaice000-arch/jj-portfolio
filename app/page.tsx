import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function Page() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
