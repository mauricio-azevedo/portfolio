import type { ReactNode } from 'react';

const sectionContentPadding = 'pl-18 max-[720px]:pl-0';

type SectionContentProps = {
  children: ReactNode;
  className?: string;
  withPadding?: boolean;
};

export function SectionContent({ children, className = '', withPadding = true }: SectionContentProps) {
  const paddingClassName = withPadding ? sectionContentPadding : '';

  return <div className={`${paddingClassName} ${className}`.trim()}>{children}</div>;
}
