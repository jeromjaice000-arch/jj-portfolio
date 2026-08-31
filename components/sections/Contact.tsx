import React from 'react';
import { Mail } from 'lucide-react';

const USER_INFO = {
  email: 'jeromjaice000@gmail.com',
};

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
      <p className="text-slate-400 max-w-xl mx-auto mb-8">
        Feel free to reach out for opportunities, collaborations, or just a quick chat!
      </p>

      <a
        href={`mailto:${USER_INFO.email}`}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
      >
        <Mail size={20} /> Send an Email
      </a>
    </section>
  );
};
