export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  date: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  category: 'languages' | 'technologies' | 'tools';
}

export interface Experience {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  cgpa?: string;
  percentage?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Achievement {
  text: string;
}
