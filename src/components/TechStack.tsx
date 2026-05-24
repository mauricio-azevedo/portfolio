import { techStack } from '../data/portfolio';
import { getTechnologyLogoUrl } from '../lib/assets';
import type { Technology } from '../types/portfolio';
import { SectionLabel } from './SectionLabel';

type TechBadgeProps = {
  technology: Technology;
};

function TechBadge({ technology }: TechBadgeProps) {
  return (
    <li className="inline-flex min-h-9 flex-none items-center gap-2 whitespace-nowrap rounded-full border border-slate-200/80 bg-white/85 px-3 py-2 text-sm font-semibold leading-none text-slate-700 shadow-sm">
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
      className="mt-5 rounded-[28px] border border-white/70 bg-white/55 px-10 py-9 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl max-[980px]:px-6 max-[980px]:py-7"
      aria-labelledby="tech-stack-title"
    >
      <div>
        <SectionLabel>Tech Stack</SectionLabel>
        <h2 id="tech-stack-title" className="mt-2 text-2xl font-bold tracking-[-0.05em] text-slate-950">
          Focused, modern, production-ready.
        </h2>
      </div>

      <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200/80 bg-slate-950/[0.025] p-3 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]">
        <div className="flex min-w-max items-stretch gap-3">
          {techStack.map((group) => (
            <article
              key={group.id}
              className="flex flex-none items-center gap-4 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_14px_32px_rgba(15,23,42,0.055)]"
              aria-labelledby={`${group.id}-tech-title`}
            >
              <h3
                id={`${group.id}-tech-title`}
                className="m-0 min-w-[92px] text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500"
              >
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
