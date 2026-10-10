import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { Skills } from './components/Skills';
import { portfolioContent } from './data/portfolio';

export default function App() {
  const content = portfolioContent;

  return (
    // Users who prefer reduced motion get fades without movement. Site components render `m.*`
    // with the `domAnimation` feature set, which ships less code than the full `motion` component.
    // `strict` is meant to flag the full component during development, but it never fires in
    // browsers: motion-utils defines `invariant` as a no-op when `process` is undefined, so bundle
    // size is the only signal. The registry primitives under `components/animate-ui` import the
    // full component and are kept verbatim, so the full feature set ships too.
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <SiteHeader
          profile={content.profile}
          navigationItems={content.navigationItems}
          labels={content.labels}
        />

        <main id="top" className="mx-auto max-w-2xl space-y-24 px-6 py-16 md:py-24">
          <Hero contactLinks={content.contactLinks} profile={content.profile} />
          <Experience
            items={content.experience.items}
            period={content.experience.period}
            labels={content.labels}
          />
          <Projects items={content.projects} labels={content.labels} />
          <Skills skills={content.skills} labels={content.labels} />
          <Contact
            contactLinks={content.contactLinks}
            statement={content.contact.statement}
            labels={content.labels}
          />
        </main>

        <SiteFooter labels={content.labels} profile={content.profile} />
      </LazyMotion>
    </MotionConfig>
  );
}
