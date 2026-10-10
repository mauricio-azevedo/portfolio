import * as m from 'motion/react-m';
import { revealViewport, rise, stage } from '../lib/motion';
import type { PortfolioLabels, SkillGroup } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';

type SkillsProps = {
  skills: SkillGroup[];
  labels: PortfolioLabels;
};

export function Skills({ skills, labels }: SkillsProps) {
  return (
    <m.section
      id="skills"
      className="space-y-8 border-t border-outline-variant/60 pt-16"
      aria-labelledby="skills-title"
      variants={stage}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <SectionHeading id="skills-title" title={labels.skillsSection} />

      <dl className="divide-y divide-outline-variant/40">
        {skills.map((group) => (
          <m.div
            key={group.category}
            className="grid grid-cols-[6.5rem_1fr] gap-4 py-3 first:pt-0 last:pb-0 sm:grid-cols-[8rem_1fr]"
            variants={rise}
          >
            <dt className="pt-0.5 font-mono text-xs uppercase tracking-wider text-outline">
              {group.category}
            </dt>
            <dd className="text-sm leading-relaxed text-on-surface-variant">
              {group.items.join(', ')}
            </dd>
          </m.div>
        ))}
      </dl>
    </m.section>
  );
}
