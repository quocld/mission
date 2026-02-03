import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import WhyChooseArc from './components/WhyChooseArc';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <TrustBadges />
      <WhyChooseArc />
    </div>
  );
}
