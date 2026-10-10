import * as m from 'motion/react-m';
import { reveal, rise } from '../lib/motion';
import type { ExperienceItem, PortfolioLabels } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';

type ExperienceProps = {
  items: ExperienceItem[];
  period: string;
  labels: PortfolioLabels;
};

export function Experience({ items, period, labels }: ExperienceProps) {
  return (
    <m.section
      id="experience"
      className="space-y-8 pt-16"
      aria-labelledby="experience-title"
      {...reveal}
    >
      <SectionHeading id="experience-title" title={labels.experienceSection} meta={period} />

      <div>
        {items.map((item) => (
          <m.article
            key={`${item.company}-${item.period}`}
            className="space-y-2 py-6 first:pt-0 last:pb-0"
            variants={rise}
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-sm font-semibold text-on-surface">{item.role}</h3>
              <span className="shrink-0 font-mono text-xs text-outline">{item.period}</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              @ {item.company}
              {item.employer ? ` (${item.employer})` : null}
            </p>
            <p className="text-xs leading-relaxed text-on-surface-variant">{item.summary}</p>
          </m.article>
        ))}
      </div>
    </m.section>
  );
}
