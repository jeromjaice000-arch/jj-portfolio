'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { USER_INFO } from '@/constants';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm currently looking for internships and opportunities to collaborate on impactful projects."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-3xl rounded-full" />

          <h3 className="text-3xl md:text-5xl font-bold mb-8">
            Let's build something <span className="text-gradient">extraordinary</span> together.
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <Button
              variant="primary"
              size="lg"
              className="flex items-center gap-3"
              href={`mailto:${USER_INFO.email}`}
            >
              <Mail size={20} /> Send an Email
            </Button>
            <div className="flex items-center gap-4">
              <a
                href={USER_INFO.linkedin}
                target="_blank"
                className="p-4 rounded-full glass text-slate-400 hover:text-white transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={USER_INFO.github}
                target="_blank"
                className="p-4 rounded-full glass text-slate-400 hover:text-white transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
