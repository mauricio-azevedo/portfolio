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
      { name: 'AWS', icon: 'aws' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: 'Estudologia',
    role: 'Senior Full Stack Software Engineer',
    period: 'Aug 2024 – Jan 2026',
    highlights: [
      'Built academic management features using Ruby, React and real-time application patterns.',
      'Improved quiz workflows, Redis-backed pipelines and API test coverage across critical flows.',
      'Maintained production systems with attention to clarity, reliability and long-term support.',
    ],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'Ruby', icon: 'ruby' },
      { name: 'Redis', icon: 'redis' },
      { name: 'RSpec', icon: 'rspec' },
    ],
  },
  {
    company: 'Inkluziva',
    role: 'Lead Full Stack Software Engineer',
    period: 'Feb 2024 – Aug 2024',
    highlights: [
      'Led delivery across React, Angular and Node.js products for trading, tax and wallet systems.',
      'Shaped architecture decisions, security improvements and NFT tooling across multiple products.',
      'Coordinated technical execution while staying close to product decisions and implementation details.',
    ],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    company: 'Incript',
    role: 'Mid-Level Full Stack Software Engineer',
    period: 'Apr 2023 – Jan 2024',
    highlights: [
      'Built educational and security management interfaces with Angular and React.',
      'Improved critical page load times from seconds to under one second.',
      'Worked across frontend and backend concerns to keep delivery practical and maintainable.',
    ],
    technologies: [
      { name: 'Angular', icon: 'angular' },
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    company: 'OpahIT',
    role: 'Mid-Level Front-End Software Engineer',
    period: 'Feb 2021 – May 2021',
    highlights: [
      'Modernized Banco Fibra’s Angular web banking interface.',
      'Improved UI quality and mobile responsiveness across important customer-facing flows.',
    ],
    technologies: [
      { name: 'Angular', icon: 'angular' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    company: 'Basis S.A.',
    role: 'Junior Full Stack Software Engineer',
    period: 'Dec 2018 – Sep 2020',
    highlights: [
      'Contributed to Java and Angular features for IBAMA’s nationwide permit management system.',
      'Worked on public-sector software used to manage tree-felling and logging authorization flows.',
    ],
    technologies: [
      { name: 'Java', icon: 'openjdk' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Oracle', icon: 'oracle' },
    ],
  },
];

export const featuredProject: FeaturedProject = {
  name: 'BeachRank',
  summary: 'Mobile-first web app for casual beach tennis groups.',
  liveUrl: 'https://beachrank-eight.vercel.app/',
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
