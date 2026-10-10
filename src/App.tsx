import { LazyMotion, MotionConfig, domAnimation } from 'motion/react';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { portfolioContent } from './data/portfolio';

export default function App() {
  const content = portfolioContent;

  return (
    // Users who prefer reduced motion get fades without movement. Components render
    // `m.*` with the `domAnimation` feature set, which ships less code than the full
    // `motion` component; `strict` throws if the full component slips in.
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <SiteHeader
          profile={content.profile}
          navigationItems={content.navigationItems}
          labels={content.labels}
        />

        <main id="top" className="mx-auto max-w-2xl space-y-24 px-6 py-16 md:py-24">
          <Hero contactLinks={content.contactLinks} profile={content.profile} />
          <Work items={content.work.items} period={content.work.period} labels={content.labels} />
          <Experience
            items={content.experience.items}
            period={content.experience.period}
            labels={content.labels}
          />
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
