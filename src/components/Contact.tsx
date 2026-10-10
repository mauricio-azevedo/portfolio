import { EnvelopeSimpleIcon } from '@phosphor-icons/react';
import * as m from 'motion/react-m';
import { reveal, rise } from '../lib/motion';
import type { ContactLink, PortfolioLabels } from '../types/portfolio';
import { SectionHeading } from './SectionHeading';

type ContactProps = {
  contactLinks: ContactLink[];
  statement: string;
  labels: PortfolioLabels;
};

export function Contact({ contactLinks, statement, labels }: ContactProps) {
  return (
    <m.section id="contact" className="space-y-6 pt-16" aria-labelledby="contact-title" {...reveal}>
      <div className="space-y-3">
        <SectionHeading id="contact-title" title={labels.contactSection} />
        <m.p className="text-base font-medium leading-relaxed text-on-surface" variants={rise}>
          {statement}
        </m.p>
      </div>

      <m.ul
        className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs font-medium"
        variants={rise}
      >
        {contactLinks.map((link) => (
          <li key={link.href}>
            <a
              className={
                link.kind === 'email'
                  ? 'flex items-center gap-1.5 text-accent-brand hover:underline'
                  : 'text-on-surface-variant transition-colors hover:text-on-surface'
              }
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noreferrer' : undefined}
            >
              {link.kind === 'email' ? (
                <EnvelopeSimpleIcon className="size-4" aria-hidden="true" />
              ) : null}
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </m.ul>
    </m.section>
  );
}
