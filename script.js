const simpleIconsBaseUrl = 'https://cdn.simpleicons.org';

const techStack = [
  {
    category: 'Frontend',
    id: 'frontend',
    items: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    category: 'Backend',
    id: 'backend',
    items: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'Express', icon: 'express' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'Ruby', icon: 'ruby' },
      { name: 'Ruby on Rails', icon: 'rubyonrails' },
    ],
  },
  {
    category: 'Data',
    id: 'data',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Oracle', icon: 'oracle' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'TypeORM', icon: 'typeorm' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    id: 'cloud-devops',
    items: [
      { name: 'AWS', icon: 'amazonwebservices' },
      { name: 'Docker', icon: 'docker' },
      { name: 'GitHub Actions', icon: 'githubactions' },
    ],
  },
  {
    category: 'Testing',
    id: 'testing',
    items: [
      { name: 'Jest', icon: 'jest' },
      { name: 'JUnit 5', icon: 'junit5' },
      { name: 'RSpec', icon: 'rspec' },
    ],
  },
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

const buildIconUrl = (icon) => `${simpleIconsBaseUrl}/${icon}`;

const loadTechStackStyles = () => {
  if (document.querySelector('link[href="tech-stack.css"]')) return;

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'tech-stack.css';
  document.head.appendChild(stylesheet);
};

const createTechnologyItem = ({ name, icon }) => {
  const item = document.createElement('li');
  item.className = 'tech-item';

  const image = document.createElement('img');
  image.className = 'tech-logo';
  image.src = buildIconUrl(icon);
  image.alt = '';
  image.width = 18;
  image.height = 18;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.referrerPolicy = 'no-referrer';
  image.setAttribute('aria-hidden', 'true');

  const label = document.createElement('span');
  label.textContent = name;

  item.append(image, label);

  return item;
};

const renderTechStack = () => {
  if (!skillsList) return;

  const groups = document.createDocumentFragment();

  skillsList.className = 'tech-stack-groups';

  techStack.forEach(({ category, id, items }) => {
    const group = document.createElement('article');
    group.className = 'tech-category';
    group.setAttribute('aria-labelledby', `${id}-tech-title`);

    const title = document.createElement('h3');
    title.id = `${id}-tech-title`;
    title.className = 'tech-category-title';
    title.textContent = category;

    const list = document.createElement('ul');
    list.className = 'tech-row';
    list.setAttribute('aria-label', `${category} technologies`);

    items.forEach((technology) => {
      list.appendChild(createTechnologyItem(technology));
    });

    group.append(title, list);
    groups.appendChild(group);
  });

  skillsList.replaceChildren(groups);
};

loadTechStackStyles();
renderTechStack();

if (experienceList) {
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
}

if (projectFeaturesList) {
  projectFeaturesList.innerHTML = projectFeatures.map((feature) => `<li>${feature}</li>`).join('');
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
