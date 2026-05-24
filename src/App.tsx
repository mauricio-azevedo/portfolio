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

      <main
        id="top"
        className="mx-auto w-[min(1120px,calc(100%_-_48px))] max-[980px]:w-[min(100%_-_32px,1120px)]"
      >
        <Hero />
        <About />
        <TechStack />

        <section className="border-b border-slate-200 py-12" aria-label="Experience">
          <Experience />
        </section>

        <FeaturedProject />
        <Contact />
      </main>

      <SiteFooter name={profile.name} />
    </>
  );
}
