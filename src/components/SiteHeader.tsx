import signatureLogo from '../../assets/signature.png';
import type { NavigationItem } from '../types/portfolio';

type SiteHeaderProps = {
  brandName: string;
  navigationItems: NavigationItem[];
};

export function SiteHeader({ brandName, navigationItems }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 mx-auto w-[min(1120px,calc(100%_-_48px))] border-b border-slate-200 bg-white/100 py-6 backdrop-blur max-[720px]:w-[min(100%_-_32px,1120px)]">
      <div className="flex items-center justify-between gap-6">
        <a className="inline-flex items-center" href="#top" aria-label={`${brandName} home`}>
          <img className="h-12" src={signatureLogo} alt="" />
        </a>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-7 whitespace-nowrap text-[0.9rem] font-medium text-slate-500 max-[720px]:hidden"
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

        <details className="group relative hidden max-[720px]:block">
          <summary
            className="grid size-10 cursor-pointer list-none place-items-center rounded-lg border border-slate-200 text-slate-700 transition-colors marker:hidden hover:border-slate-300 hover:text-slate-950 [&::-webkit-details-marker]:hidden"
            aria-label="Open navigation"
          >
            <span className="sr-only">Open navigation</span>
            <svg
              className="size-5 group-open:hidden"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 7h14M5 12h14M5 17h14" />
            </svg>
            <svg
              className="hidden size-5 group-open:block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 7l10 10M17 7 7 17" />
            </svg>
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-12 z-40 w-56 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
          >
            {navigationItems.map((item, index) => (
              <a
                key={item.href}
                className="block rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950 first:text-slate-950"
                href={item.href}
                aria-current={index === 0 ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
