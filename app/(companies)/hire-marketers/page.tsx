import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';
import FinalCTA from '../components/FinalCTA';
import WhyChooseArc from '@/app/components/WhyChooseArc';
import CompaniesTestimonials from '../components/CompaniesTestimonials';
import DedicatedTeamSection from '../components/DedicatedTeamSection';
import HiringGuideSection from '../components/HiringGuideSection';

export const metadata = {
    title: 'Top-Freelance-Marketing-Experten einstellen | Programmier-Anfang',
    description: 'Stellen Sie die Top 2% der Freelance-Marketing-Experten ein. Programmier-Anfang macht es einfach, geprüfte Remote-Marketer für Ihr Team zu finden.',
};

export default function HireMarketersPage() {
    const profiles = [
        {
            name: "Emily R.",
            location: "Vereinigtes Königreich (UTC+0)",
            badge: "Geprüfter Marketer",
            bio: "Erfahrene Digital-Marketing-Strategin mit 8 Jahren Erfahrung in der Skalierung von SaaS-Startups. Spezialisiert auf SEO, Content-Marketing und Paid User Acquisition. Hat das organische Wachstum für frühere Kunden um 300% gesteigert.",
            skills: ["SEO", "Content Marketing", "Google Ads", "Growth Hacking", "Analytics", "Copywriting", "+5"],
            availability: "Vollzeit & Freelance",
            previousCompany: { name: "HubSpot", logo: "HubSpot.jpg" },
            avatar: ""
        },
        {
            name: "Marcus T.",
            location: "Deutschland (UTC+1)",
            badge: "Geprüfter Marketer",
            bio: "Performance-Marketing-Experte mit Fokus auf E-Commerce und Lead-Generierung. Verwaltet monatliche Werbebudgets von über 100.000 €. Zertifiziert in Google Ads und Facebook Blueprint.",
            skills: ["Facebook Ads", "Instagram Ads", "E-Mail-Marketing", "Conversion-Optimierung", "Shopify", "+8"],
            availability: "Vollzeit & Freelance",
            previousCompany: { name: "Zalando", logo: "Zalando.jpg" },
            avatar: ""
        }
    ];

    const stats = [
        { prefix: "Bis zu", value: "75%", label: "schneller eingestellt" },
        { prefix: "Bis zu", value: "58%", label: "Kostenersparnis" },
        { value: "800+", label: "Einstellungen vorgenommen" }
    ];

    const testimonials = [
        {
            quote: "Unser Marketing-ROI hat sich innerhalb von drei Monaten verdoppelt, nachdem wir einen Experten über Programmier-Anfang eingestellt haben.",
            author: "Sarah Jenkins",
            title: "CMO",
            company: "TechGrowth",
            avatar: ""
        },
        {
            quote: "Die Qualität der vorab geprüften Marketer hat uns unzählige Stunden im Recruiting-Prozess gespart.",
            author: "Mike Ross",
            title: "Gründer",
            company: "StartLine",
            avatar: ""
        }
    ];

    const companiesTestimonials = [
        {
            quote: "Programmier-Anfang hat uns geholfen, schnell einen erstklassigen Marketingleiter zu finden.",
            author: "Lisa Krause",
            title: "VP Marketing",
            company: "DeliveryHero",
            avatar: ""
        },
        {
            quote: "Die Plattform für Remote-Talente, der wir vertrauen, wenn es um Marketing-Hirings geht.",
            author: "Tom Weber",
            title: "CEO",
            company: "FinTechDE",
            avatar: ""
        }
    ];

    const categorySections = [
        {
            id: "roles",
            title: "Finden und stellen Sie Remote-Marketer nach Spezialisierung ein",
            items: [
                { name: "Digital Marketer", icon: "digital-marketing.svg", url: "/hire-marketers/digital-marketing" },
                { name: "SEO Experten", icon: "seo.svg", url: "/hire-marketers/seo" },
                { name: "Content Marketer", icon: "content.svg", url: "/hire-marketers/content" },
                { name: "Social Media Manager", icon: "social-media.svg", url: "/hire-marketers/social-media" },
                { name: "Growth Hacker", icon: "growth.svg", url: "/hire-marketers/growth" },
                { name: "E-Mail-Marketer", icon: "email.svg", url: "/hire-marketers/email" }
            ]
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Anfrage",
            description: "Beschreiben Sie den idealen Marketer, den Sie suchen.",
            subtext: "Erzählen Sie uns von der Rolle, den Zielen und dem Budget.",
            image: "request.png"
        },
        {
            number: "02",
            title: "Interview",
            description: "Erhalten Sie geprüfte Marketer-Profile, die zu Ihren Anforderungen passen.",
            subtext: "Wählen Sie den Marketer aus, den Sie interviewen möchten.",
            image: "interview.png"
        },
        {
            number: "03",
            title: "Einstellen",
            description: "Wenn Sie bereit sind, stellen Sie den bevorzugten Marketer ein.",
            subtext: "Wir kümmern uns um Vertrag und Compliance.",
            image: "hire.png"
        }
    ];

    const dedicatedTeamFeatures = [
        {
            title: "Vorgeprüfte Marketer",
            description: "Jeder Marketer wird auf Fachwissen und strategisches Denken getestet."
        },
        {
            title: "Schnelles Matching",
            description: "Erhalten Sie passende Kandidaten in 72 Stunden."
        },
        {
            title: "Qualitätsgarantie",
            description: "Zahlen Sie nur, wenn Sie zufrieden sind."
        }
    ];

    const guideSections = [
        {
            title: "Warum Remote-Marketer einstellen?",
            subsections: [
                {
                    subtitle: "Globale Perspektive",
                    content: "Remote-Marketer bringen frische Ideen und Einblicke in internationale Märkte."
                },
                {
                    subtitle: "Flexibilität",
                    content: "Skalieren Sie Ihre Marketing-Bemühungen schnell nach oben oder unten."
                }
            ]
        }
    ];

    const articles = [
        { title: "Wie man einen Growth Marketer einstellt", image: "resources/1.png", url: "/employer-blog/hire-growth-marketer/" },
        { title: "Marketing Interview Fragen", image: "resources/2.png", url: "/employer-blog/marketing-interview-questions/" },
        { title: "Remote Marketing Team aufbauen", image: "resources/3.png", url: "/employer-blog/remote-marketing-team/" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HireHero
                category="marketers"
                count={3421}
                description="Programmier-Anfang verfügt über 3.421 geprüfte Remote-Marketer, Growth-Experten und Content-Strategen. Finden Sie das perfekte Talent, um Ihre Marke wachsen zu lassen."
            />
            <TalentShowcase
                heading="3.421 Remote-Marketer verfügbar:"
                profiles={profiles}
                category="marketers"
            />
            <StatsTestimonials stats={stats} testimonials={testimonials} />
            <CategoriesGrid
                heading="Top-Marketer sind nur wenige Klicks entfernt"
                subheading="Programmier-Anfang bietet Experten für jeden Marketing-Kanal."
                sections={categorySections}
            />
            <HowItWorksSteps steps={steps} category="marketers" />
            <CompaniesTestimonials testimonials={companiesTestimonials} />
            <DedicatedTeamSection
                heading="Bauen Sie Ihr dediziertes Marketing-Team auf"
                description="Erweitern Sie Ihre Reichweite mit unserem globalen Netzwerk von Marketing-Profis."
                features={dedicatedTeamFeatures}
            />
            <WhyChooseArc />
            <HiringGuideSection
                heading="Wie man Top-Marketer einstellt"
                sections={guideSections}
            />
            <FAQSection category="marketers" />
            <ResourcesSection
                heading="Ressourcen für die Einstellung von Marketern"
                subheading="Tipps und Tricks für das Recruiting von Marketing-Talenten."
                articles={articles}
            />
            <FinalCTA
                heading="Ihr neuer Marketing-Experte wartet schon!"
                subheading="Risikofrei starten."
                ctaText="Talente einstellen"
            />
            <Footer />
        </div>
    );
}
