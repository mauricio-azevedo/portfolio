import { contactLinks } from '../data/portfolio';
import { ContactLinks } from './ContactLinks';

const resumeUrl = new URL('../../assets/MauricioAzevedo_Resume.pdf', import.meta.url).href;

function ResumeDownloadButton() {
  return (
    <a
      className="grid size-11 place-items-center rounded-xl text-slate-700 transition-colors hover:bg-slate-100"
      href={resumeUrl}
      download="MauricioAzevedo_Resume.pdf"
      aria-label="Download resume"
      title="Download resume"
    >
      <svg
        className="size-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3.75v10.5" />
        <path d="m7.75 10 4.25 4.25L16.25 10" />
        <path d="M5 19.25h14" />
      </svg>
    </a>
  );
}

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
        <p className="m-0 mt-2 text-sm text-slate-500">I’m open to new opportunities and interesting projects.</p>
      </div>

      <div className="flex flex-wrap items-center gap-1 max-[720px]:w-full max-[720px]:justify-center">
        <ContactLinks links={contactLinks} />
        <ResumeDownloadButton />
      </div>
    </section>
  );
}
