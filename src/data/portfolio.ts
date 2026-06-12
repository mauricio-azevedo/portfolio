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
        role: 'Senior Full Stack Software Engineer',
        period: 'Aug 2024 – Jan 2026',
        highlights: [
          'Delivered production features for an AI-assisted education platform used daily by 10,000+ students, hundreds of teachers, and dozens of schools.',
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
        role: 'Lead Full Stack Software Engineer',
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
        'Construo software de produto para ambientes onde ambiguidade, regras complexas e confiabilidade importam.',
      heroNote:
        'Atuo do entendimento do problema à entrega em produção: modelo fluxos reais, desenho APIs e interfaces, reduzo risco técnico e transformo operações críticas em sistemas claros, seguros e mantíveis.',
      about:
        'Sou um engenheiro full stack orientado a produto, com experiência em sistemas de educação, fintech, cripto, automação operacional e plataformas com IA. Meu melhor trabalho acontece em contextos ambíguos: quando as regras ainda não estão claras, os fluxos têm exceções, a experiência precisa ser simples para o usuário e a arquitetura precisa sustentar evolução real do produto. Gosto de construir software que aguenta produção: interfaces claras, APIs alinhadas ao domínio, modelos de dados evolutivos, testes em pontos críticos e decisões técnicas que reduzem risco em vez de criar dívida invisível.',
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
          'Entreguei features em produção para uma plataforma educacional com IA usada diariamente por 10.000+ alunos, centenas de professores e dezenas de escolas.',
          'Trabalhei em fluxos centrais de IA para geração de avaliações, análise de desempenho, planos de aula personalizados e feedback de redações.',
          'Melhorei a confiabilidade de fluxos críticos de acesso à conta, incluindo login, recuperação de senha e serviços relacionados a SSO.',
          'Aumentei a cobertura de testes de API de 50% para 80% em features de backend e regras de negócio com alto risco de regressão.',
          'Trabalhei com produto, design e stakeholders acadêmicos para transformar fluxos educacionais complexos em experiências simples de usar em produção.',
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
          'Assumi a execução técnica de uma plataforma de automação de trading de USDT com BRL 10M+ em operações diárias.',
          'Construí o sistema end-to-end como único engenheiro, cobrindo fluxos de trading, integração com Binance, APIs bancárias/de pagamento, conciliação, tax reporting e edge cases operacionais.',
          'Desenhei fluxos de conciliação que cruzavam trades na Binance com extratos bancários por valor, data e identidade do pagador antes da liberação de USDT.',
          'Automatizei o reporting fiscal de operações cripto, substituindo um processo manual de dia inteiro e reduzindo erros operacionais recorrentes.',
          'Reduzi a dependência de uma operação manual conduzida por 3 pessoas e depois mentorei um dev júnior conforme o time cresceu.',
          'Identifiquei e corrigi 3 vulnerabilidades críticas, reduzindo risco financeiro e operacional em produção.',
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
        technologies: [{ name: 'Angular', icon: 'angular' }],
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
      name: 'Arena',
      summary:
        'Arena é uma plataforma social de ranking para grupos casuais de beach tennis. O produto transforma partidas que normalmente não deixam nenhum registro em histórico competitivo, ratings e rankings por grupo, perfis de jogadores, estatísticas e feed de atividade — passar um amigo no ranking, ver uma conquista no feed ou melhorar suas estatísticas pode ser mais um motivo para querer ganhar.',
      liveUrl: 'https://arenabeachtennis.com',
      repositoryUrl: 'https://github.com/mauricio-azevedo/arena',
      image: arenaImage,
      features: [
        'Ratings inspirados em sistemas usados no tênis profissional e no xadrez, onde placar e força dos adversários importam — uma derrota apertada contra um jogador mais forte ainda pode contar',
        'Perfis de jogadores que transformam jogadores casuais em competidores com histórico, estatísticas e reputação',
        'Conquistas, estatísticas e atualizações no feed que tornam cada vitória, sequência e conquista visível para o grupo',
        'Rankings por grupo que dão a cada círculo de jogadores sua própria liga, rivalidades e direito de se gabar',
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
      contactTitle: 'Quer transformar um problema complexo em produto confiável?',
      contactSubtitle:
        'Estou aberto a oportunidades onde produto, engenharia e qualidade de execução importam.',
      footerRights: 'Todos os direitos reservados.',
    },
  },
};
