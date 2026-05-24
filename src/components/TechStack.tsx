import { techStack } from '../data/portfolio';
import { getTechnologyLogoUrl } from '../lib/assets';
import type { Technology } from '../types/portfolio';
import { SectionContent } from './SectionContent';
import { SectionLabel } from './SectionLabel';

type TechBadgeProps = {
  technology: Technology;
};

function TechBadge({ technology }: TechBadgeProps) {
  return (
    <li className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-700">
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
  const [stack] = techStack;

  return (
    <section id="tech-stack" className="border-b border-slate-200 py-12" aria-labelledby="tech-stack-title">
      <SectionLabel>Stacks</SectionLabel>
      <h2 id="tech-stack-title" className="sr-only">
        Stacks
      </h2>

      <SectionContent>
        <ul className="mt-6 flex flex-wrap justify-around gap-2.5" aria-label="Technology stacks">
          {stack.items.map((technology) => (
            <TechBadge key={technology.name} technology={technology} />
          ))}
        </ul>
      </SectionContent>
    </section>
  );
}
