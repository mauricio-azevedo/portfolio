type SectionLabelProps = {
  children: string;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700/80">
      {children}
    </p>
  );
}
