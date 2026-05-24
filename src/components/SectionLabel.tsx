type SectionLabelProps = {
  children: string;
};

const sectionIcons: Record<string, string> = {
  About:
    'M12 12a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm6.25 7.5a6.25 6.25 0 0 0-12.5 0',
  Stacks:
    'M7 8.5 3.5 12 7 15.5M17 8.5l3.5 3.5-3.5 3.5M14 6.5l-4 11',
  Experience:
    'M8.5 7.25V5.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v1.75M4.75 8h14.5v10.25H4.75V8Zm0 4.5h14.5',
  'Featured Project':
    'M12 4.75 14.25 9l4.75.7-3.44 3.35.81 4.72L12 15.55 7.63 17.77l.81-4.72L5 9.7 9.75 9 12 4.75Z',
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
      <span
        className="grid size-7 place-items-center rounded-full border border-slate-300 bg-white text-slate-500"
        aria-hidden="true"
      >
        <svg
          className="size-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={sectionIcons[children] ?? 'M12 5v14M5 12h14'} />
        </svg>
      </span>
      <span>{children}</span>
    </p>
  );
}
