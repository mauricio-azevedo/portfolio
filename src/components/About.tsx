import { profile } from '../data/portfolio';
import { SectionLabel } from './SectionLabel';

const aboutFacts = [
  {
    label: 'Experience',
    detail: 'building production software',
    value: '6+ years',
    icon: 'M8.5 7.25V5.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v1.75M4.75 8h14.5v10.25H4.75V8Zm0 4.5h14.5',
  },
  {
    label: 'Location',
    detail: 'based in Brazil',
    value: 'Brasília',
    icon: 'M12 21s6-5.28 6-10a6 6 0 1 0-12 0c0 4.72 6 10 6 10Zm0-7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  },
  {
    label: 'Remote',
    detail: 'available worldwide',
    value: 'UTC−3',
    icon: 'M12 6.75v5.5l3.25 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-slate-200 py-12" aria-labelledby="about-title">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(340px,0.78fr)] items-start gap-12 max-[980px]:grid-cols-1">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 id="about-title" className="sr-only">
            About Maurício
          </h2>
          <p className="mt-4 max-w-[720px] text-lg leading-8 tracking-[-0.02em] text-slate-700 max-[720px]:text-base">
            {profile.about}
          </p>
        </div>

        <dl className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {aboutFacts.map((fact) => (
            <div
              key={fact.value}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_1px_0_rgba(15,23,42,0.03)] transition-colors hover:border-slate-300"
            >
              <dt className="flex items-center gap-3">
                <span
                  className="grid size-10 flex-none place-items-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200"
                  aria-hidden="true"
                >
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
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {fact.label}
                </span>
              </dt>

              <dd className="mt-4">
                <strong className="block text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {fact.value}
                </strong>
                <span className="mt-1 block text-sm leading-5 text-slate-500">{fact.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
