import { experiences } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

export function Experience() {
  return (
    <section id="experience" className="min-w-0" aria-labelledby="experience-title">
      <SectionLabel>Experience</SectionLabel>
      <h2 id="experience-title" className="sr-only">
        Experience
      </h2>

      <div className="mt-6 divide-y divide-slate-200">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="grid grid-cols-[240px_1fr] gap-8 py-6 first:pt-0 last:pb-0 max-[720px]:grid-cols-1 max-[720px]:gap-2"
          >
            <div>
              <h3 className="m-0 text-base font-semibold leading-tight tracking-[-0.02em] text-slate-950">
                {experience.company}
              </h3>
              <span className="mt-1 block text-sm leading-snug text-slate-500">{experience.role}</span>
            </div>

            <div>
              <p className="m-0 text-sm font-medium text-slate-500">{experience.period}</p>
              <p className="m-0 mt-2 max-w-[680px] text-sm leading-6 text-slate-600">{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
