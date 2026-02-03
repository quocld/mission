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

export default function HireAssistantsPage() {
  const profiles = [
    {
      name: "Maria R.",
      location: "Philippinen (UTC+8)",
      badge: "Geprüfter Assistent",
      bio: "Hochorganisierte Executive Assistant mit 7+ Jahren Erfahrung in der Unterstützung von C-Level-Führungskräften. Expertin für Kalendermanagement, Reiseplanung, E-Mail-Management und Projektkoordination. Ausgezeichnete Kommunikationsfähigkeiten und Liebe zum Detail.",
      skills: ["Executive Support", "Kalendermanagement", "Reiseplanung", "E-Mail-Management", "Dateneingabe", "Recherche", "+6"],
      availability: "Vollzeit & Freelance",
      previousCompany: { name: "Salesforce", logo: "Salesforce.jpg" },
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
      quote: "Unser virtueller Assistent von Programmier-Anfang war ein Wendepunkt für unsere Produktivität.",
      author: "Robert Johnson",
      title: "CEO",
      company: "StartupCo",
      avatar: ""
    },
    {
      quote: "Fand eine außergewöhnliche Executive Assistant, die alles fehlerfrei erledigt.",
      author: "Amanda Smith",
      title: "Gründerin",
      company: "GrowthVentures",
      avatar: ""
    },
    {
      quote: "Der Assistent, den wir eingestellt haben, ist professionell, effizient und unglaublich organisiert.",
      author: "Chris Lee",
      title: "COO",
      company: "BusinessInc",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Finden und stellen Sie Remote-Assistenten nach Spezialisierung ein",
      items: [
        { name: "Virtuelle Assistenten", icon: "va-plain.svg", url: "/hire-assistants/virtual-assistants" },
        { name: "Executive Assistants", icon: "ea-plain.svg", url: "/hire-assistants/executive-assistants" },
        { name: "Administrative Assistenten", icon: "admin-plain.svg", url: "/hire-assistants/administrative-assistants" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Anfrage",
      description: "Beschreiben Sie den idealen Assistenten, den Sie suchen.",
      subtext: "Erzählen Sie uns von der Rolle, den Unterstützungsbedürfnissen und dem Budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Erhalten Sie geprüfte Assistenten-Profile, die zu Ihren Anforderungen passen.",
      subtext: "Wählen Sie den Assistenten aus, den Sie interviewen möchten.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Einstellen",
      description: "Wenn Sie bereit sind, stellen Sie den bevorzugten Assistenten ein.",
      subtext: "Unterschreiben Sie eine NDA, und wir kümmern uns um den Papierkram.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "Wie man einen virtuellen Assistenten einstellt", image: "resources/1.png", url: "/employer-blog/hire-virtual-assistant/" },
    { title: "VA Interview Fragen", image: "resources/2.png", url: "/employer-blog/va-questions/" },
    { title: "Arbeiten mit Remote-Assistenten", image: "resources/3.png", url: "/employer-blog/remote-assistants/" },
    { title: "Aufgaben effektiv delegieren", image: "resources/4.png", url: "/employer-blog/delegate-tasks/" },
    { title: "Bewertung von Assistenten-Kandidaten", image: "resources/5.png", url: "/employer-blog/evaluate-assistants/" },
    { title: "Management von virtuellen Assistenten", image: "resources/6.png", url: "/employer-blog/manage-virtual-assistants/" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero
        category="assistants"
        count={4532}
        description="Programmier-Anfang verfügt über 4.532 geprüfte Remote-Assistenten, die bereit für Interviews sind. Finden Sie virtuelle Assistenten, Executive Assistants, administrative Assistenten und mehr, um Ihre Geschäftsabläufe zu unterstützen."
      />
      <TalentShowcase heading="4.532 Remote-Assistenten verfügbar:" profiles={profiles} category="assistants" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top-Remote-Assistenten sind nur wenige Klicks entfernt" subheading="Programmier-Anfang bietet vorgeprüfte Assistenten, die bereit sind, Ihre Geschäftsanforderungen zu unterstützen." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="assistants" />
      <FAQSection category="assistants" />
      <ResourcesSection heading="Ressourcen für die Einstellung von Remote-Assistenten" subheading="Erfahren Sie mehr darüber, wie Sie Remote-Assistenten einstellen und die Produktivität maximieren!" articles={articles} />
      <FinalCTA
        heading="Ihr neuer Assistent ist nur einen Klick entfernt!"
        subheading="Risikofrei starten."
        ctaText="Talente einstellen"
      />
      <Footer />
    </div>
  );
}

