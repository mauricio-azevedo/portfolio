import * as m from 'motion/react-m';
import { reveal, rise } from '../lib/motion';
import type { PortfolioLabels, Profile } from '../types/portfolio';

type SiteFooterProps = {
  labels: PortfolioLabels;
  profile: Profile;
};

export function SiteFooter({ labels, profile }: SiteFooterProps) {
  return (
    <m.footer className="mt-20 py-10" {...reveal}>
      <m.div
        className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-outline sm:flex-row"
        variants={rise}
      >
        <span>
          © {new Date().getFullYear()} {profile.name}. {labels.footerRights}
        </span>
        <div className="flex items-center gap-4">
          <span>{profile.location}</span>
          <span aria-hidden="true">•</span>
          <span>{profile.timezone}</span>
        </div>
      </m.div>
    </m.footer>
  );
}
