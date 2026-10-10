import { ArrowUpRightIcon } from '@phosphor-icons/react';
import * as m from 'motion/react-m';
import { rise, spring, stage } from '../lib/motion';
import type { ContactLink, Profile } from '../types/portfolio';

type HeroProps = {
  contactLinks: ContactLink[];
  profile: Profile;
};

const heroStage = stage(0.1);

export function Hero({ contactLinks, profile }: HeroProps) {
  return (
    <m.section
      className="flex flex-col-reverse items-start justify-between gap-8 pt-4 sm:flex-row sm:items-center md:gap-12"
      aria-labelledby="hero-title"
      variants={heroStage}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-xl space-y-6">
        <m.p
          className="inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant"
          variants={rise}
        >
          <span
            className="size-1.5 rounded-full bg-emerald-600 motion-safe:animate-pulse"
            aria-hidden="true"
          />
          <span>
            {profile.status} • {profile.location}
          </span>
        </m.p>

        <div className="space-y-3">
          <m.h1
            id="hero-title"
            className="text-3xl font-semibold tracking-tight text-on-surface md:text-4xl"
            variants={rise}
          >
            {profile.greeting}
          </m.h1>
          <m.p
            className="text-base leading-relaxed text-on-surface-variant md:text-lg"
            variants={rise}
          >
            {profile.summary}
          </m.p>
        </div>

        <m.p className="text-sm leading-relaxed text-outline" variants={rise}>
          {profile.note}
        </m.p>

        <m.ul
          className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs font-medium"
          variants={rise}
        >
          {contactLinks.map((link) => (
            <li key={link.href}>
              <a
                className={
                  link.kind === 'email'
                    ? 'inline-flex items-center gap-1.5 text-on-surface transition-colors hover:text-accent-brand'
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
        </m.ul>
      </div>

      {/* Plain targets instead of variant labels keep the portrait out of the stagger queue,
          so it appears with the status line whether it sits above or beside the text. */}
      <m.img
        className="size-20 shrink-0 rounded-full object-cover ring-1 ring-outline-variant/60 sm:size-28"
        src={profile.profileImage.src}
        alt={profile.profileImage.alt}
        width="112"
        height="112"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={spring}
      />
    </m.section>
  );
}
