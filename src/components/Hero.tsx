import { ArrowUpRightIcon } from '@phosphor-icons/react';
import type { ContactLink, Profile } from '../types/portfolio';

type HeroProps = {
  contactLinks: ContactLink[];
  profile: Profile;
};

export function Hero({ contactLinks, profile }: HeroProps) {
  return (
    <section
      className="flex flex-col-reverse items-start justify-between gap-8 pt-4 sm:flex-row sm:items-center md:gap-12"
      aria-labelledby="hero-title"
    >
      <div className="max-w-xl space-y-6">
        <p className="inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-600" aria-hidden="true" />
          <span>
            {profile.status} • {profile.location}
          </span>
        </p>

        <div className="space-y-3">
          <h1
            id="hero-title"
            className="text-3xl font-semibold tracking-tight text-on-surface md:text-4xl"
          >
            {profile.greeting}
          </h1>
          <p className="text-base leading-relaxed text-on-surface-variant md:text-lg">
            {profile.summary}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-outline">{profile.note}</p>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs font-medium">
          {contactLinks.map((link, index) => (
            <li key={link.href} className="contents">
              {index > 0 ? (
                <span className="text-outline-variant" aria-hidden="true">
                  /
                </span>
              ) : null}
              <a
                className={
                  link.kind === 'email'
                    ? 'inline-flex items-center gap-1.5 text-on-surface transition-colors hover:text-primary'
                    : 'text-on-surface-variant transition-colors hover:text-on-surface'
                }
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noreferrer' : undefined}
              >
                <span>{link.label}</span>
                {link.kind === 'email' ? (
                  <ArrowUpRightIcon className="size-[15px]" aria-hidden="true" />
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <img
        className="size-20 shrink-0 rounded-full object-cover ring-1 ring-outline-variant/60 sm:size-28"
        src={profile.profileImage.src}
        alt={profile.profileImage.alt}
        width="112"
        height="112"
      />
    </section>
  );
}
