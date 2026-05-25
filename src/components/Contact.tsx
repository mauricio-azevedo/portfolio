import type { ContactLink, Language, PortfolioLabels } from '../types/portfolio';
import { ContactLinks } from './ContactLinks';
import { ResumeDownloadLink } from './ResumeDownloadLink';

type ContactProps = {
  contactLinks: ContactLink[];
  labels: PortfolioLabels;
  language: Language;
};

export function Contact({ contactLinks, labels, language }: ContactProps) {
  return (
    <section
      id="contact"
      className="flex items-center justify-between gap-8 py-12 max-[980px]:flex-col max-[980px]:items-start"
      aria-label={labels.contactAria}
    >
      <div>
        <h2 className="m-0 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          {labels.contactTitle}
        </h2>
        <p className="m-0 mt-2 text-sm text-slate-500">
          {labels.contactSubtitle}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 max-[720px]:w-full">
        <ContactLinks links={contactLinks} />

        <span className="h-6 w-px bg-slate-200" aria-hidden="true" />

        <ResumeDownloadLink label={labels.resume} ariaLabel={labels.resumeAria} language={language} />
      </div>
    </section>
  );
}
