import { contactLinks } from '../data/portfolio';

export function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-between gap-8 py-12 max-[980px]:flex-col max-[980px]:items-start"
      aria-label="Contact"
    >
      <div>
        <h2 className="m-0 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
          Let’s build something useful together.
        </h2>
        <p className="m-0 mt-2 text-sm text-slate-500">I’m open to new opportunities and interesting projects.</p>
      </div>

      <div className="flex flex-wrap justify-end gap-4 text-sm font-semibold text-slate-700 max-[980px]:justify-start">
        {contactLinks.map((link) => (
          <a
            key={link.href}
            className="border-b border-slate-300 pb-1 transition-colors hover:border-slate-950 hover:text-slate-950"
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
