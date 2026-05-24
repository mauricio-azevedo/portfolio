type SiteFooterProps = {
  name: string;
};

export function SiteFooter({ name }: SiteFooterProps) {
  return (
    <footer className="mx-auto w-[min(1180px,calc(100%-48px))] pb-[34px] text-center text-[0.82rem] text-slate-400 max-[980px]:w-[min(100%-32px,1180px)]">
      <span>© {new Date().getFullYear()} {name}. All rights reserved.</span>
    </footer>
  );
}
