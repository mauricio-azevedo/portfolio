import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { FeaturedProject } from './components/FeaturedProject';
import { Hero } from './components/Hero';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { TechStack } from './components/TechStack';
import { portfolioContent } from './data/portfolio';

export default function App() {
  const content = portfolioContent;

  return (
    <>
      <SiteHeader
        brandName={content.profile.name}
        navigationItems={content.navigationItems}
        labels={content.labels}
      />

      <main
        id="top"
        className="mx-auto w-[min(1120px,calc(100%_-_48px))] max-[980px]:w-[min(100%_-_32px,1120px)]"
      >
        <Hero
          contactLinks={content.contactLinks}
          labels={content.labels}
          profile={content.profile}
        />
        <About aboutFacts={content.aboutFacts} labels={content.labels} profile={content.profile} />
        <TechStack labels={content.labels} techStack={content.techStack} />

        <section
          className="border-b border-slate-200 py-12"
          aria-label={content.labels.experienceAria}
        >
          <Experience experiences={content.experiences} labels={content.labels} />
        </section>

        <FeaturedProject featuredProject={content.featuredProject} labels={content.labels} />
        <Contact contactLinks={content.contactLinks} labels={content.labels} />
      </main>

      <SiteFooter labels={content.labels} name={content.profile.name} />
    </>
  );
}
