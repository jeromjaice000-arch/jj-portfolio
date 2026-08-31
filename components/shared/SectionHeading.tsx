import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};
