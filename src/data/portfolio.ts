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
  // {
  //   label: 'Email',
  //   href: 'mailto:mauricio.mendonca.azevedo@gmail.com',
  //   icon: 'email',
  // },
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
      'Built Ruby and React systems for academic management products serving more than 10,000 low-income students.',
      'Delivered an end-to-end quiz game with backend APIs, database design, background jobs, OpenAI-powered question generation, and real-time updates.',
      'Improved a critical API used across the product from 20 seconds to 300 milliseconds and expanded test coverage across core features.',
      'Implemented Redis-based orchestration for an automated student essay grading pipeline powered by the OpenAI API.',
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
      'Led technical delivery as the primary engineer, working directly with stakeholders to shape requirements and define practical solutions.',
      'Built React and Node.js products for automated crypto trading, digital wallets, payment integrations, and tax reporting workflows.',
      'Automated crypto tax reporting, removing manual errors and saving roughly 20 hours of work per week.',
      'Strengthened platform security by remediating critical vulnerabilities and improving authentication flows.',
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
      'Led the Angular frontend of an educational platform for public-school students preparing for Brazil’s college entrance exams.',
      'Built a React interface for managing residential and building security devices.',
      'Optimized critical pages, reducing load times from up to 6 seconds to less than 1 second.',
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
      'Modernized Banco Fibra’s Angular web banking interface with a stronger focus on usability and responsive behavior.',
      'Improved customer-facing screens for a financial product where clarity, reliability, and mobile experience mattered.',
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
      'Contributed to Java and Angular features for IBAMA’s nationwide system for managing tree-felling and logging permits.',
      'Worked on public-sector software supporting permit workflows across more than 10 million hectares of forest.',
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
    'I focus on delivering production-ready software with clear architecture, measurable impact, and maintainable code.',
  about:
    'I’m a senior full stack engineer focused on building reliable product software across education, fintech, banking, and public-sector systems. I work across React and Angular frontends, Node.js and Ruby backends, APIs, databases, cloud infrastructure, and automation workflows — always with a bias toward clear architecture, measurable impact, and maintainable delivery.',
};
