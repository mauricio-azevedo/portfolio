import type { PortfolioContent } from '../types/portfolio';

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/mauricio-azevedo',
    icon: 'github' as const,
    isExternal: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mauricio-azevedo',
    icon: 'linkedin' as const,
    isExternal: true,
  },
  {
    label: 'Email',
    href: 'mailto:mauricio.mendonca.azevedo@gmail.com',
    icon: 'email' as const,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5561999997353',
    icon: 'whatsapp' as const,
    isExternal: true,
  },
];

const techStack = [
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

const profileImage = {
  src: '/profile-photo.jpg',
  alt: 'Maurício Azevedo',
};

const arenaImage = {
  src: '/arena-showcase.png',
  alt: 'Arena mobile app screens',
};

const factIcons = {
  experience:
    'M8.5 7.25V5.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v1.75M4.75 8h14.5v10.25H4.75V8Zm0 4.5h14.5',
  location:
    'M12 21s6-5.28 6-10a6 6 0 1 0-12 0c0 4.72 6 10 6 10Zm0-7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  remote: 'M12 6.75v5.5l3.25 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
};

export const portfolioContent: PortfolioContent = {
  navigationItems: [
    { label: 'About', href: '#about' },
    { label: 'Stacks', href: '#tech-stack' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  contactLinks,
  techStack,
  profile: {
    name: 'Maurício Azevedo',
    role: 'Full Stack Software Engineer',
    location: 'Brasília, Brazil — Remote (UTC−3)',
    email: 'mauricio.mendonca.azevedo@gmail.com',
    profileImage,
    heroSummary:
      'I build product software for environments where ambiguity, complex workflows, and reliability matter.',
    heroNote:
      'I work from problem framing to production delivery: modeling real workflows, designing APIs and interfaces, reducing technical risk, and turning critical operations into clear, secure, maintainable systems.',
    about:
      'I’m a product-minded full stack engineer with experience across education, fintech, crypto, operational automation, and AI-assisted platforms. My strongest work happens in ambiguous environments: when business rules are still forming, workflows have edge cases, users need simple interfaces, and the architecture has to support real product evolution. I care about production-grade software: clear interfaces, domain-aligned APIs, evolvable data models, tests around critical behavior, and technical decisions that reduce risk instead of hiding complexity.',
  },
  aboutFacts: [
    { label: 'Experience', value: '7+ years', icon: factIcons.experience },
    { label: 'Location', value: 'Brasília, Brazil', icon: factIcons.location },
    { label: 'Remote', value: 'Worldwide', icon: factIcons.remote },
  ],
  experiences: [
    {
      company: 'Estudologia',
      role: 'Mid-Level Full Stack Software Engineer',
      period: 'Aug 2024 – Jan 2026',
      highlights: [
        'Delivered features and fixed critical production bugs for an AI-assisted education platform used daily by 10,000+ students, hundreds of teachers, and dozens of schools.',
        'Worked on core AI learning workflows for assessment generation, performance analysis, personalized lesson planning, and essay feedback.',
        'Improved reliability in critical account-access flows, including login, password reset, and SSO-related services.',
        'Raised API test coverage from 50% to 80% around backend features and business rules where regressions would directly affect users.',
        'Partnered with product, design, and academic stakeholders to turn complex educational workflows into usable production experiences.',
      ],
      technologies: [
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextdotjs' },
        { name: 'Ruby on Rails', icon: 'rubyonrails' },
      ],
    },
    {
      company: 'Inkluziva',
      role: 'Mid-Level Full Stack Software Engineer',
      period: 'Feb 2024 – Aug 2024',
      highlights: [
        'Owned the technical execution of a USDT trading automation platform handling BRL 10M+ in daily operations.',
        'Built the system end to end as the sole engineer, covering trading flows, Binance integration, banking/payment APIs, reconciliation logic, tax reporting, and operational edge cases.',
        'Designed reconciliation workflows matching Binance trades against bank statement records by amount, date, and payer identity before releasing USDT.',
        'Automated crypto tax reporting, replacing a full-day manual process and reducing recurring operational errors.',
        'Reduced manual trading dependency from a 3-person operation and later mentored a junior engineer as the team expanded.',
        'Identified and remediated 3 critical security vulnerabilities, reducing production and financial risk.',
      ],
      technologies: [
        { name: 'React', icon: 'react' },
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'NestJS', icon: 'nestjs' },
      ],
    },
    {
      company: 'Incript',
      role: 'Mid-Level Full Stack Software Engineer',
      period: 'Apr 2023 – Jan 2024',
      highlights: [
        'Re-architected inherited codebases for a crypto digital wallet, improving maintainability with feature-based organization, reusable components, service layers, thin controllers, and repository patterns.',
        'Built production features across wallet workflows, payment API integrations, authentication logic, and user-facing financial operations.',
        'Designed and implemented an end-to-end NFT creation feature from scratch, enabling users to generate customizable NFTs in seconds without blockchain knowledge.',
        'Built the frontend from scratch for an educational platform that adapted classic literary works into comics to help students prepare for Brazilian college entrance exams.',
        'Built a complex mobile-like draggable continuous web reader, solving browser performance issues for app-like long-form comic reading on the web.',
      ],
      technologies: [
        { name: 'React', icon: 'react' },
        { name: 'Angular', icon: 'angular' },
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'NestJS', icon: 'nestjs' },
      ],
    },
    {
      company: 'OpahIT',
      role: 'Mid-Level Front-End Software Engineer',
      period: 'Feb 2021 – May 2021',
      highlights: [
        'Modernized UI components and improved mobile responsiveness in Banco Fibra’s web banking app, contributing to a more reliable and usable banking experience.',
      ],
      technologies: [{ name: 'Angular', icon: 'angular' }],
    },
    {
      company: 'Basis S.A.',
      role: 'Junior Full Stack Software Engineer',
      period: 'Dec 2018 – Sep 2020',
      highlights: [
        'Contributed features, bug fixes, and maintenance to IBAMA’s nationwide environmental licensing system for tree-felling and logging permits across millions of hectares.',
      ],
      technologies: [
        { name: 'Angular', icon: 'angular' },
        { name: 'Java', icon: 'openjdk' },
        { name: 'Spring Boot', icon: 'springboot' },
      ],
    },
  ],
  featuredProject: {
    name: 'Arena',
    summary:
      'Arena is a social ranking platform for casual beach tennis groups. The product turns matches that normally leave no record into competitive history, group-specific ratings and rankings, player profiles, statistics, and an activity feed — passing a friend in the ranking, seeing an achievement in the feed, or improving your stats can be one more reason to want to win.',
    liveUrl: 'https://arenabeachtennis.com',
    repositoryUrl: 'https://github.com/mauricio-azevedo/arena',
    image: arenaImage,
    features: [
      'Ratings inspired by systems used in professional tennis and chess, where scoreline and opponent strength matter — a close loss to a stronger player can still count',
      'Player profiles that turn casual players into competitors with a record, stats, and a reputation',
      'Achievements, stats, and feed updates that make every win, streak and achievement visible to the group',
      'Group rankings that give every playing circle its own league, rivalries, and bragging rights',
    ],
  },
  labels: {
    primaryNavigation: 'Primary navigation',
    mobileNavigation: 'Mobile navigation',
    openNavigation: 'Open navigation',
    resume: 'Resume',
    resumeAria: 'Open resume in a new tab',
    aboutSection: 'About',
    aboutTitle: 'About Maurício',
    techStackSection: 'Stacks',
    techStackTitle: 'Stacks',
    techStackAria: 'Technology stacks',
    experienceSection: 'Experience',
    experienceTitle: 'Experience',
    experienceAria: 'Experience',
    featuredProjectSection: 'Featured Project',
    online: 'Online',
    liveLink: 'View live',
    repositoryLink: 'View repository',
    contactAria: 'Contact',
    contactTitle: 'Need to turn a complex product problem into reliable software?',
    contactSubtitle:
      'I’m open to roles where product judgment, engineering quality, and execution standards matter.',
    footerRights: 'All rights reserved.',
  },
};
