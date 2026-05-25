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
        'I build reliable full-stack products across frontend, backend, databases, cloud and DevOps.',
      heroNote:
        'I focus on delivering production-ready software with clear architecture, measurable impact, and maintainable code.',
      about:
        'I’m a senior full stack engineer focused on building reliable product software across education, fintech, banking, and public-sector systems. I work across React and Angular frontends, Node.js and Ruby backends, APIs, databases, cloud infrastructure, and automation workflows — always with a bias toward clear architecture, measurable impact, and maintainable delivery.',
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
        'Construo produtos full stack confiáveis entre frontend, backend, bancos de dados, cloud e DevOps.',
      heroNote:
        'Meu foco é entregar software pronto para produção, com arquitetura clara, impacto mensurável e código fácil de manter.',
      about:
        'Sou engenheiro de software full stack sênior focado em construir produtos confiáveis para educação, fintech, banking e sistemas públicos. Trabalho com frontends em React e Angular, backends em Node.js e Ruby, APIs, bancos de dados, infraestrutura cloud e automações — sempre buscando arquitetura clara, impacto mensurável e entregas fáceis de manter.',
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
          'Construí sistemas em Ruby e React para produtos de gestão acadêmica usados por mais de 10.000 estudantes de baixa renda.',
          'Entreguei um jogo de quiz de ponta a ponta, com APIs, modelagem de dados, background jobs, geração de perguntas com OpenAI e atualizações em tempo real.',
          'Melhorei uma API crítica usada no produto de 20 segundos para 300 milissegundos e ampliei a cobertura de testes em funcionalidades centrais.',
          'Implementei orquestração com Redis para uma pipeline automatizada de correção de redações usando a API da OpenAI.',
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
          'Liderei a entrega técnica como engenheiro principal, trabalhando diretamente com stakeholders para moldar requisitos e definir soluções práticas.',
          'Construí produtos em React e Node.js para trading automatizado de cripto, carteiras digitais, integrações de pagamento e relatórios fiscais.',
          'Automatizei relatórios fiscais de cripto, removendo erros manuais e economizando cerca de 20 horas de trabalho por semana.',
          'Reforcei a segurança da plataforma corrigindo vulnerabilidades críticas e melhorando fluxos de autenticação.',
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
          'Liderei o frontend em Angular de uma plataforma educacional para estudantes de escolas públicas se preparando para vestibulares no Brasil.',
          'Construí uma interface em React para gerenciamento de dispositivos de segurança residenciais e prediais.',
          'Otimizei páginas críticas, reduzindo carregamentos de até 6 segundos para menos de 1 segundo.',
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
          'Modernizei a interface Angular do internet banking do Banco Fibra com foco maior em usabilidade e comportamento responsivo.',
          'Melhorei telas voltadas ao cliente em um produto financeiro onde clareza, confiabilidade e experiência mobile eram importantes.',
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
          'Contribuí para funcionalidades em Java e Angular no sistema nacional do IBAMA para gestão de autorizações de supressão vegetal.',
          'Trabalhei em software do setor público apoiando fluxos de autorização em mais de 10 milhões de hectares de floresta.',
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
