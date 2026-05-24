import { techStack } from '../data/portfolio';
import { getTechnologyLogoUrl } from '../lib/assets';
import type { Technology } from '../types/portfolio';
import { SectionLabel } from './SectionLabel';

type TechBadgeProps = {
  technology: Technology;
};

function TechBadge({ technology }: TechBadgeProps) {
  return (
    <li className="inline-flex min-h-10 flex-none items-center gap-2.5 whitespace-nowrap rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-sm font-semibold leading-none text-slate-700 shadow-[0_10px_24px_rgba(16,23,42,0.035)]">
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
    <section
      id="tech-stack"
      className="border-t border-slate-200 px-16 py-[30px] max-[980px]:px-0 max-[980px]:py-7"
      aria-labelledby="tech-stack-title"
    >
      <SectionLabel>Tech Stack</SectionLabel>
      <h2 id="tech-stack-title" className="sr-only">
        Tech stack
      </h2>
      <div className="mt-4 grid">
        {techStack.map((group) => (
          <article
            key={group.id}
            className="grid grid-cols-1 gap-2.5 border-t border-slate-100 py-[15px] first:border-t-0 first:pt-0 last:pb-0"
            aria-labelledby={`${group.id}-tech-title`}
          >
            <h3
              id={`${group.id}-tech-title`}
              className="m-0 text-sm font-bold tracking-[-0.02em] text-[#101735]"
            >
              {group.category}
            </h3>
            <ul
              className="flex flex-wrap gap-2.5 py-2 pr-1"
              aria-label={`${group.category} technologies`}
            >
              {group.items.map((technology) => (
                <TechBadge key={technology.name} technology={technology} />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
