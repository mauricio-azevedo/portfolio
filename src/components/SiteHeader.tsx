import type { NavigationItem } from '../types/portfolio';

type SiteHeaderProps = {
  brandName: string;
  navigationItems: NavigationItem[];
};

export function SiteHeader({ brandName, navigationItems }: SiteHeaderProps) {
  return (
    <header className="mx-auto flex w-[min(1120px,calc(100%_-_48px))] items-center justify-between border-b border-slate-200 py-6 max-[720px]:w-[min(100%_-_32px,1120px)] max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-4">
      <a className="inline-flex items-center gap-3 font-semibold text-slate-950" href="#top" aria-label={`${brandName} home`}>
        <span className="grid size-9 place-items-center rounded-lg border border-slate-300 text-sm font-bold tracking-[-0.06em]">
          MA
        </span>
        <span className="text-[0.98rem] tracking-[-0.02em] max-[720px]:hidden">{brandName}</span>
      </a>

      <nav
        aria-label="Primary navigation"
        className="flex items-center gap-7 whitespace-nowrap text-[0.9rem] font-medium text-slate-500 max-[720px]:w-full max-[720px]:flex-wrap max-[720px]:items-start max-[720px]:gap-x-5 max-[720px]:gap-y-3 max-[720px]:text-[0.88rem]"
      >
        {navigationItems.map((item, index) => (
          <a
            key={item.href}
            className="transition-colors hover:text-slate-950 first:text-slate-950"
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
