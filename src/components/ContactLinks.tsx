import type { ContactIconName, ContactLink } from '../types/portfolio';

type ContactLinksProps = {
  links: ContactLink[];
  variant?: 'default' | 'compact';
};

const iconPaths: Record<ContactIconName, string> = {
  email:
    'M4.5 6.75h15v10.5h-15V6.75Zm1.5 1.5 6 4.5 6-4.5',
  github:
    'M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.08.63-.2.63-.44v-1.63c-2.56.56-3.1-1.1-3.1-1.1-.42-1.07-1.03-1.35-1.03-1.35-.84-.58.06-.57.06-.57.93.07 1.42.96 1.42.96.83 1.41 2.17 1 2.7.77.08-.6.32-1 .58-1.23-2.04-.23-4.18-1.02-4.18-4.54 0-1 .36-1.82.95-2.46-.1-.23-.41-1.17.09-2.43 0 0 .78-.25 2.55.94A8.8 8.8 0 0 1 12 7.36c.79 0 1.58.1 2.32.31 1.77-1.19 2.55-.94 2.55-.94.5 1.26.19 2.2.09 2.43.59.64.95 1.46.95 2.46 0 3.53-2.15 4.3-4.2 4.53.33.29.63.85.63 1.72v2.47c0 .24.17.52.64.43A9.25 9.25 0 0 0 12 2.75Z',
  linkedin:
    'M6.75 9.75v8M6.75 6.25v.01M10.5 17.75v-8M10.5 13.25c0-2.17 1.3-3.5 3.22-3.5 1.85 0 2.78 1.2 2.78 3.33v4.67',
};

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
            <svg
              className={isCompact ? 'size-4' : 'size-[18px]'}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={iconPaths[link.icon]} />
            </svg>
          </span>
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
