import { contactLinks } from '../data/portfolio';

export function Contact() {
  return (
    <section
      id="contact"
      className="mt-5 flex items-center justify-between gap-7 rounded-[28px] border border-white/70 bg-white/65 px-10 py-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl max-[980px]:flex-col max-[980px]:items-start max-[980px]:px-6"
      aria-label="Contact"
    >
      <div className="flex items-center gap-5">
        <div
          className="grid size-14 flex-none place-items-center rounded-2xl bg-slate-950 text-[1.25rem] text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]"
          aria-hidden="true"
        >
          ✦
        </div>
        <div>
          <h2 className="m-0 text-xl font-bold tracking-[-0.04em] text-slate-950">
            Let’s build something useful together.
          </h2>
          <p className="m-0 mt-1 text-sm text-slate-500">I’m open to new opportunities and interesting projects.</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-3 text-sm font-bold text-slate-700 max-[980px]:justify-start">
        {contactLinks.map((link) => (
          <a
            key={link.href}
            className="rounded-full border border-slate-200 bg-white/80 px-5 py-3 transition-colors hover:border-blue-200 hover:text-blue-700"
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
