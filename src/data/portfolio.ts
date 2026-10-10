import { getPublicAssetUrl } from '../lib/assets';
import type { PortfolioContent } from '../types/portfolio';

export const portfolioContent: PortfolioContent = {
  navigationItems: [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  profile: {
    name: 'Maurício Azevedo',
    tag: 'full-stack',
    greeting: 'Hi, I’m Maurício.',
    status: 'Open to new roles',
    location: 'Brasília, Brazil',
    timezone: 'UTC−3',
    profileImage: {
      src: getPublicAssetUrl('/profile-photo.jpg'),
      alt: 'Maurício Azevedo portrait',
    },
    summary:
      'Software engineer with 5+ years of experience building SaaS web products across edtech, fintech, crypto and the public sector, including LLM-powered applications.',
    note: 'I own features from discovery and data modeling through deployment and production support. Interested in system design and the engineering practices behind reliable, scalable and resilient software.',
  },
  contactLinks: [
    {
      kind: 'email',
      label: 'Email',
      href: 'mailto:mauricio.mendonca.azevedo@gmail.com',
    },
    {
      kind: 'github',
      label: 'GitHub',
      href: 'https://github.com/mauricio-azevedo',
      isExternal: true,
    },
    {
      kind: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mauricio-azevedo',
      isExternal: true,
    },
    {
      kind: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/5561999997353',
      isExternal: true,
    },
    {
      kind: 'resume',
      label: 'Resume',
      href: getPublicAssetUrl('/MauricioAzevedo_Resume.pdf'),
      isExternal: true,
    },
  ],
  projects: [
    {
      name: 'Arena',
      meta: 'Next.js / NestJS / PostgreSQL · 2026',
      description:
        'Mobile-first web app that gives casual beach tennis players a competitive, pro-level feel through Elo-based group rankings, statistics, achievements, milestones and featured players. Built end to end as a personal project.',
      href: 'https://arenabeachtennis.com',
      repositoryUrl: 'https://github.com/mauricio-azevedo/arena',
    },
  ],
  experience: {
    period: '2018 — 2026',
    items: [
      {
        role: 'Mid-Level Full-Stack/Backend Software Engineer',
        company: 'Estudologia',
        employer: 'ISG Group',
        period: 'Aug 2024 — Jan 2026',
        summary:
          'Contributed to AVA Canal Educação, an LLM-powered learning platform with 150,000+ users across 600 schools, and built a Student Information System from requirements to production, owning REST APIs across multiple modules as well as full-stack features. Collaborated with product and design teams to translate user needs into intuitive features.',
      },
      {
        role: 'Mid-Level Full-Stack/Backend Software Engineer',
        company: 'Inkluziva',
        employer: 'ISG Group',
        period: 'Feb 2024 — Aug 2024',
        summary:
          'Sole developer of an automated USDT trading system managing millions of dollars in capital. Enhanced and maintained a multi-asset crypto wallet, and mentored a new developer through pair programming, code reviews and codebase guidance.',
      },
      {
        role: 'Mid-Level Frontend Software Engineer',
        company: 'Incript',
        period: 'Apr 2023 — Jan 2024',
        summary:
          'Designed and built the UI for a webcomic platform aimed at students preparing for college entrance exams, plus an admin backoffice to manage content, authors, users, moderation, roles and metrics.',
      },
      {
        role: 'Mid-Level Frontend Software Engineer',
        company: 'OpahIT',
        period: 'Feb 2021 — May 2021',
        summary:
          'Modernized UI components and improved mobile responsiveness in Banco Fibra’s web banking app.',
      },
      {
        role: 'Intern/Junior Full-Stack/Frontend Software Engineer',
        company: 'Basis S.A.',
        period: 'Dec 2018 — Sep 2020',
        summary:
          'Features, bug fixes and maintenance for IBAMA’s nationwide environmental licensing system for tree-felling and logging permits.',
      },
    ],
  },
  skills: [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Ruby', 'Java', 'Python', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Redux Toolkit', 'Angular'] },
    {
      category: 'Backend',
      items: ['Node.js', 'NestJS', 'Ruby on Rails', 'Spring Boot', 'REST APIs', 'OpenAPI'],
    },
    { category: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'migrations'] },
    {
      category: 'Delivery',
      items: ['AWS ECS/RDS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    },
    {
      category: 'Quality',
      items: ['Observability (OpenTelemetry, Grafana)', 'unit, integration and E2E testing'],
    },
    { category: 'Systems', items: ['Distributed systems', 'event-driven architecture', 'Kafka'] },
    { category: 'Spoken', items: ['English (fluent)', 'Portuguese (native)'] },
  ],
  contact: {
    statement:
      'Open to full-stack and backend engineering roles, remote (UTC−3) or in Brasília, Brazil.',
  },
  labels: {
    primaryNavigation: 'Primary navigation',
    projectsSection: 'Projects',
    experienceSection: 'Experience',
    skillsSection: 'Skills',
    contactSection: 'Contact',
    websiteLink: 'Website',
    codeLink: 'Code',
    footerRights: 'All rights reserved.',
  },
};
