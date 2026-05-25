const resumeUrl = new URL('../../assets/MauricioAzevedo_Resume.pdf', import.meta.url).href;

type ResumeDownloadLinkProps = {
  className?: string;
};

export function ResumeDownloadLink({ className = '' }: ResumeDownloadLinkProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-100 ${className}`.trim()}
      href={resumeUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Open resume in a new tab"
    >
      <span>Resume</span>
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
