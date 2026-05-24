import { profile } from '../data/portfolio';
import { getPublicAssetUrl } from '../lib/assets';

export function Hero() {
  return (
    <section
      className="grid grid-cols-[1fr_310px] items-center gap-[72px] px-16 pb-9 pt-[54px] max-[980px]:grid-cols-1 max-[980px]:px-0 max-[980px]:pb-7 max-[980px]:pt-9"
      aria-labelledby="hero-title"
    >
      <div>
        <p className="mb-2 text-[0.82rem] font-bold uppercase tracking-[0.12em] text-blue-700">
          {profile.role}
        </p>
        <h1
          id="hero-title"
          className="m-0 text-[clamp(3rem,7vw,4.8rem)] font-extrabold leading-[0.98] tracking-[-0.07em] text-[#101735] max-[720px]:text-[3.2rem]"
        >
          {profile.name}
        </h1>
        <p className="mt-[18px] max-w-[600px] text-[1.08rem] text-[#30384d]">{profile.heroSummary}</p>
        <p className="mt-0.5 max-w-[600px] text-[1.08rem] text-slate-500">{profile.heroNote}</p>

        <div
          className="mt-[34px] flex flex-wrap items-center gap-4 text-[0.95rem] text-slate-500 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-2"
          aria-label="Location and contact"
        >
          <span>{profile.location}</span>
          <span className="h-[22px] w-px bg-slate-200 max-[720px]:hidden" aria-hidden="true" />
          <a className="text-[#30384d] transition-colors hover:text-blue-700" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>

      <div className="flex justify-center max-[980px]:order-first max-[980px]:justify-start">
        <img
          className="h-auto w-[250px]"
          src={getPublicAssetUrl(profile.profileImage.src)}
          alt={profile.profileImage.alt}
        />
      </div>
    </section>
  );
}
