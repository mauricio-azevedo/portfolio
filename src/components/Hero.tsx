import { profile } from '../data/portfolio';
import { getPublicAssetUrl } from '../lib/assets';

export function Hero() {
  return (
    <section
      className="grid grid-cols-[minmax(0,1fr)_260px] items-center gap-16 border-b border-slate-200 py-20 max-[980px]:grid-cols-1 max-[980px]:gap-10 max-[980px]:py-12"
      aria-labelledby="hero-title"
    >
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          {profile.role}
        </p>
        <h1
          id="hero-title"
          className="m-0 max-w-[740px] text-[clamp(3.25rem,7vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.08em] text-slate-950 max-[720px]:text-[3.1rem]"
        >
          {profile.name}
        </h1>
        <p className="mt-7 max-w-[620px] text-xl leading-8 tracking-[-0.02em] text-slate-700 max-[720px]:text-lg">
          {profile.heroSummary}
        </p>
        <p className="mt-3 max-w-[620px] text-base leading-7 text-slate-500">{profile.heroNote}</p>

        <div
          className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 max-[720px]:flex-col max-[720px]:items-start"
          aria-label="Location and contact"
        >
          <span>{profile.location}</span>
          <span className="h-4 w-px bg-slate-300 max-[720px]:hidden" aria-hidden="true" />
          <a className="text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-950" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>

      <div className="flex justify-end max-[980px]:order-first max-[980px]:justify-start">
        <img
          className="h-auto w-[220px] rounded-3xl border border-slate-200 bg-white p-2"
          src={getPublicAssetUrl(profile.profileImage.src)}
          alt={profile.profileImage.alt}
        />
      </div>
    </section>
  );
}
