import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 group',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
