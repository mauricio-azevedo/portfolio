type SectionLabelProps = {
  children: string;
};

const sectionIcons: Record<string, string> = {
  About: '01',
  Stacks: '02',
  Experience: '03',
  'Featured Project': '04',
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
      <span
        className="grid size-6 place-items-center rounded-full border border-slate-300 bg-white text-[0.62rem] font-bold tracking-normal text-slate-500"
        aria-hidden="true"
      >
        {sectionIcons[children] ?? '•'}
      </span>
      <span>{children}</span>
    </p>
  );
}
