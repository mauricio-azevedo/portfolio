import { getTechnologyLogoUrl } from '../lib/assets';
import type { PortfolioLabels, Technology, TechnologyGroup } from '../types/portfolio';
import { SectionContent } from './SectionContent';
import { SectionLabel } from './SectionLabel';

const useGlobalSectionPadding = false;

type TechBadgeProps = {
  technology: Technology;
};

function TechBadge({ technology }: TechBadgeProps) {
  return (
    <li className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-700 max-[720px]:flex-col max-[720px]:justify-start max-[720px]:gap-1.5 max-[720px]:text-center max-[720px]:text-xs max-[720px]:leading-tight">
      <img
        className="size-[18px] flex-none object-contain max-[720px]:size-6"
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

type TechStackProps = {
  labels: PortfolioLabels;
  techStack: TechnologyGroup[];
};

export function TechStack({ labels, techStack }: TechStackProps) {
  const [stack] = techStack;

  return (
    <section id="tech-stack" className="border-b border-slate-200 py-12" aria-labelledby="tech-stack-title">
      <SectionLabel icon="stacks">{labels.techStackSection}</SectionLabel>
      <h2 id="tech-stack-title" className="sr-only">
        {labels.techStackTitle}
      </h2>

      <SectionContent withPadding={useGlobalSectionPadding}>
        <ul className="mt-6 flex flex-wrap justify-center gap-7 max-[720px]:grid max-[720px]:grid-cols-3 max-[720px]:justify-items-center max-[720px]:gap-x-4 max-[720px]:gap-y-6" aria-label={labels.techStackAria}>
          {stack.items.map((technology) => (
            <TechBadge key={technology.name} technology={technology} />
          ))}
        </ul>
      </SectionContent>
    </section>
  );
}
