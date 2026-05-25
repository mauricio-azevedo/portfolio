import type { Language } from '../types/portfolio';

const resumeUrls: Record<Language, string> = {
  en: new URL('../../assets/MauricioAzevedo_Resume.pdf', import.meta.url).href,
  pt: new URL('../../assets/MauricioAzevedo_Curriculo.pdf', import.meta.url).href,
};

type ResumeDownloadLinkProps = {
  ariaLabel: string;
  className?: string;
  label: string;
  language: Language;
};

export function ResumeDownloadLink({ ariaLabel, className = '', label, language }: ResumeDownloadLinkProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-100 ${className}`.trim()}
      href={resumeUrls[language]}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
    >
      <span>{label}</span>
      <svg
        className="size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </svg>
    </a>
  );
}
