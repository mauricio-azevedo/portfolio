import { techStack } from '../data/portfolio';
import { getTechnologyLogoUrl } from '../lib/assets';
import type { Technology } from '../types/portfolio';
import { SectionLabel } from './SectionLabel';

type TechBadgeProps = {
  technology: Technology;
};

function TechBadge({ technology }: TechBadgeProps) {
  return (
    <li className="inline-flex min-h-9 flex-none items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white/80 px-2.5 py-2 text-sm font-semibold leading-none text-slate-700 shadow-[0_10px_24px_rgba(16,23,42,0.035)]">
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
      <span className="text-xs">{technology.name}</span>
    </li>
  );
}

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="min-w-0 border-l border-slate-200 pl-7 max-[980px]:border-l-0 max-[980px]:border-t max-[980px]:pl-0 max-[980px]:pt-7"
      aria-labelledby="tech-stack-title"
    >
      <SectionLabel>Tech Stack</SectionLabel>
      <h2 id="tech-stack-title" className="sr-only">
        Tech stack
      </h2>

      <div className="mt-4 grid gap-3">
        {techStack.map((group) => (
          <article
            key={group.id}
            className="rounded-[14px] border border-slate-100 bg-white/70 p-4 shadow-[0_10px_24px_rgba(16,23,42,0.025)]"
            aria-labelledby={`${group.id}-tech-title`}
          >
            <h3
              id={`${group.id}-tech-title`}
              className="m-0 text-sm font-bold tracking-[-0.02em] text-[#101735]"
            >
              {group.category}
            </h3>
            <ul
              className="mt-3 flex flex-wrap gap-2.5"
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
