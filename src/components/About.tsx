import { profile } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

export function About() {
  return (
    <section id="about" className="border-t border-slate-200 px-16 py-[30px] max-[980px]:px-0 max-[980px]:py-7" aria-labelledby="about-title">
      <SectionLabel>About</SectionLabel>
      <h2 id="about-title" className="sr-only">
        About Maurício
      </h2>
      <p className="mt-4 max-w-[760px] text-[#354056]">{profile.about}</p>
    </section>
  );
}
