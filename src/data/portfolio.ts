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
  src: '/profile-photo.png',
  alt: 'Maurício Azevedo',
};

const beachRankImage = {
  src: '/beachrank-showcase.png',
  alt: 'BeachRank mobile app screens',
};

const factIcons = {
  experience:
    'M8.5 7.25V5.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v1.75M4.75 8h14.5v10.25H4.75V8Zm0 4.5h14.5',
  location:
    'M12 21s6-5.28 6-10a6 6 0 1 0-12 0c0 4.72 6 10 6 10Zm0-7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  remote: 'M12 6.75v5.5l3.25 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
};

export const portfolioContent: Record<'en' | 'pt', PortfolioContent> = {
  en: {
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
      role: 'Senior Full Stack Software Engineer',
      location: 'Brasília, Brazil — Remote (UTC−3)',
      email: 'mauricio.mendonca.azevedo@gmail.com',
      profileImage,
      heroSummary:
        'I’m a full stack engineer who turns product ambiguity into reliable, user-facing software.',
      heroNote:
        'I care about the path from rough requirements and real workflows to clear architecture, thoughtful UI/UX, and maintainable systems.',
      about:
        'I stay close to the product, not only the code. I turn rough requirements into user-facing production software by working with product owners, stakeholders, and designers to check business rules against real workflows, turn complex workflows into simple UI/UX for end users, design data models that can evolve with the product, design APIs that reflect the product’s real workflows, and build features until they are ready to ship.',
    },
    aboutFacts: [
      { label: 'Experience', value: '7+ years', icon: factIcons.experience },
      { label: 'Location', value: 'Brasília, Brazil', icon: factIcons.location },
      { label: 'Remote', value: 'Worldwide', icon: factIcons.remote },
    ],
    experiences: [
      {
        company: 'Estudologia',
        role: 'Senior Full Stack Software Engineer',
        period: 'Aug 2024 – Jan 2026',
        highlights: [
          'Delivered high-quality, robust production code across multiple Ruby and React systems, including academic management platforms used by 10,000+ students and a commercial library management system.',
          'Worked closely with stakeholders and product owners to refine business rules and uncover gaps in proposed workflows to fulfill business requirements.',
          'Collaborated with designers and creative directors to turn complex workflows into intuitive UI/UX for end users.',
          'Built a real-time quiz game with AI-generated questions, helping students learn while competing with each other.',
          'Expanded API test coverage from 50% to 80% by writing unit tests for critical API features.',
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
          'Worked alongside stakeholders to prototype the company’s Binance trading automation system and define the first version of its trading workflows.',
          'Built and shipped the React frontend and Node.js backend for the trading automation platform.',
          'Automated crypto trading tax reporting, eliminating manual errors and saving 20 hours of work per week.',
          'Identified and remediated 3 critical security vulnerabilities across the platform.',
          'Worked on a crypto trading digital wallet, integrating payment APIs and authentication logic.',
          'Built a feature for creating customizable NFTs in seconds, without requiring users to understand blockchain concepts.',
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
          'Built and shipped the Angular frontend for an educational platform that helped public-school students engage with literature and prepare for Brazil’s college entrance exams.',
          'Designed and delivered the platform’s admin panel for managing published content and creators.',
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
          'Modernized the UI and improved mobile responsiveness in Banco Fibra’s Angular web banking app.',
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
          'Contributed to new features and resolved bugs across the Java backend and Angular frontend of IBAMA’s nationwide system for managing tree-felling and logging permits in over 10 million hectares of forest.',
        ],
        technologies: [
          { name: 'Java', icon: 'openjdk' },
          { name: 'Angular', icon: 'angular' },
          { name: 'Oracle', icon: 'oracle' },
        ],
      },
    ],
    featuredProject: {
      name: 'BeachRank',
      summary: 'Mobile-first web app for casual beach tennis groups.',
      liveUrl: 'https://beachrank-eight.vercel.app/',
      repositoryUrl: 'https://github.com/mauricio-azevedo/beachrank',
      image: beachRankImage,
      features: [
        'Casual beach tennis groups',
        'Invite links and memberships',
        'Doubles match registration',
        'Group rankings and ratings',
        'Match history and profiles',
        'Activity feed moments',
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
      contactTitle: 'Let’s build something useful together.',
      contactSubtitle: 'I’m open to new opportunities and interesting projects.',
      footerRights: 'All rights reserved.',
    },
  },
  pt: {
    navigationItems: [
      { label: 'Sobre', href: '#about' },
      { label: 'Stacks', href: '#tech-stack' },
      { label: 'Experiência', href: '#experience' },
      { label: 'Projetos', href: '#projects' },
      { label: 'Contato', href: '#contact' },
    ],
    contactLinks,
    techStack,
    profile: {
      name: 'Maurício Azevedo',
      role: 'Engenheiro de Software Full Stack Sênior',
      location: 'Brasília, Brasil — Remoto (UTC−3)',
      email: 'mauricio.mendonca.azevedo@gmail.com',
      profileImage,
      heroSummary:
        'Sou engenheiro full stack e transformo ambiguidade de produto em software confiável para usuários reais.',
      heroNote:
        'Tenho cuidado com o caminho entre requisitos ainda abertos, fluxos reais de uso, arquitetura clara, UI/UX bem pensada e sistemas fáceis de manter.',
      about:
        'Trabalho perto do produto, não só do código. Transformo requisitos ainda abertos em software de produção voltado para usuários, trabalhando com product owners, stakeholders e designers para validar regras de negócio contra fluxos reais, transformar fluxos complexos em UI/UX simples para usuários finais, desenhar modelos de dados que evoluem com o produto, desenhar APIs que refletem os fluxos reais do produto e construir funcionalidades até estarem prontas para entrega.',
    },
    aboutFacts: [
      { label: 'Experiência', value: '7+ anos', icon: factIcons.experience },
      { label: 'Localização', value: 'Brasília, Brasil', icon: factIcons.location },
      { label: 'Remoto', value: 'Worldwide', icon: factIcons.remote },
    ],
    experiences: [
      {
        company: 'Estudologia',
        role: 'Engenheiro de Software Full Stack Sênior',
        period: 'ago 2024 – jan 2026',
        highlights: [
          'Entreguei código de produção robusto e de alta qualidade em múltiplos sistemas Ruby e React, incluindo plataformas acadêmicas usadas por mais de 10.000 estudantes e um sistema comercial de biblioteca.',
          'Trabalhei próximo a stakeholders e product owners para refinar regras de negócio e encontrar gaps em fluxos propostos para atender requisitos de negócio.',
          'Colaborei com designers e diretores criativos para transformar fluxos complexos em UI/UX intuitiva para usuários finais.',
          'Construí um jogo de quiz em tempo real com perguntas geradas por IA, ajudando estudantes a aprender enquanto competiam entre si.',
          'Aumentei a cobertura de testes de APIs de 50% para 80% escrevendo testes unitários para funcionalidades críticas.',
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
        role: 'Engenheiro de Software Full Stack Líder',
        period: 'fev 2024 – ago 2024',
        highlights: [
          'Trabalhei junto a stakeholders para prototipar o sistema de automação de trading na Binance da empresa e definir a primeira versão dos fluxos de trading.',
          'Construí e entreguei o frontend em React e o backend em Node.js da plataforma de automação de trading.',
          'Automatizei a apuração fiscal de operações de cripto, eliminando erros manuais e economizando 20 horas de trabalho por semana.',
          'Identifiquei e corrigi 3 vulnerabilidades críticas de segurança na plataforma.',
          'Trabalhei em uma carteira digital para trading de cripto, integrando APIs de pagamento e lógica de autenticação.',
          'Construí uma funcionalidade para criar NFTs customizáveis em segundos, sem exigir que usuários entendessem conceitos de blockchain.',
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
        role: 'Engenheiro de Software Full Stack Pleno',
        period: 'abr 2023 – jan 2024',
        highlights: [
          'Construí e entreguei o frontend em Angular de uma plataforma educacional que ajudava estudantes de escolas públicas a se envolverem com literatura e se prepararem para vestibulares no Brasil.',
          'Projetei e entreguei o painel administrativo da plataforma para gerenciar conteúdos publicados e criadores.',
        ],
        technologies: [
          { name: 'Angular', icon: 'angular' },
          { name: 'React', icon: 'react' },
          { name: 'TypeScript', icon: 'typescript' },
        ],
      },
      {
        company: 'OpahIT',
        role: 'Engenheiro de Software Front-End Pleno',
        period: 'fev 2021 – mai 2021',
        highlights: [
          'Modernizei a UI e melhorei a responsividade mobile no internet banking Angular do Banco Fibra.',
        ],
        technologies: [
          { name: 'Angular', icon: 'angular' },
          { name: 'TypeScript', icon: 'typescript' },
        ],
      },
      {
        company: 'Basis S.A.',
        role: 'Engenheiro de Software Full Stack Júnior',
        period: 'dez 2018 – set 2020',
        highlights: [
          'Contribuí para novas funcionalidades e correções no backend Java e frontend Angular do sistema nacional do IBAMA para gestão de autorizações de supressão vegetal em mais de 10 milhões de hectares de floresta.',
        ],
        technologies: [
          { name: 'Java', icon: 'openjdk' },
          { name: 'Angular', icon: 'angular' },
          { name: 'Oracle', icon: 'oracle' },
        ],
      },
    ],
    featuredProject: {
      name: 'BeachRank',
      summary: 'Aplicação web mobile-first para grupos casuais de beach tennis.',
      liveUrl: 'https://beachrank-eight.vercel.app/',
      repositoryUrl: 'https://github.com/mauricio-azevedo/beachrank',
      image: beachRankImage,
      features: [
        'Grupos casuais de beach tennis',
        'Links de convite e membros',
        'Registro de partidas em duplas',
        'Rankings e ratings por grupo',
        'Histórico de partidas e perfis',
        'Feed leve de atividades',
      ],
    },
    labels: {
      primaryNavigation: 'Navegação principal',
      mobileNavigation: 'Navegação mobile',
      openNavigation: 'Abrir navegação',
      resume: 'Currículo',
      resumeAria: 'Abrir currículo em uma nova aba',
      aboutSection: 'Sobre',
      aboutTitle: 'Sobre Maurício',
      techStackSection: 'Stacks',
      techStackTitle: 'Stacks',
      techStackAria: 'Stacks de tecnologia',
      experienceSection: 'Experiência',
      experienceTitle: 'Experiência',
      experienceAria: 'Experiência',
      featuredProjectSection: 'Projeto em Destaque',
      online: 'Online',
      liveLink: 'Ver online',
      repositoryLink: 'Ver repositório',
      contactAria: 'Contato',
      contactTitle: 'Vamos construir algo útil juntos.',
      contactSubtitle: 'Estou aberto a novas oportunidades e projetos interessantes.',
      footerRights: 'Todos os direitos reservados.',
    },
  },
};
