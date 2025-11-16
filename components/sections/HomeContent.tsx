'use client';

import Header from './Header';
import HeroSection from './HeroSection';
import IntroVideoSection from './IntroVideoSection';
import WhoWeAreSection from './WhoWeAreSection';
import InitiativesSection from './InitiativesSection';
import ImpactStoriesSection from './ImpactStoriesSection';
import CTASection from './CTASection';
import Footer from './Footer';

export function HomeContent() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroVideoSection />
        <WhoWeAreSection />
        <InitiativesSection />
        <ImpactStoriesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
