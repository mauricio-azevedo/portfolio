const skills = [
  'TypeScript',
  'JavaScript',
  'Java',
  'Ruby',
  'React',
  'Angular',
  'Tailwind CSS',
  'Node.js',
  'NestJS',
  'Express',
  'Spring Boot',
  'Ruby on Rails',
  'PostgreSQL',
  'Oracle',
  'Redis',
  'AWS',
  'Docker',
  'GitHub Actions',
  'Prisma',
  'TypeORM',
  'Active Record',
  'Jest',
  'JUnit',
  'RSpec',
];

const experiences = [
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

const projectFeatures = [
  'Casual beach tennis groups',
  'Invite links and memberships',
  'Doubles match registration',
  'Group rankings and ratings',
  'Match history and profiles',
  'Activity feed moments',
];

const skillsList = document.querySelector('#skills-list');
const experienceList = document.querySelector('#experience-list');
const projectFeaturesList = document.querySelector('#project-features');
const currentYear = document.querySelector('#current-year');

skillsList.innerHTML = skills.map((skill) => `<span class="tag">${skill}</span>`).join('');

experienceList.innerHTML = experiences
  .map(
    (experience) => `
      <article class="timeline-item">
        <div>
          <h3>${experience.company}</h3>
          <span class="timeline-role">${experience.role}</span>
        </div>
        <div>
          <p class="timeline-period">${experience.period}</p>
          <p class="timeline-description">${experience.description}</p>
        </div>
      </article>
    `,
  )
  .join('');

projectFeaturesList.innerHTML = projectFeatures.map((feature) => `<li>${feature}</li>`).join('');

currentYear.textContent = new Date().getFullYear();
