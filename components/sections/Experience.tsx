'use client';
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCE } from '@/constants';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Card } from '@/components/ui/Card';

export const Experience = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Academic Journey"
          subtitle="A record of my educational background and academic achievements."
        />

        <div className="relative">
          {/* Scroll-linked Timeline Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary origin-top -translate-x-1/2 hidden md:block"
          />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "relative flex items-center justify-between md:justify-between",
                  idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-950 -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                  <Card className="relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:bg-secondary transition-colors" />
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.institution}</h3>
                      <span className="text-xs font-medium text-slate-500 whitespace-nowrap">{exp.duration}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.degree}</p>
                    <p className="text-slate-400 text-sm">{exp.location}</p>
                    {(exp.cgpa || exp.percentage) && (
                      <div className="mt-4 text-sm font-bold text-secondary">
                        {exp.cgpa ? `CGPA: ${exp.cgpa}` : `Percentage: ${exp.percentage}`}
                      </div>
                    )}
                  </Card>
                </div>
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { cn } from '@/lib/utils';
