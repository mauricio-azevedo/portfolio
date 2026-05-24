import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { FeaturedProject } from './components/FeaturedProject';
import { Hero } from './components/Hero';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { TechStack } from './components/TechStack';
import { navigationItems, profile } from './data/portfolio';

export default function App() {
  return (
    <>
      <SiteHeader brandName={profile.name} navigationItems={navigationItems} />

      <main id="top" className="mx-auto w-[min(1180px,calc(100%_-_48px))] pb-4 max-[980px]:w-[min(100%_-_32px,1180px)]">
        <Hero />
        <About />

        <section
          className="grid grid-cols-[1.05fr_0.95fr] gap-11 border-t border-slate-200 px-16 py-[30px] max-[980px]:grid-cols-1 max-[980px]:px-0 max-[980px]:py-7"
          aria-label="Experience and technology stack"
        >
          <Experience />
          <TechStack />
        </section>

        <FeaturedProject />
        <Contact />
      </main>

      <SiteFooter name={profile.name} />
    </>
  );
}
