import type { ContactIconName, ContactLink } from '../types/portfolio';

type ContactLinksProps = {
  links: ContactLink[];
  variant?: 'default' | 'compact';
};

const emailIconPath = 'M4.5 6.75h15v10.5h-15V6.75Zm1.5 1.5 6 4.5 6-4.5';

const brandIconPaths: Partial<Record<ContactIconName, string>> = {
  github:
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  linkedin:
    'M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.53V8.98H7.1v11.47ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z',
};

const iconColors: Record<ContactIconName, string> = {
  email: 'text-slate-700',
  github: 'text-[#181717]',
  linkedin: 'text-[#0A66C2]',
};

function ContactIcon({ icon, isCompact }: { icon: ContactIconName; isCompact: boolean }) {
  const brandIconPath = brandIconPaths[icon];

  if (brandIconPath) {
    return (
      <svg className={isCompact ? 'size-5' : 'size-6'} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={brandIconPath} />
      </svg>
    );
  }

  return (
    <svg
      className={isCompact ? 'size-[22px]' : 'size-7'}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={emailIconPath} />
    </svg>
  );
}

export function ContactLinks({ links, variant = 'default' }: ContactLinksProps) {
  const isCompact = variant === 'compact';

  return (
    <div className={`flex flex-wrap ${isCompact ? 'gap-3' : 'gap-3.5 max-[720px]:justify-center'}`}>
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
