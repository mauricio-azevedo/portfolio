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
        className="mx-auto w-[min(1180px,calc(100%_-_48px))] pb-6 pt-2 max-[980px]:w-[min(100%_-_32px,1180px)]"
      >
        <Hero />
        <About />
        <TechStack />

        <section
          className="mt-5 rounded-[28px] border border-white/70 bg-white/55 px-10 py-9 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl max-[980px]:px-6 max-[980px]:py-7"
          aria-label="Experience"
        >
          <Experience />
        </section>

        <FeaturedProject />
        <Contact />
      </main>

      <SiteFooter name={profile.name} />
    </>
  );
}
