import type { ContactIconName, ContactLink } from '../types/portfolio';

type ContactLinksProps = {
  links: ContactLink[];
  variant?: 'default' | 'compact';
};

const iconPaths: Record<ContactIconName, string> = {
  email:
    'M3.75 5.75h16.5v12.5H3.75V5.75Zm1.75 1.75 6.5 5 6.5-5M5.5 16.5l4.75-4M13.75 12.5l4.75 4',
  github:
    'M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.08.63-.2.63-.44v-1.63c-2.56.56-3.1-1.1-3.1-1.1-.42-1.07-1.03-1.35-1.03-1.35-.84-.58.06-.57.06-.57.93.07 1.42.96 1.42.96.83 1.41 2.17 1 2.7.77.08-.6.32-1 .58-1.23-2.04-.23-4.18-1.02-4.18-4.54 0-1 .36-1.82.95-2.46-.1-.23-.41-1.17.09-2.43 0 0 .78-.25 2.55.94A8.8 8.8 0 0 1 12 7.36c.79 0 1.58.1 2.32.31 1.77-1.19 2.55-.94 2.55-.94.5 1.26.19 2.2.09 2.43.59.64.95 1.46.95 2.46 0 3.53-2.15 4.3-4.2 4.53.33.29.63.85.63 1.72v2.47c0 .24.17.52.64.43A9.25 9.25 0 0 0 12 2.75Z',
  linkedin:
    'M6.5 9.5v8.75M6.5 6.25v.01M10.25 18.25V9.5M10.25 13.25c0-2.25 1.28-3.75 3.33-3.75 1.9 0 2.92 1.25 2.92 3.48v5.27',
};

export function ContactLinks({ links, variant = 'default' }: ContactLinksProps) {
  const isCompact = variant === 'compact';

  return (
    <div className={`flex flex-wrap ${isCompact ? 'gap-3' : 'gap-4'}`}>
      {links.map((link) => (
        <a
          key={link.href}
          className={`inline-flex items-center gap-2 text-slate-700 transition-colors hover:text-slate-950 ${
            isCompact ? 'text-sm' : 'text-sm font-semibold'
          }`}
          href={link.href}
          target={link.isExternal ? '_blank' : undefined}
          rel={link.isExternal ? 'noreferrer' : undefined}
        >
          <svg
            className="size-4 flex-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={iconPaths[link.icon]} />
          </svg>
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
