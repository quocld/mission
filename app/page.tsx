import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import WhyChooseArc from './components/WhyChooseArc';
import BestFitSection from './components/BestFitSection';
import WhyArcIsDifferent from './components/WhyArcIsDifferent';
import HowToUseArc from './components/HowToUseArc';
import ForTalentSection from './components/ForTalentSection';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <TrustBadges />
      <WhyChooseArc />
      <BestFitSection />
      <WhyArcIsDifferent />
      <HowToUseArc />
      <ForTalentSection />
      <FooterCTA />
      <Footer />
    </div>
  );
}
