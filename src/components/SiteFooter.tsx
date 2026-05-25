import type { PortfolioLabels } from '../types/portfolio';

type SiteFooterProps = {
  labels: PortfolioLabels;
  name: string;
};

export function SiteFooter({ labels, name }: SiteFooterProps) {
  return (
    <footer className="mx-auto w-[min(1120px,calc(100%_-_48px))] border-t border-slate-200 pb-8 pt-6 text-center text-sm text-slate-500 max-[980px]:w-[min(100%_-_32px,1120px)]">
      <span>© {new Date().getFullYear()} {name}. {labels.footerRights}</span>
    </footer>
  );
}
