type SectionHeadingProps = {
  id: string;
  title: string;
  meta?: string;
};

export function SectionHeading({ id, title, meta }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 id={id} className="font-mono text-xs font-medium uppercase tracking-wider text-outline">
        {title}
      </h2>
      {meta ? <span className="font-mono text-xs text-outline">{meta}</span> : null}
    </div>
  );
}
