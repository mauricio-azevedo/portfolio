import { profile } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

export function About() {
  return (
    <section
      id="about"
      className="mt-5 rounded-[28px] border border-white/70 bg-white/55 px-10 py-9 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl max-[980px]:px-6 max-[980px]:py-7"
      aria-labelledby="about-title"
    >
      <SectionLabel>About</SectionLabel>
      <h2 id="about-title" className="sr-only">
        About Maurício
      </h2>
      <p className="mt-4 max-w-[860px] text-lg leading-8 tracking-[-0.02em] text-slate-700 max-[720px]:text-base">
        {profile.about}
      </p>
    </section>
  );
}
