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
          'Delivered production features for an AI-assisted education platform used daily by 10,000+ students and hundreds of teachers across dozens of schools.',
          'Worked on core learning workflows where AI generated assessments, analyzed performance, and helped create personalized lesson plans based on individual results.',
          'Contributed to AI-powered essay review workflows, including production fixes in an essay reading/correction microservice providing automated feedback to students.',
          'Resolved critical production issues across authentication and account-access flows, including login, password reset, and SSO microservices.',
          'Expanded API test coverage from 50% to 80% by adding unit tests around critical backend features and business rules.',
          'Partnered with product owners, stakeholders, designers, and creative directors to turn complex academic workflows into intuitive, reliable product experiences.',
        ],
        technologies: [
          { name: 'React', icon: 'react' },
          { name: 'Next.js', icon: 'nextdotjs' },
          { name: 'Ruby on Rails', icon: 'rubyonrails' },
        ],
      },
      {
        company: 'Inkluziva',
        role: 'Lead Full Stack Software Engineer',
        period: 'Feb 2024 – Aug 2024',
        highlights: [
          'Led development of a USDT trading automation platform integrated with Binance API, supporting daily buy/sell operations involving BRL 10M+ with limited supervision.',
          'Owned product and technical execution as sole developer, working with the company owner to turn trading operations into automated workflows and system rules.',
          'Built and shipped the platform end to end, including trading flows, Binance API integration, banking/payment APIs, business rules, and edge-case handling.',
          'Co-designed and implemented reconciliation logic matching Binance trades with bank statement records by amount, date, and payer identity to trigger USDT release.',
          'Automated crypto trading tax reporting, eliminating recurring manual errors and replacing full-day manual reporting work.',
          'Reduced dependency on manual trading operations previously handled by a 3-person team and later mentored a junior developer as the engineering team expanded.',
          'Identified and remediated 3 critical security vulnerabilities across the platform, improving reliability and reducing production risk.',
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
        technologies: [
          { name: 'Angular', icon: 'angular' },
        ],
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
      name: 'BeachRank',
      summary: 'BeachRank turns casual beach tennis groups into rankings, match history, player profiles, stats, invites, and an activity feed.',
      liveUrl: 'https://beachrank-eight.vercel.app/',
      repositoryUrl: 'https://github.com/mauricio-azevedo/beachrank',
      image: beachRankImage,
      features: [
        'Built around a score-aware Elo-inspired doubles rating system, historical recalculation for edits and retroactive matches, transactionally synced feed events, and clear product/domain boundaries.',
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
          'Entreguei features em produção para uma plataforma educacional com IA usada diariamente por 10.000+ alunos e centenas de professores em dezenas de escolas.',
          'Trabalhei em fluxos onde IA gerava avaliações, analisava desempenho e criava planos de aula personalizados com base nos resultados individuais.',
          'Contribuí para fluxos de correção de redação com IA, incluindo fixes em produção em um microserviço de leitura/correção com feedback automatizado.',
          'Resolvi problemas críticos de produção em fluxos de autenticação e acesso à conta, incluindo login, troca de senha e microserviços de SSO.',
          'Expandi a cobertura de testes de API de 50% para 80% adicionando testes unitários em features críticas de backend e regras de negócio.',
          'Trabalhei com product owners, stakeholders, designers e diretores criativos para transformar fluxos acadêmicos complexos em experiências intuitivas e confiáveis.',
        ],
        technologies: [
          { name: 'React', icon: 'react' },
          { name: 'Next.js', icon: 'nextdotjs' },
          { name: 'Ruby on Rails', icon: 'rubyonrails' },
        ],
      },
      {
        company: 'Inkluziva',
        role: 'Engenheiro de Software Full Stack Líder',
        period: 'fev 2024 – ago 2024',
        highlights: [
          'Liderei uma plataforma de automação de compra/venda de USDT integrada à Binance, suportando operações diárias de BRL 10M+ com supervisão limitada.',
          'Assumi execução técnica e de produto como único dev, transformando operações de trading em workflows automatizados e regras de sistema.',
          'Construí e entreguei a plataforma end-to-end, incluindo fluxos de trading, Binance API, APIs bancárias/de pagamento, regras de negócio e edge cases.',
          'Co-desenhei e implementei lógica de conciliação que cruzava trades na Binance com registros do extrato bancário por valor, data e pagador para liberar USDT.',
          'Automatizei o tax reporting de operações cripto, eliminando erros manuais recorrentes e substituindo trabalho manual de dia inteiro.',
          'Reduzi a dependência de operações manuais antes conduzidas por 3 pessoas e depois mentorei um dev júnior conforme o time cresceu.',
          'Identifiquei e corrigi 3 vulnerabilidades críticas de segurança na plataforma, melhorando confiabilidade e reduzindo risco em produção.',
        ],
        technologies: [
          { name: 'React', icon: 'react' },
          { name: 'Node.js', icon: 'nodedotjs' },
          { name: 'NestJS', icon: 'nestjs' },
        ],
      },
      {
        company: 'Incript',
        role: 'Engenheiro de Software Full Stack Pleno',
        period: 'abr 2023 – jan 2024',
        highlights: [
          'Rearquitetei codebases herdadas de uma carteira digital cripto, melhorando manutenibilidade com organização por feature, componentes reutilizáveis, services, controllers enxutos e repositories.',
          'Construí features em produção para fluxos de wallet, integrações com APIs de pagamento, lógica de autenticação e operações financeiras voltadas ao usuário.',
          'Projetei e implementei do zero uma feature end-to-end de criação de NFT, permitindo gerar NFTs customizáveis em segundos sem conhecimento de blockchain.',
          'Construí do zero o frontend de uma plataforma que adaptava obras clássicas para quadrinhos e ajudava estudantes a se prepararem para vestibulares.',
          'Desenvolvi um leitor web contínuo e arrastável com comportamento mobile-like, otimizando performance no browser para leitura longa de quadrinhos.',
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
        role: 'Engenheiro de Software Front-End Pleno',
        period: 'fev 2021 – mai 2021',
        highlights: [
          'Modernizei componentes de UI e responsividade mobile no web banking do Banco Fibra, contribuindo para uma experiência mais confiável e usável.',
        ],
        technologies: [
          { name: 'Angular', icon: 'angular' },
        ],
      },
      {
        company: 'Basis S.A.',
        role: 'Engenheiro de Software Full Stack Júnior',
        period: 'dez 2018 – set 2020',
        highlights: [
          'Contribuí com features, bugs e manutenção no sistema nacional do IBAMA para gestão de supressão vegetal e exploração florestal em milhões de hectares.',
        ],
        technologies: [
          { name: 'Angular', icon: 'angular' },
          { name: 'Java', icon: 'openjdk' },
          { name: 'Spring Boot', icon: 'springboot' },
        ],
      },
    ],
    featuredProject: {
      name: 'BeachRank',
      summary: 'BeachRank transforma grupos casuais de beach tennis em rankings, histórico de partidas, perfis de jogadores, stats, convites e um feed de atividades.',
      liveUrl: 'https://beachrank-eight.vercel.app/',
      repositoryUrl: 'https://github.com/mauricio-azevedo/beachrank',
      image: beachRankImage,
      features: [
        'Construído em torno de um sistema de rating de duplas inspirado em Elo e sensível ao placar, recálculo histórico para edições e partidas retroativas, eventos de feed sincronizados transacionalmente e fronteiras claras de produto/domínio.',
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