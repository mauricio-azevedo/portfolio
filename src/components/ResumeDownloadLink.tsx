const resumeUrl = new URL('../../assets/MauricioAzevedo_Resume.pdf', import.meta.url).href;

type ResumeDownloadLinkProps = {
  className?: string;
};

export function ResumeDownloadLink({ className = '' }: ResumeDownloadLinkProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 ${className}`.trim()}
      href={resumeUrl}
      download="MauricioAzevedo_Resume.pdf"
      aria-label="Download resume"
    >
      <svg
        className="size-4.5"
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
      <span>Download resume</span>
    </a>
  );
}
