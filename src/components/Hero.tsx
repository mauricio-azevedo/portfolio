import { profile } from '../data/portfolio';
import { getPublicAssetUrl } from '../lib/assets';

export function Hero() {
  return (
    <section
      className="relative mt-6 overflow-hidden rounded-[36px] border border-white/70 bg-white/70 px-16 pb-14 pt-16 shadow-[0_28px_90px_rgba(15,23,42,0.09)] backdrop-blur-xl max-[980px]:px-7 max-[980px]:pb-9 max-[980px]:pt-9"
      aria-labelledby="hero-title"
    >
      <div className="absolute -right-24 -top-28 size-72 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-28 left-1/4 size-72 rounded-full bg-slate-900/5 blur-3xl" aria-hidden="true" />

      <div className="relative grid grid-cols-[minmax(0,1fr)_300px] items-center gap-16 max-[980px]:grid-cols-1 max-[980px]:gap-9">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-blue-600/10 bg-blue-600/5 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-blue-700">
            {profile.role}
          </p>
          <h1
            id="hero-title"
            className="m-0 max-w-[760px] text-[clamp(3.4rem,8vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.08em] text-slate-950 max-[720px]:text-[3.3rem]"
          >
            {profile.name}
          </h1>
          <p className="mt-7 max-w-[620px] text-[1.18rem] leading-8 text-slate-700">{profile.heroSummary}</p>
          <p className="mt-2 max-w-[620px] text-base leading-7 text-slate-500">{profile.heroNote}</p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 text-[0.94rem] text-slate-500 max-[720px]:flex-col max-[720px]:items-start"
            aria-label="Location and contact"
          >
            <span className="rounded-full border border-slate-200 bg-white/70 px-4 py-2">{profile.location}</span>
            <a
              className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center max-[980px]:order-first max-[980px]:justify-start">
          <div className="absolute inset-6 rounded-[34px] bg-blue-600/10 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-[34px] border border-white/80 bg-gradient-to-b from-white to-slate-50 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.13)]">
            <img
              className="h-auto w-[230px] rounded-[26px]"
              src={getPublicAssetUrl(profile.profileImage.src)}
              alt={profile.profileImage.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
