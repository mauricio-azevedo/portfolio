import type { ContactIconName, ContactLink } from '../types/portfolio';

type ContactLinksProps = {
  links: ContactLink[];
  variant?: 'default' | 'compact';
};

const emailIconPath = 'M4.5 6.75h15v10.5h-15V6.75Zm1.5 1.5 6 4.5 6-4.5';

const brandIconPaths: Partial<Record<ContactIconName, string>> = {
  github:
    'M12 .5A11.5 11.5 0 0 0 .5 12.28c0 5.2 3.34 9.6 7.98 11.16.58.11.79-.26.79-.57 0-.28-.01-1.03-.02-2.02-3.25.72-3.93-1.6-3.93-1.6-.53-1.38-1.3-1.75-1.3-1.75-1.06-.74.08-.73.08-.73 1.17.09 1.79 1.23 1.79 1.23 1.04 1.83 2.74 1.3 3.4.99.11-.78.41-1.3.74-1.6-2.6-.3-5.32-1.33-5.32-5.91 0-1.31.46-2.38 1.2-3.22-.12-.3-.52-1.52.12-3.17 0 0 .98-.32 3.21 1.23a10.9 10.9 0 0 1 5.84 0c2.23-1.55 3.21-1.23 3.21-1.23.64 1.65.24 2.87.12 3.17.75.84 1.2 1.91 1.2 3.22 0 4.6-2.73 5.6-5.33 5.9.42.38.79 1.1.79 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.69.8.57A11.53 11.53 0 0 0 23.5 12.28 11.5 11.5 0 0 0 12 .5Z',
  linkedin:
    'M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.53V8.98H7.1v11.47ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z',
};

function ContactIcon({ icon, isCompact }: { icon: ContactIconName; isCompact: boolean }) {
  const brandIconPath = brandIconPaths[icon];
  const sizeClass = isCompact ? 'size-4' : 'size-[18px]';

  if (brandIconPath) {
    return (
      <svg className={sizeClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={brandIconPath} />
      </svg>
    );
  }

  return (
    <svg
      className={sizeClass}
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
    <div className={`flex flex-wrap ${isCompact ? 'gap-x-5 gap-y-2' : 'gap-3'}`}>
      {links.map((link) => (
        <a
          key={link.href}
          className={
            isCompact
              ? 'inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-950'
              : 'group inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-colors hover:border-slate-300 hover:text-slate-950'
          }
          href={link.href}
          target={link.isExternal ? '_blank' : undefined}
          rel={link.isExternal ? 'noreferrer' : undefined}
        >
          <span
            className={
              isCompact
                ? 'grid size-4 place-items-center text-slate-400'
                : 'grid size-8 place-items-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover:bg-slate-950 group-hover:text-white'
            }
            aria-hidden="true"
          >
            <ContactIcon icon={link.icon} isCompact={isCompact} />
          </span>
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
