import { featuredProject } from '../data/portfolio';
import { getPublicAssetUrl } from '../lib/assets';
import { SectionLabel } from './SectionLabel';

export function FeaturedProject() {
  return (
    <section
      id="projects"
      className="mt-5 rounded-[28px] border border-white/70 bg-slate-950 px-10 py-9 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] max-[980px]:px-6 max-[980px]:py-7"
      aria-labelledby="project-title"
    >
      <SectionLabel>Featured Project</SectionLabel>

      <article className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(320px,0.64fr)] lg:items-center">
        <div>
          <div className="mb-7 flex items-center gap-4">
            <div
              className="grid size-12 flex-none place-items-center rounded-2xl bg-white text-xl font-extrabold text-slate-950 shadow-[0_16px_40px_rgba(255,255,255,0.12)]"
              aria-hidden="true"
            >
              ◌
            </div>
            <div>
              <h2 id="project-title" className="m-0 text-3xl font-bold tracking-[-0.06em] text-white">
                {featuredProject.name}
              </h2>
              <p className="mt-1 text-sm leading-snug text-slate-300">{featuredProject.summary}</p>
            </div>
          </div>

          <ul
            className="mb-7 grid grid-cols-2 gap-x-5 gap-y-3 p-0 max-[720px]:grid-cols-1"
            aria-label={`${featuredProject.name} features`}
          >
            {featuredProject.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-slate-200">
                <span
                  className="grid size-5 flex-none place-items-center rounded-full bg-blue-500/15 text-[0.7rem] text-blue-200 ring-1 ring-blue-300/20"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5"
            href={featuredProject.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            View project
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div
          className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-2 shadow-[0_22px_70px_rgba(0,0,0,0.2)]"
          aria-label={`${featuredProject.name} project preview`}
        >
          <img
            className="block w-full rounded-[18px]"
            src={getPublicAssetUrl(featuredProject.image.src)}
            alt={featuredProject.image.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </article>
    </section>
  );
}
