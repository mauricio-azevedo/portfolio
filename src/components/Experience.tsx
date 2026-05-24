import { experiences } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

export function Experience() {
  return (
    <section id="experience" className="min-w-0" aria-labelledby="experience-title">
      <SectionLabel>Experience</SectionLabel>
      <h2 id="experience-title" className="mt-2 text-2xl font-bold tracking-[-0.05em] text-slate-950">
        Proven delivery across product, platform, and public-sector systems.
      </h2>

      <div className="relative mt-7 grid gap-4 pl-[26px] before:absolute before:bottom-5 before:left-[5px] before:top-5 before:w-px before:bg-gradient-to-b before:from-blue-600/40 before:via-slate-300 before:to-transparent before:content-['']">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="relative grid grid-cols-[240px_1fr] gap-7 rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.045)] before:absolute before:left-[-26px] before:top-6 before:size-2.5 before:rounded-full before:bg-blue-700 before:shadow-[0_0_0_6px_rgba(255,255,255,0.95)] before:content-[''] max-[720px]:grid-cols-1 max-[720px]:gap-2"
          >
            <div>
              <h3 className="m-0 text-base font-bold leading-tight tracking-[-0.03em] text-slate-950">
                {experience.company}
              </h3>
              <span className="mt-1 block text-[0.85rem] leading-snug text-slate-500">{experience.role}</span>
            </div>

            <div>
              <p className="m-0 text-[0.82rem] font-bold uppercase tracking-[0.14em] text-blue-700/70">
                {experience.period}
              </p>
              <p className="m-0 mt-2 text-sm leading-6 text-slate-600">{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
