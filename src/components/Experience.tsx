import { experiences } from '../data/portfolio';
import { getTechnologyLogoUrl } from '../lib/assets';
import { SectionLabel } from './SectionLabel';

export function Experience() {
  return (
    <section id="experience" className="min-w-0" aria-labelledby="experience-title">
      <SectionLabel>Experience</SectionLabel>
      <h2 id="experience-title" className="sr-only">
        Experience
      </h2>

      <div className="relative mt-7 pl-8 before:absolute before:bottom-0 before:left-[5px] before:top-1 before:w-px before:bg-slate-300 before:content-['']">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.period}`} className="relative pb-10 last:pb-0">
            <span
              className="absolute left-[-31px] top-1 grid size-3 place-items-center rounded-full border border-slate-500 bg-[#f8f8f6]"
              aria-hidden="true"
            />

            <div className="grid grid-cols-[140px_1fr] gap-7 max-[720px]:grid-cols-1 max-[720px]:gap-2">
              <p className="m-0 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                {experience.period}
              </p>

              <div>
                <h3 className="m-0 text-base font-semibold leading-tight tracking-[-0.02em] text-slate-950">
                  {experience.role} at <span className="font-bold">{experience.company}</span>
                </h3>

                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-600">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3" aria-label={`${experience.company} technologies`}>
                  {experience.technologies.map((technology) => (
                    <li key={technology.name} className="inline-flex items-center gap-2 text-sm text-slate-600">
                      <img
                        className="size-4 object-contain"
                        src={getTechnologyLogoUrl(technology.icon)}
                        alt=""
                        width="16"
                        height="16"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        aria-hidden="true"
                      />
                      <span>{technology.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
