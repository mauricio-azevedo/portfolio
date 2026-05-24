import { techStack } from '../data/portfolio';
import { getTechnologyLogoUrl } from '../lib/assets';
import type { Technology } from '../types/portfolio';
import { SectionLabel } from './SectionLabel';

type TechBadgeProps = {
  technology: Technology;
};

function TechBadge({ technology }: TechBadgeProps) {
  return (
    <li className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700">
      <img
        className="size-[18px] flex-none object-contain"
        src={getTechnologyLogoUrl(technology.icon)}
        alt=""
        width="18"
        height="18"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        aria-hidden="true"
      />
      <span>{technology.name}</span>
    </li>
  );
}

export function TechStack() {
  return (
    <section id="tech-stack" className="border-b border-slate-200 py-12" aria-labelledby="tech-stack-title">
      <SectionLabel>Tech Stack</SectionLabel>
      <h2 id="tech-stack-title" className="sr-only">
        Tech stack
      </h2>

      <div className="mt-6 overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]">
        <div className="flex min-w-max gap-8">
          {techStack.map((group) => (
            <article key={group.id} className="flex flex-none items-center gap-4" aria-labelledby={`${group.id}-tech-title`}>
              <h3 id={`${group.id}-tech-title`} className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {group.category}
              </h3>
              <ul className="flex flex-nowrap gap-2" aria-label={`${group.category} technologies`}>
                {group.items.map((technology) => (
                  <TechBadge key={technology.name} technology={technology} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
