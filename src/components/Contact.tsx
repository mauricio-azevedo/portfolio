import { contactLinks } from '../data/portfolio';

export function Contact() {
  return (
    <section
      id="contact"
      className="my-4 mt-2 flex items-center justify-between gap-7 rounded-[18px] border border-slate-200 bg-white/65 px-11 py-5 max-[980px]:flex-col max-[980px]:items-start max-[980px]:p-5"
      aria-label="Contact"
    >
      <div className="flex items-center gap-[18px]">
        <div className="grid size-[52px] flex-none place-items-center rounded-full bg-blue-50 text-[1.35rem] text-blue-700" aria-hidden="true">
          ✈
        </div>
        <div>
          <h2 className="m-0 text-base font-bold text-slate-950">Let’s build something useful together.</h2>
          <p className="m-0 text-sm text-slate-500">I’m open to new opportunities and interesting projects.</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-5 text-sm font-semibold text-slate-700 max-[980px]:justify-start">
        {contactLinks.map((link) => (
          <a
            key={link.href}
            className="transition-colors hover:text-blue-700"
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
