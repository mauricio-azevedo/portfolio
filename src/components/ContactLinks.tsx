import type { ContactIconName, ContactLink } from '../types/portfolio';

type ContactLinksProps = {
  links: ContactLink[];
  variant?: 'default' | 'compact';
};

const emailIconPath = 'M4.5 6.75h15v10.5h-15V6.75Zm1.5 1.5 6 4.5 6-4.5';

const brandIconUrls: Partial<Record<ContactIconName, string>> = {
  github: 'https://cdn.simpleicons.org/github/111827',
  linkedin: 'https://cdn.simpleicons.org/linkedin/0A66C2',
};

export function ContactLinks({ links, variant = 'default' }: ContactLinksProps) {
  const isCompact = variant === 'compact';

  return (
    <div className={`flex flex-wrap ${isCompact ? 'gap-x-5 gap-y-2' : 'gap-3'}`}>
      {links.map((link) => {
        const brandIconUrl = brandIconUrls[link.icon];

        return (
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
              {brandIconUrl ? (
                <img
                  className={isCompact ? 'size-4' : 'size-[18px]'}
                  src={brandIconUrl}
                  alt=""
                  width={isCompact ? '16' : '18'}
                  height={isCompact ? '16' : '18'}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <svg
                  className={isCompact ? 'size-4' : 'size-[18px]'}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={emailIconPath} />
                </svg>
              )}
            </span>
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}
