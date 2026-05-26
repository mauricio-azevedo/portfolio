import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
  type Icon,
} from '@phosphor-icons/react';
import type { ContactIconName, ContactLink } from '../types/portfolio';

type ContactLinksProps = {
  links: ContactLink[];
  variant?: 'default' | 'compact';
};

const contactIcons: Record<ContactIconName, Icon> = {
  email: EnvelopeSimpleIcon,
  github: GithubLogoIcon,
  linkedin: LinkedinLogoIcon,
  whatsapp: WhatsappLogoIcon,
};

const iconColors: Record<ContactIconName, string> = {
  email: 'text-slate-700',
  github: 'text-[#181717]',
  linkedin: 'text-[#0A66C2]',
  whatsapp: 'text-[#25D366]',
};

function ContactIcon({ icon, isCompact }: { icon: ContactIconName; isCompact: boolean }) {
  const Icon = contactIcons[icon];

  return (
    <Icon
      className={isCompact ? 'size-5' : 'size-6'}
      weight="regular"
      aria-hidden="true"
    />
  );
}

export function ContactLinks({ links, variant = 'default' }: ContactLinksProps) {
  const isCompact = variant === 'compact';

  return (
    <div className="flex flex-wrap gap-1">
      {links.map((link) => (
        <a
          key={link.href}
          className={`grid place-items-center rounded-xl transition-colors hover:bg-slate-100 ${
            isCompact ? 'size-9' : 'size-11'
          } ${iconColors[link.icon]}`}
          href={link.href}
          target={link.isExternal ? '_blank' : undefined}
          rel={link.isExternal ? 'noreferrer' : undefined}
          aria-label={link.label}
          title={link.label}
        >
          <ContactIcon icon={link.icon} isCompact={isCompact} />
        </a>
      ))}
    </div>
  );
}
