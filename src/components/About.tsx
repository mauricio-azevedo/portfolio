import { profile } from '../data/portfolio';
import { SectionContent } from './SectionContent';
import { SectionLabel } from './SectionLabel';

const aboutFacts = [
  {
    label: 'Experience',
    value: '7+ years',
    icon: 'M8.5 7.25V5.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v1.75M4.75 8h14.5v10.25H4.75V8Zm0 4.5h14.5',
  },
  {
    label: 'Location',
    value: 'Brasília, Brazil',
    icon: 'M12 21s6-5.28 6-10a6 6 0 1 0-12 0c0 4.72 6 10 6 10Zm0-7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  },
  {
    label: 'Remote',
    value: 'Worldwide',
    icon: 'M12 6.75v5.5l3.25 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-slate-200 py-12" aria-labelledby="about-title">
      <SectionLabel>About</SectionLabel>
      <h2 id="about-title" className="sr-only">
        About Maurício
      </h2>

      <SectionContent className="mt-4 grid grid-cols-[minmax(0,1fr)_minmax(420px,0.74fr)] items-start gap-12 max-[980px]:grid-cols-1">
        <p className="max-w-[720px] text-lg leading-8 tracking-[-0.02em] text-slate-700 max-[720px]:text-base">
          {profile.about}
        </p>

        <dl className="grid grid-cols-3">
          {aboutFacts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col items-center px-5 py-0 text-center max-[720px]:px-2 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-slate-200"
            >
              <dt className="flex flex-col items-center gap-1 text-sm text-slate-500 max-[720px]:text-xs">
                <span className="grid size-9 place-items-center rounded-xl text-slate-700 max-[720px]:size-8" aria-hidden="true">
                  <svg
                    className="size-5.5 max-[720px]:size-5"
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
              <dd className="mt-1 text-base tracking-[-0.02em] text-slate-950 max-[720px]:text-sm">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </SectionContent>
    </section>
  );
}
