import type {
  ContactLink,
  Experience,
  FeaturedProject,
  NavigationItem,
  TechnologyGroup,
} from '../types/portfolio';

export const navigationItems: NavigationItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Stacks', href: '#tech-stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:mauricio.mendonca.azevedo@gmail.com',
    icon: 'email',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mauricio-azevedo',
    icon: 'github',
    isExternal: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mauricio-azevedo',
    icon: 'linkedin',
    isExternal: true,
  },
];

export const techStack: TechnologyGroup[] = [
  {
    category: 'Stacks',
    id: 'stacks',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Angular', icon: 'angular' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'Express', icon: 'express' },
      { name: 'Docker', icon: 'docker' },
      { name: 'AWS', icon: 'amazonwebservices/FF9900' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: 'Estudologia',
    role: 'Senior Full Stack Software Engineer',
    period: 'Aug 2024 – Jan 2026',
    description:
      'Built Ruby and React systems for academic management, quiz features, real-time updates, Redis-based pipelines, and API test coverage improvements.',
  },
  {
    company: 'Inkluziva',
    role: 'Lead Full Stack Software Engineer',
    period: 'Feb 2024 – Aug 2024',
    description:
      'Led technical delivery across React, Angular and Node.js products, including trading automation, tax reporting, digital wallet features, security improvements, and NFT tooling.',
  },
  {
    company: 'Incript',
    role: 'Mid-Level Full Stack Software Engineer',
    period: 'Apr 2023 – Jan 2024',
    description:
      'Built educational and security management interfaces with Angular and React, improving critical page load times from seconds to under one second.',
  },
  {
    company: 'OpahIT',
    role: 'Mid-Level Front-End Software Engineer',
    period: 'Feb 2021 – May 2021',
    description:
      'Modernized the Angular frontend of Banco Fibra’s web banking app, improving UI quality and mobile responsiveness.',
  },
  {
    company: 'Basis S.A.',
    role: 'Junior Full Stack Software Engineer',
    period: 'Dec 2018 – Sep 2020',
    description:
      'Contributed to Java and Angular features for IBAMA’s nationwide system for managing tree-felling and logging permits.',
  },
];

export const featuredProject: FeaturedProject = {
  name: 'BeachRank',
  summary: 'Mobile-first web app for casual beach tennis groups.',
  repositoryUrl: 'https://github.com/mauricio-azevedo/beachrank',
  image: {
    src: '/beachrank-showcase.png',
    alt: 'BeachRank mobile app screens',
  },
  features: [
    'Casual beach tennis groups',
    'Invite links and memberships',
    'Doubles match registration',
    'Group rankings and ratings',
    'Match history and profiles',
    'Activity feed moments',
  ],
};

export const profile = {
  name: 'Maurício Azevedo',
  role: 'Senior Full Stack Software Engineer',
  location: 'Brasília, Brazil — Remote (UTC−3)',
  email: 'mauricio.mendonca.azevedo@gmail.com',
  profileImage: {
    src: '/profile-photo.png',
    alt: 'Maurício Azevedo',
  },
  heroSummary:
    'I build reliable full-stack products across frontend, backend, databases, cloud and DevOps.',
  heroNote:
    'I care about clean architecture, useful experiences, and systems that are simple to maintain.',
  about:
    'I’m a full stack engineer experienced in building academic systems, trading tools, digital wallets, banking interfaces, and public-sector platforms. I enjoy working close to the product, shaping solutions, and delivering code that is clear, tested, and useful.',
};
