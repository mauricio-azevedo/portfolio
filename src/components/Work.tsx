import { ArrowUpRightIcon } from '@phosphor-icons/react';
import * as m from 'motion/react-m';
import { revealViewport, rise, stage } from '../lib/motion';
import type { PortfolioLabels, WorkItem } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';

type WorkProps = {
  items: WorkItem[];
  period: string;
  labels: PortfolioLabels;
};

function WorkTitle({ item }: { item: WorkItem }) {
  const className =
    'inline-flex items-center gap-1.5 text-base font-semibold text-on-surface transition-colors';

  if (!item.href) {
    return <h3 className={className}>{item.name}</h3>;
  }

  return (
    <h3 className={className}>
      <a
        className="inline-flex items-center gap-1.5 group-hover:text-primary"
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        <span>{item.name}</span>
        <ArrowUpRightIcon
          className="size-[15px] opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
          aria-hidden="true"
        />
      </a>
    </h3>
  );
}

export function Work({ items, period, labels }: WorkProps) {
  return (
    <m.section
      id="work"
      className="space-y-8 border-t border-outline-variant/60 pt-16"
      aria-labelledby="work-title"
      variants={stage}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <SectionHeading id="work-title" title={labels.workSection} meta={period} />

      <div className="divide-y divide-outline-variant/40">
        {items.map((item) => (
          <m.article key={item.name} className="group py-7 first:pt-0 last:pb-0" variants={rise}>
            <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <WorkTitle item={item} />
              <span className="shrink-0 font-mono text-xs text-outline">{item.meta}</span>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-on-surface-variant">
              {item.description}
            </p>
            {item.repositoryUrl ? (
              <a
                className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-outline transition-colors hover:text-on-surface"
                href={item.repositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>{labels.sourceLink}</span>
                <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </m.article>
        ))}
      </div>
    </m.section>
  );
}
