const skills = [
  "TypeScript",
  "JavaScript",
  "Java",
  "Ruby",
  "React",
  "Angular",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "Express",
  "Spring Boot",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "GitHub Actions",
  "Prisma",
  "TypeORM",
  "Jest",
];

const experiences = [
  {
    company: "Estudologia",
    role: "Senior Full Stack Software Engineer",
    period: "2023 – Present",
    description:
      "Building and evolving education platforms used across Brazil, focused on scalability and performance.",
  },
  {
    company: "Inkluziva",
    role: "Lead Full Stack Software Engineer",
    period: "2022 – 2023",
    description:
      "Led the development of accessible digital solutions that connect people and improve outcomes.",
  },
  {
    company: "Incript",
    role: "Mid-Level Full Stack Software Engineer",
    period: "2021 – 2022",
    description:
      "Worked on enterprise systems and APIs with strong focus on clean architecture and code quality.",
  },
  {
    company: "OpahIT",
    role: "Mid-Level Front-End Software Engineer",
    period: "2019 – 2021",
    description:
      "Delivered web applications and internal tools for multiple clients with performance and UX in mind.",
  },
  {
    company: "Basis S.A.",
    role: "Junior Full Stack Software Engineer",
    period: "2017 – 2019",
    description:
      "Contributed to large-scale projects, focusing on backend services and data integrity.",
  },
];

const projectFeatures = [
  "Group rankings",
  "Doubles match registration",
  "Elo-inspired rating system",
  "Match history",
  "Personal stats",
  "Social feed",
];

const skillsList = document.querySelector("#skills-list");
const experienceList = document.querySelector("#experience-list");
const projectFeaturesList = document.querySelector("#project-features");
const currentYear = document.querySelector("#current-year");

skillsList.innerHTML = skills
  .map((skill) => `<span class="tag">${skill}</span>`)
  .join("");

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
  .join("");

projectFeaturesList.innerHTML = projectFeatures
  .map((feature) => `<li>${feature}</li>`)
  .join("");

currentYear.textContent = new Date().getFullYear();
