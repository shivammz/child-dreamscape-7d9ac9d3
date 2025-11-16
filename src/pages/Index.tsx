import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroVideoSection from "@/components/IntroVideoSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import InitiativesSection from "@/components/InitiativesSection";
import ImpactStoriesSection from "@/components/ImpactStoriesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
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
    </div>
  );
};

export default Index;
