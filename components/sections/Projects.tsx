'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Selected Works"
          subtitle="A collection of projects where I applied my technical skills to solve real-world problems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                  <span className="text-xs text-slate-500">{project.date}</span>
                </div>

                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-xs"
                    href={project.githubLink}
                    target="_blank"
                  >
                    <Github size={14} /> Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-xs"
                    href={project.githubLink}
                    target="_blank"
                  >
                    <ExternalLink size={14} /> Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
