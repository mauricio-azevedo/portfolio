import type { ReactNode } from 'react';

const sectionContentPadding = 'pl-9 max-[720px]:pl-0';

type SectionContentProps = {
  children: ReactNode;
  className?: string;
};

export function SectionContent({ children, className = '' }: SectionContentProps) {
  return <div className={`${sectionContentPadding} ${className}`.trim()}>{children}</div>;
}
