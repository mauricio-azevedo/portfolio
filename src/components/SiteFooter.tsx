import type { ContactLink } from '../types/portfolio';
import { ContactLinks } from './ContactLinks';

type SiteFooterProps = {
  name: string;
  contactLinks: ContactLink[];
};

export function SiteFooter({ name, contactLinks }: SiteFooterProps) {
  return (
    <footer className="mx-auto flex w-[min(1120px,calc(100%_-_48px))] items-center justify-between gap-6 border-t border-slate-200 pb-8 pt-6 text-sm text-slate-500 max-[980px]:w-[min(100%_-_32px,1120px)] max-[720px]:flex-col max-[720px]:items-start">
      <span>© {new Date().getFullYear()} {name}. All rights reserved.</span>
      <ContactLinks links={contactLinks} variant="compact" />
    </footer>
  );
}
