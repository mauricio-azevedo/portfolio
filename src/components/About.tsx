import { profile } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

const aboutFacts = [
  {
    label: 'Experience',
    value: '6+ years',
  },
  {
    label: 'Location',
    value: 'Brasília, Brazil',
  },
  {
    label: 'Remote',
    value: 'UTC−3',
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-slate-200 py-12" aria-labelledby="about-title">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(300px,0.62fr)] items-start gap-12 max-[980px]:grid-cols-1">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 id="about-title" className="sr-only">
            About Maurício
          </h2>
          <p className="mt-4 max-w-[720px] text-lg leading-8 tracking-[-0.02em] text-slate-700 max-[720px]:text-base">
            {profile.about}
          </p>
        </div>

        <dl className="grid gap-5 border-l border-slate-200 pl-8 max-[980px]:grid-cols-3 max-[980px]:border-l-0 max-[980px]:border-t max-[980px]:pl-0 max-[980px]:pt-6 max-[720px]:grid-cols-1">
          {aboutFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {fact.label}
              </dt>
              <dd className="mt-1 text-base font-semibold tracking-[-0.02em] text-slate-950">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
