import { contactLinks } from '../data/portfolio';
import { ContactLinks } from './ContactLinks';
import { ResumeDownloadLink } from './ResumeDownloadLink';

export function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-between gap-8 py-12 max-[980px]:flex-col max-[980px]:items-start"
      aria-label="Contact"
    >
      <div>
        <h2 className="m-0 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          Let’s build something useful together.
        </h2>
        <p className="m-0 mt-2 text-sm text-slate-500">
          I’m open to new opportunities and interesting projects.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 max-[720px]:w-full">
        <ContactLinks links={contactLinks} />

        <span className="h-6 w-px bg-slate-200" aria-hidden="true" />

        <ResumeDownloadLink />
      </div>
    </section>
  );
}
