import type { NavigationItem } from '../types/portfolio';

type SiteHeaderProps = {
  brandName: string;
  navigationItems: NavigationItem[];
};

export function SiteHeader({ brandName, navigationItems }: SiteHeaderProps) {
  return (
    <header className="sticky top-4 z-20 mx-auto mt-4 flex w-[min(1180px,calc(100%_-_48px))] items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl max-[720px]:static max-[720px]:w-[min(100%_-_32px,1180px)] max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-4 max-[720px]:rounded-3xl">
      <a className="inline-flex items-center gap-3.5 font-bold" href="#top" aria-label={`${brandName} home`}>
        <span className="grid size-10 place-items-center rounded-full bg-slate-950 text-sm font-extrabold tracking-[-0.06em] text-white shadow-[0_12px_30px_rgba(15,23,42,0.22)]">
          MA
        </span>
        <span className="text-[0.98rem] tracking-[-0.03em] text-slate-950 max-[720px]:hidden">{brandName}</span>
      </a>

      <nav
        aria-label="Primary navigation"
        className="flex items-center gap-1 overflow-x-auto whitespace-nowrap rounded-full bg-slate-950/[0.03] p-1 text-[0.86rem] font-semibold text-slate-600 max-[720px]:w-full max-[720px]:rounded-2xl max-[720px]:pb-1"
      >
        {navigationItems.map((item, index) => (
          <a
            key={item.href}
            className="rounded-full px-3.5 py-2 transition-colors hover:bg-white hover:text-slate-950 first:bg-white first:text-slate-950 first:shadow-sm"
            href={item.href}
            aria-current={index === 0 ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
