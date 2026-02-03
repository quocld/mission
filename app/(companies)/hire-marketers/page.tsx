import Header from '../../components/Header';
import Hero from './components/Hero';
import TalentPreview from './components/TalentPreview';
import Specializations from './components/Specializations';
import WhyChooseArc from './components/WhyChooseArc';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import SeoContent from './components/SeoContent';
import Faq from './components/Faq';
import FooterCTA from './components/FooterCTA';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Hire Top Freelance Marketing Experts | Arc',
    description: 'Hire the top 2% of freelance marketing experts. Arc makes it easy to find vetted remote marketers for your team.',
};

export default function HireMarketersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <TalentPreview />
            <Specializations />
            <WhyChooseArc />
            <HowItWorks />
            <Testimonials />
            <SeoContent />
            <Faq />
            <FooterCTA />
            <Footer />
        </main>
    );
}
