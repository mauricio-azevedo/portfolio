import type { NavigationItem, PortfolioLabels, Profile } from '../types/portfolio';

type SiteHeaderProps = {
  profile: Profile;
  navigationItems: NavigationItem[];
  labels: PortfolioLabels;
};

export function SiteHeader({ profile, navigationItems, labels }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-outline-variant/60 bg-background">
      <div className="mx-auto flex h-16 max-w-2xl items-center justify-between gap-3 px-6">
        <a className="flex min-w-0 items-center gap-2.5" href="#top">
          <span className="truncate text-sm font-medium tracking-tight text-on-surface">
            {profile.name}
          </span>
          <span className="hidden font-mono text-xs text-outline sm:inline">/ {profile.tag}</span>
        </a>

        <nav
          aria-label={labels.primaryNavigation}
          className="flex shrink-0 items-center gap-4 text-xs font-medium text-on-surface-variant sm:gap-6"
        >
          {navigationItems.map((item) => (
            <a key={item.href} className="transition-colors hover:text-on-surface" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
