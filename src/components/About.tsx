import { profile } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

export function About() {
  return (
    <section id="about" className="border-b border-slate-200 py-12" aria-labelledby="about-title">
      <SectionLabel>About</SectionLabel>
      <h2 id="about-title" className="sr-only">
        About Maurício
      </h2>
      <p className="mt-4 max-w-[820px] text-lg leading-8 tracking-[-0.02em] text-slate-700 max-[720px]:text-base">
        {profile.about}
      </p>
    </section>
  );
}
