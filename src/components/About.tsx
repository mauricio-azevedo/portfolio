import { profile } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

const aboutFacts = [
  {
    label: 'of experience',
    value: '6+ years',
    icon: 'M8.5 7.25V5.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v1.75M4.75 8h14.5v10.25H4.75V8Zm0 4.5h14.5',
  },
  {
    label: 'based in Brazil',
    value: 'Brasília',
    icon: 'M12 21s6-5.28 6-10a6 6 0 1 0-12 0c0 4.72 6 10 6 10Zm0-7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  },
  {
    label: 'remote availability',
    value: 'UTC−3',
    icon: 'M12 6.75v5.5l3.25 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-slate-200 py-12" aria-labelledby="about-title">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] gap-12 max-[980px]:grid-cols-1">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 id="about-title" className="sr-only">
            About Maurício
          </h2>
          <p className="mt-4 max-w-[720px] text-lg leading-8 tracking-[-0.02em] text-slate-700 max-[720px]:text-base">
            {profile.about}
          </p>
        </div>

        <dl className="grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white max-[720px]:grid-cols-1 max-[720px]:divide-x-0 max-[720px]:divide-y">
          {aboutFacts.map((fact) => (
            <div key={fact.value} className="grid place-items-center px-5 py-7 text-center">
              <dt className="flex flex-col items-center gap-3 text-sm text-slate-500">
                <span className="grid size-9 place-items-center rounded-xl border border-slate-200 text-slate-700" aria-hidden="true">
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={fact.icon} />
                  </svg>
                </span>
                <span>{fact.label}</span>
              </dt>
              <dd className="order-first mb-1 text-base font-semibold tracking-[-0.02em] text-slate-950">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
