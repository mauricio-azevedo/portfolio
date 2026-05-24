type SectionLabelProps = {
  children: string;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-serif text-sm font-bold uppercase tracking-[0.13em] text-[#174f9f]">
      {children}
    </p>
  );
}
