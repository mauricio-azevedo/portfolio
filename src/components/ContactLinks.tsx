import * as m from 'motion/react-m';
import { rise } from '../lib/motion';
import type { ContactLink } from '../types/portfolio';
import { MagneticLink } from './MagneticLink';

type ContactLinksProps = {
  links: ContactLink[];
  /** Spacing and type scale, which differ between the hero row and the contact section. */
  className?: string;
};

export function ContactLinks({ links, className }: ContactLinksProps) {
  return (
    <m.ul className={className} variants={rise}>
      {links.map((link) => (
        <li key={link.href}>
          <MagneticLink
            href={link.href}
            isExternal={link.isExternal}
            className={
              'inline-block text-on-surface-variant transition-colors hover:text-on-surface'
            }
          >
            {link.label}
          </MagneticLink>
        </li>
      ))}
    </m.ul>
  );
}
