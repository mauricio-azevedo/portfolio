import { experiences } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

export function Experience() {
  return (
    <section id="experience" className="min-w-0" aria-labelledby="experience-title">
      <SectionLabel>Experience</SectionLabel>
      <h2 id="experience-title" className="sr-only">
        Experience
      </h2>

      <div className="relative mt-4 grid gap-6 pl-[25px] before:absolute before:bottom-3 before:left-[5px] before:top-3 before:w-px before:bg-slate-200 before:content-['']">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="relative grid grid-cols-[190px_1fr] gap-7 before:absolute before:left-[-24px] before:top-2 before:size-2.5 before:rounded-full before:bg-blue-700 before:shadow-[0_0_0_5px_#fbfcff] before:content-[''] max-[720px]:grid-cols-1 max-[720px]:gap-1"
          >
            <div>
              <h3 className="m-0 text-base font-bold leading-tight text-slate-950">{experience.company}</h3>
              <span className="mt-0.5 block text-[0.86rem] text-slate-600">{experience.role}</span>
            </div>

            <div>
              <p className="m-0 text-[0.92rem] font-medium text-slate-500">{experience.period}</p>
              <p className="m-0 text-sm leading-normal text-slate-600">{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
