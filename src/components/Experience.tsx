import type { ExperienceItem, PortfolioLabels } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';

type ExperienceProps = {
  items: ExperienceItem[];
  period: string;
  labels: PortfolioLabels;
};

export function Experience({ items, period, labels }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="space-y-8 border-t border-outline-variant/60 pt-16"
      aria-labelledby="experience-title"
    >
      <SectionHeading id="experience-title" title={labels.experienceSection} meta={period} />

      <div className="divide-y divide-outline-variant/40">
        {items.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="space-y-2 py-6 first:pt-0 last:pb-0"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-sm font-semibold text-on-surface">
                {item.role}{' '}
                <span className="font-normal whitespace-nowrap text-on-surface-variant">
                  at {item.company}
                </span>
              </h3>
              <span className="shrink-0 font-mono text-xs text-outline">
                {item.period}
                {item.employer ? ` · ${item.employer}` : null}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-on-surface-variant">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
