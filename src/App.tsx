type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: 'Senior Full Stack Software Engineer',
    company: 'Estudologia',
    period: 'Aug 2024 – Jan 2026',
    highlights: [
      'Built the Ruby backend and React frontend for two academic management systems serving 10,000+ low-income students, expanding access to interactive content and boosting engagement.',
      'Built a quiz game feature end to end, from database schema and backend API design to asynchronous question generation with background jobs and the OpenAI API.',
      'Implemented real-time game state updates and notifications using WebSockets.',
      'Implemented Redis-based inter-service communication and queue orchestration for an automated student essay grading pipeline powered by the OpenAI API.',
      'Optimized a critical API used on nearly every screen, reducing response time from 20s to 300ms.',
      'Expanded API test coverage from 50% to 80% by writing unit tests for over 5,000 lines of code across critical API features.',
      'Built a Ruby backend for a full-featured commercial library management system, covering core workflows such as catalog management, member accounts, reservations, and book checkouts and returns.',
    ],
  },
  {
    role: 'Lead Full Stack Software Engineer',
    company: 'Inkluziva',
    period: 'Feb 2024 – Aug 2024',
    highlights: [
      'Led technical delivery as the primary engineer on the team, working closely with stakeholders to shape requirements and define solutions.',
      'Led the development of a React frontend and Node.js backend for an automated trading system on Binance.',
      'Automated the company’s tax reporting for crypto trading, eliminating human error and saving 20 hours of manual work per week.',
      'Remediated 3 critical security vulnerabilities and strengthened platform security controls.',
      'Built the Angular frontend and Node.js backend for a digital wallet used in crypto trading, integrating PIX and credit card payment APIs and implementing cookie-based JWT authentication with refresh token flows.',
      'Developed a feature for creating fully customizable NFTs in seconds, with no blockchain knowledge required.',
    ],
  },
  {
    role: 'Mid-Level Full Stack Software Engineer',
    company: 'Incript',
    period: 'Apr 2023 – Jan 2024',
    highlights: [
      'Led the development of the Angular frontend of an educational platform, enabling public-school students to engage with literary content and prepare for Brazil’s college entrance exams.',
      'Built the React frontend of a security devices management system for homes and buildings.',
      'Optimized critical pages, reducing load times from up to 6 seconds to less than 1 second.',
    ],
  },
  {
    role: 'Mid-Level Front-End Software Engineer',
    company: 'OpahIT',
    period: 'Feb 2021 – May 2021',
    highlights: ['Modernized the UI and improved mobile responsiveness in Banco Fibra’s Angular web banking app.'],
  },
  {
    role: 'Junior Full Stack Software Engineer',
    company: 'Basis S.A.',
    period: 'Dec 2018 – Sep 2020',
    highlights: [
      'Contributed to new features and resolved bugs across the Java backend and Angular frontend of IBAMA’s nationwide system for managing tree-felling and logging permits in over 10 million hectares of forest.',
    ],
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ExperienceEntry({ experience }: { experience: ExperienceItem }) {
  return (
    <article className="experience-entry">
      <div className="entry-heading">
        <h3>
          {experience.role} <span>at</span> <em>{experience.company}</em>
        </h3>
        <strong>{experience.period}</strong>
      </div>
      <ul>
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

export default function App() {
  return (
    <main className="resume-page" aria-label="Maurício Azevedo resume">
      <header className="resume-header">
        <div className="identity">
          <div className="name-line">
            <h1>Maurício Azevedo</h1>
            <p>Senior Full Stack Software Engineer</p>
          </div>
          <p className="contact-line">
            <a href="mailto:mauricio.mendonca.azevedo@gmail.com">mauricio.mendonca.azevedo@gmail.com</a>
            <span>|</span>
            <a href="tel:+5561999997353">+55 61 99999-7353</a>
            <span>|</span>
            <a href="https://github.com/mauricio-azevedo">GitHub</a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/mauricio-azevedo">LinkedIn</a>
          </p>
        </div>
        <p className="location">Brasília, Brazil — Remote (UTC−3)</p>
      </header>

      <Section title="Technical Skills">
        <p className="skills-line">
          <strong>Languages:</strong> TypeScript, JavaScript, Java, Ruby <span>|</span> <strong>Frontend:</strong> React,
          Angular, Tailwind CSS <span>|</span> <strong>Backend:</strong> Node.js, NestJS, Express, Spring Boot, Ruby on
          Rails <span>|</span> <strong>Databases:</strong> PostgreSQL, Oracle, Redis <span>|</span>{' '}
          <strong>Cloud & DevOps:</strong> AWS, Docker, GitHub Actions <span>|</span> <strong>ORM/Data Access:</strong> Prisma,
          TypeORM, Active Record <span>|</span> <strong>Testing:</strong> Jest, JUnit, RSpec
        </p>
      </Section>

      <Section title="Professional Experience">
        {experiences.map((experience) => (
          <ExperienceEntry key={`${experience.role}-${experience.company}`} experience={experience} />
        ))}
      </Section>

      <Section title="Selected Projects">
        <article className="project-entry">
          <div className="project-heading">
            <h3>
              Skill-Based Doubles Matchmaker —{' '}
              <a href="https://github.com/mauricio-azevedo/skill-based-matchmaker-frontend">GitHub</a>
              <span>|</span>
              <a href="https://mauricioazevedo.com">Live</a>
            </h3>
            <strong>React, TypeScript, Tailwind CSS (Shadcn/ui)</strong>
          </div>
          <ul>
            <li>Mobile-first web app for scheduling doubles matches with skill-based balancing and court management.</li>
          </ul>
        </article>
      </Section>

      <Section title="Languages">
        <p className="simple-line">
          <strong>English:</strong> professional working proficiency <span>|</span> <strong>Portuguese:</strong> native
        </p>
      </Section>

      <Section title="Education">
        <div className="education-line">
          <p>
            <strong>Centro Universitário do Distrito Federal (UDF)</strong> — Systems Analysis and Development
          </p>
          <strong>2018 – 2023</strong>
        </div>
      </Section>
    </main>
  );
}
