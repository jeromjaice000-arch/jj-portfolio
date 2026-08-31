'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { USER_INFO } from '@/constants';
import { Button } from '@/components/ui/Button';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-6">
            Hi, I'm <span className="text-gradient">{USER_INFO.nickname}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {USER_INFO.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            className="flex items-center gap-2"
          >
            View My Work
          </Button>
          <div className="flex items-center gap-3">
            <a
              href={USER_INFO.github}
              target="_blank"
              className="p-3 rounded-full glass text-slate-400 hover:text-white transition-all hover:scale-110"
            >
              <Github size={22} />
            </a>
            <a
              href={USER_INFO.linkedin}
              target="_blank"
              className="p-3 rounded-full glass text-slate-400 hover:text-white transition-all hover:scale-110"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${USER_INFO.email}`}
              className="p-3 rounded-full glass text-slate-400 hover:text-white transition-all hover:scale-110"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
