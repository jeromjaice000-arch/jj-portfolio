import { Project, Skill, Experience, Certification, Achievement } from '../types';

export const USER_INFO = {
  name: 'JEROM JAICE',
  nickname: 'JJ',
  email: 'jeromjaice000@gmail.com',
  mobile: '+91 9747216777',
  linkedin: 'https://www.linkedin.com/in/jerom-jaice',
  github: 'https://github.com/jeromjaice000-arch',
  bio: 'B.Tech Computer Science and Engineering student at Lovely Professional University. Passionate Full-Stack Developer and AI/ML enthusiast with a strong foundation in problem-solving and algorithmic thinking.',
};

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'languages' },
  { name: 'C++', category: 'languages' },
  { name: 'C', category: 'languages' },
  { name: 'HTML', category: 'technologies' },
  { name: 'CSS', category: 'technologies' },
  { name: 'MySQL', category: 'tools' },
  { name: 'MongoDB', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Figma', category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Learning Management System (LMS)',
    description: 'A full-stack platform enabling users to browse courses, manage enrollments, and access structured learning content.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    githubLink: '#',
    date: 'Mar 2026 – Jun 2026',
    highlights: [
      'Implemented secure user authentication and role-based access control.',
      'Developed RESTful backend services for managing users and courses.',
      'Designed a responsive frontend with React.js and Tailwind CSS.',
      'Integrated MongoDB for persistent storage of enrollment data.'
    ],
  },
  {
    title: 'Collaborative Online Notepad',
    description: 'A full-stack application for managing shared notes and real-time user interactions through a centralized platform.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    githubLink: '#',
    date: 'Feb 2026 – May 2026',
    highlights: [
      'Developed RESTful APIs using Node.js and Express.js.',
      'Implemented secure authentication and differentiated user roles.',
      'Designed responsive dashboards and interfaces using React.js.',
      'Integrated MongoDB for reliable management of application data.'
    ],
  },
  {
    title: 'Virtual Classroom Platform',
    description: 'A product recommendation system designed to suggest relevant products based on user preferences and attributes.',
    techStack: ['Python', 'Pandas', 'HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    date: 'Dec 2025 – Feb 2026',
    highlights: [
      'Implemented data preprocessing and feature-based similarity techniques.',
      'Designed a structured workflow for processing product data and ranking results.',
      'Developed an intuitive interface for presenting recommendations.',
      'Focused on creating a scalable workflow extendable with ML techniques.'
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    institution: 'Lovely Professional University, Phagwara, Punjab',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    duration: 'Aug 2025 – Present',
    location: 'Punjab',
    cgpa: '7.89',
  },
  {
    institution: 'Chavara Public School, Kottayam, Kerala',
    degree: 'Higher Secondary Education (CBSE)',
    duration: 'May 2023 – Mar 2025',
    location: 'Kerala',
    percentage: '94.3%',
  },
  {
    institution: 'Ursuline Senior Secondary School, Kannur, Kerala',
    degree: 'Secondary Education (CBSE)',
    duration: 'Jun 2022 – Mar 2023',
    location: 'Kerala',
    percentage: '95.8%',
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Python for Data Science', issuer: 'IBM / Coursera', date: 'Nov 2025' },
  { name: 'The Bits and Bytes of Computer Networking', issuer: 'Coursera', date: 'Sep 2025' },
  { name: 'Software Development Processes and Methodologies', issuer: 'Coursera', date: 'Dec 2025' },
  { name: 'Introduction to Machine Learning', issuer: 'NPTEL / SWAYAM', date: 'Apr 2026' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { text: 'Solved 100+ programming problems across online coding platforms using C++, Python, and DSA.' },
  { text: 'Maintained consistent problem-solving practice on LeetCode to strengthen algorithmic thinking.' },
  { text: 'Participated in college-level technical events and project-based competitions.' },
];
