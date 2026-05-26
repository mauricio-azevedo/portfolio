import type { ContactLink, Language, PortfolioLabels, Profile } from '../types/portfolio';
import { getPublicAssetUrl } from '../lib/assets';
import { ContactLinks } from './ContactLinks';
import { ResumeDownloadLink } from './ResumeDownloadLink';

type HeroProps = {
  contactLinks: ContactLink[];
  labels: PortfolioLabels;
  language: Language;
  profile: Profile;
};

export function Hero({ contactLinks, labels, language, profile }: HeroProps) {
  const profileImageUrl = getPublicAssetUrl(profile.profileImage.src);

  return (
    <section
      className="grid grid-cols-[minmax(0,1fr)_300px] items-center gap-16 border-b border-slate-200 py-20 max-[980px]:grid-cols-1 max-[980px]:gap-10 max-[980px]:py-12 max-[720px]:gap-8"
      aria-labelledby="hero-title"
    >
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 max-[720px]:mb-4">
          {profile.role}
        </p>

        <div className="flex items-end justify-between gap-5 max-[720px]:h-[164px] max-[720px]:items-center">
          <h1
            id="hero-title"
            className="m-0 max-w-[740px] text-[clamp(3.25rem,7vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.08em] text-slate-700 max-[720px]:text-[3.05rem]"
          >
            {profile.name}
          </h1>

          <img
            className="hidden h-full w-auto flex-none rounded-2xl object-cover max-[720px]:block"
            src={profileImageUrl}
            alt={profile.profileImage.alt}
          />
        </div>

        <p className="mt-7 max-w-[620px] text-xl leading-8 tracking-[-0.02em] text-slate-700 max-[720px]:text-lg">
          {profile.heroSummary}
        </p>
        <p className="mt-3 max-w-[620px] text-base leading-7 text-slate-500">{profile.heroNote}</p>

        <div className="mt-9 flex flex-wrap items-center gap-2 max-[720px]:w-full">
          <ContactLinks links={contactLinks} />

          <span className="h-6 w-px bg-slate-200" aria-hidden="true" />

          <ResumeDownloadLink label={labels.resume} ariaLabel={labels.resumeAria} language={language} />
        </div>
      </div>

      <div className="flex justify-end max-[980px]:order-first max-[980px]:justify-start max-[720px]:hidden">
        <img
          className="h-auto w-[260px] rounded-3xl"
          src={profileImageUrl}
          alt={profile.profileImage.alt}
        />
      </div>
    </section>
  );
}
