import type { AboutFact, PortfolioLabels, Profile } from '../types/portfolio';
import { SectionContent } from './SectionContent';
import { SectionLabel } from './SectionLabel';

type AboutProps = {
  aboutFacts: AboutFact[];
  labels: PortfolioLabels;
  profile: Profile;
};

export function About({ aboutFacts, labels, profile }: AboutProps) {
  return (
    <section id="about" className="border-b border-slate-200 py-12" aria-labelledby="about-title">
      <SectionLabel icon="about">{labels.aboutSection}</SectionLabel>
      <h2 id="about-title" className="sr-only">
        {labels.aboutTitle}
      </h2>

      <SectionContent className="mt-4 grid grid-cols-[minmax(0,1fr)_minmax(420px,0.74fr)] items-center gap-12 max-[980px]:grid-cols-1 max-[980px]:items-start">
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
