import { ArrowUpRightIcon, GithubLogoIcon, GlobeIcon } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
import { LiquidButton } from '@/components/animate-ui/components/buttons/liquid';
import * as m from 'motion/react-m';
import { reveal, rise } from '../lib/motion';
import type { PortfolioLabels, ProjectItem } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';

type ProjectsProps = {
  items: ProjectItem[];
  labels: PortfolioLabels;
};

type ProjectLinkProps = {
  href: string;
  label: string;
  projectName: string;
  icon: Icon;
};

function ProjectLink({ href, label, projectName, icon: LinkIcon }: ProjectLinkProps) {
  return (
    // The button carries no background until it is hovered, when the fill sweeps the page's
    // own background across it. Against the bare column that is invisible by design; what it
    // covers is the pointer follower passing behind, so the fill reads as a wipe.
    <LiquidButton
      size="sm"
      className="[--liquid-button-background-color:transparent] [--liquid-button-color:var(--color-background)] text-on-surface shadow-none hover:text-on-surface focus-visible:ring-accent-brand"
      asChild
    >
      <a href={href} target="_blank" rel="noreferrer" aria-label={`${label}: ${projectName}`}>
        <LinkIcon aria-hidden="true" />
        <span>{label}</span>
        <ArrowUpRightIcon className="size-3" aria-hidden="true" />
      </a>
    </LiquidButton>
  );
}

export function Projects({ items, labels }: ProjectsProps) {
  return (
    <m.section
      id="projects"
      className="space-y-8 pt-16"
      aria-labelledby="projects-title"
      {...reveal}
    >
      <SectionHeading id="projects-title" title={labels.projectsSection} />

      <div>
        {items.map((item) => (
          <m.article key={item.name} className="py-7 first:pt-0 last:pb-0" variants={rise}>
            <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-base font-semibold text-on-surface">{item.name}</h3>
              <span className="shrink-0 font-mono text-xs text-outline">{item.meta}</span>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-on-surface-variant">
              {item.description}
            </p>
            {item.href || item.repositoryUrl ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.href ? (
                  <ProjectLink
                    href={item.href}
                    label={labels.websiteLink}
                    projectName={item.name}
                    icon={GlobeIcon}
                  />
                ) : null}
                {item.repositoryUrl ? (
                  <ProjectLink
                    href={item.repositoryUrl}
                    label={labels.codeLink}
                    projectName={item.name}
                    icon={GithubLogoIcon}
                  />
                ) : null}
              </div>
            ) : null}
          </m.article>
        ))}
      </div>
    </m.section>
  );
}
