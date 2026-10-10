import * as m from 'motion/react-m';
import { reveal, rise } from '../lib/motion';
import type { ContactLink, PortfolioLabels } from '../types/portfolio';
import { ContactLinks } from './ContactLinks';
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

      <ContactLinks
        links={contactLinks}
        className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs font-medium"
      />
    </m.section>
  );
}
