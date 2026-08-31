'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/constants';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/shared/SectionHeading';

export const Skills = () => {
  const categories = {
    languages: 'Core Languages',
    technologies: 'Web Technologies',
    tools: 'Tools & Databases',
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="My Toolkit"
          subtitle="The technologies and tools I use to bring ideas to life."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, label], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-200 border-b border-white/10 pb-2">
                {label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter((s) => s.category === key).map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge variant="outline" className="px-4 py-2 text-sm">
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
