import { featuredProject } from '../data/portfolio';
import { getPublicAssetUrl } from '../lib/assets';
import { SectionLabel } from './SectionLabel';

export function FeaturedProject() {
  return (
    <section id="projects" className="border-b border-slate-200 py-12" aria-labelledby="project-title">
      <SectionLabel>Featured Project</SectionLabel>

      <article className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-start">
        <div>
          <h2 id="project-title" className="m-0 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
            {featuredProject.name}
          </h2>
          <p className="mt-2 max-w-[540px] text-base leading-7 text-slate-600">{featuredProject.summary}</p>

          <ul
            className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 p-0 max-[720px]:grid-cols-1"
            aria-label={`${featuredProject.name} features`}
          >
            {featuredProject.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="size-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <a
            className="mt-8 inline-flex items-center gap-2 border-b border-slate-400 pb-1 text-sm font-semibold text-slate-950 transition-colors hover:border-slate-950"
            href={featuredProject.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            View project
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2" aria-label={`${featuredProject.name} project preview`}>
          <img
            className="block w-full rounded-xl"
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
