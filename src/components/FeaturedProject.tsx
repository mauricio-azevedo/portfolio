import { featuredProject } from '../data/portfolio';
import { getPublicAssetUrl } from '../lib/assets';
import { SectionContent } from './SectionContent';
import { SectionLabel } from './SectionLabel';

export function FeaturedProject() {
  return (
    <section id="projects" className="border-b border-slate-200 py-12" aria-labelledby="project-title">
      <div className="rounded-[28px] bg-[#071A3D] px-8 py-9 text-white shadow-[0_24px_70px_rgba(7,26,61,0.18)] max-[720px]:px-5 max-[720px]:py-7">
        <SectionLabel>Featured Project</SectionLabel>

        <SectionContent>
          <article className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h2 id="project-title" className="m-0 text-3xl font-semibold tracking-[-0.05em] text-white">
                  {featuredProject.name}
                </h2>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                  <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  Online
                </span>
              </div>

              <p className="mt-2 max-w-[540px] text-base leading-7 text-slate-300">{featuredProject.summary}</p>

              <ul
                className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 p-0 max-[720px]:grid-cols-1"
                aria-label={`${featuredProject.name} features`}
              >
                {featuredProject.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="size-1.5 rounded-full bg-blue-300" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center gap-2 border-b border-white/55 pb-1 text-sm font-semibold text-white transition-colors hover:border-white"
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 border-b border-slate-400/50 pb-1 text-sm font-semibold text-slate-300 transition-colors hover:border-white hover:text-white"
                  href={featuredProject.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white/5 p-2 ring-1 ring-white/10" aria-label={`${featuredProject.name} project preview`}>
              <img
                className="block w-full rounded-xl"
                src={getPublicAssetUrl(featuredProject.image.src)}
                alt={featuredProject.image.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        </SectionContent>
      </div>
    </section>
  );
}
