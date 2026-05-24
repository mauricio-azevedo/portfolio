import type { NavigationItem } from '../types/portfolio';

type SiteHeaderProps = {
  brandName: string;
  navigationItems: NavigationItem[];
};

export function SiteHeader({ brandName, navigationItems }: SiteHeaderProps) {
  return (
    <header className="mx-auto flex w-[min(1180px,calc(100%_-_48px))] items-center justify-between py-[26px] pb-[18px] max-[720px]:w-[min(100%_-_32px,1180px)] max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-4">
      <a className="inline-flex items-center gap-3.5 font-bold" href="#top" aria-label={`${brandName} home`}>
        <span className="grid size-11 place-items-center rounded-[10px] border border-blue-600/[0.45] font-extrabold tracking-[-0.06em] text-blue-700">
          MA
        </span>
        <span className="text-[1.05rem] max-[720px]:hidden">{brandName}</span>
      </a>

      <nav
        aria-label="Primary navigation"
        className="flex items-center gap-9 overflow-x-auto whitespace-nowrap text-[0.94rem] font-medium text-slate-950 max-[980px]:gap-4 max-[720px]:w-full max-[720px]:pb-1"
      >
        {navigationItems.map((item, index) => (
          <a
            key={item.href}
            className="relative py-2 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-blue-700 after:opacity-0 after:transition-opacity hover:text-blue-700 hover:after:opacity-100 first:text-blue-700 first:after:opacity-100"
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
