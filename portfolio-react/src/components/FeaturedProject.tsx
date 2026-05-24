import { featuredProject } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

export function FeaturedProject() {
  return (
    <article id="projects" className="border-l border-slate-200 pl-7 max-[980px]:border-l-0 max-[980px]:pl-0" aria-labelledby="project-title">
      <SectionLabel>Featured Project</SectionLabel>

      <div className="mt-4 flex flex-col gap-4 overflow-hidden rounded-[18px] border border-slate-200 bg-white/70 px-5 py-6 shadow-[0_16px_40px_rgba(16,23,42,0.04)]">
        <div>
          <div className="mb-[22px] flex items-center gap-3.5">
            <div className="grid size-12 flex-none place-items-center rounded-[14px] bg-gradient-to-br from-blue-400 to-blue-700 text-xl font-extrabold text-white" aria-hidden="true">
              ◌
            </div>
            <div>
              <h2 id="project-title" className="m-0 text-[1.45rem] font-bold tracking-[-0.04em] text-slate-950">
                {featuredProject.name}
              </h2>
              <p className="mt-0.5 text-[0.92rem] leading-snug text-slate-600">{featuredProject.summary}</p>
            </div>
          </div>

          <ul className="mb-6 grid grid-cols-2 gap-x-4 gap-y-2.5 p-0 max-[720px]:grid-cols-1" aria-label={`${featuredProject.name} features`}>
            {featuredProject.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-[#30384d]">
                <span className="grid size-4 flex-none place-items-center rounded-full border border-blue-700/45 text-[0.65rem] text-blue-700" aria-hidden="true">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            className="inline-flex items-center gap-2.5 font-bold text-blue-700 transition-colors hover:text-blue-800"
            href={featuredProject.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            View project
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="overflow-hidden rounded-[16px] border border-slate-100 bg-slate-50" aria-label={`${featuredProject.name} project preview`}>
          <img className="block w-full" src={featuredProject.image.src} alt={featuredProject.image.alt} loading="lazy" decoding="async" />
        </div>
      </div>
    </article>
  );
}
