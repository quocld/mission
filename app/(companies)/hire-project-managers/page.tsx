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

export default function HireProjectManagersPage() {
  const profiles = [
    {
      name: "David K.",
      location: "Australien (UTC+10)",
      badge: "Geprüfter Projektmanager",
      bio: "Zertifizierter PMP mit 12+ Jahren Erfahrung im Management komplexer technischer Projekte. Experte für agile und Wasserfall-Methoden, Risikomanagement und Stakeholder-Kommunikation. 50+ Projekte zeit- und budgetgerecht geliefert.",
      skills: ["PMP", "Agile", "Scrum", "Jira", "Risikomanagement", "Stakeholder-Management", "Wasserfall", "+9"],
      availability: "Vollzeit & Freelance",
      previousCompany: { name: "Microsoft", logo: "Microsoft.jpg" },
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
      quote: "Unser Programmier-Anfang Projektmanager hielt unser komplexes Projekt auf Kurs und lieferte pünktlich.",
      author: "Susan Miller",
      title: "Director of Operations",
      company: "EnterpriseInc",
      avatar: ""
    },
    {
      quote: "Wir fanden einen zertifizierten PMP, der unsere Projektanforderungen sofort verstand.",
      author: "John Davis",
      title: "VP of Engineering",
      company: "TechCorp",
      avatar: ""
    },
    {
      quote: "Der Scrum Master, den wir eingestellt haben, transformierte unsere agilen Prozesse.",
      author: "Maria Garcia",
      title: "CTO",
      company: "AgileTeam",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Finden und stellen Sie Remote-Projektmanager nach Spezialisierung ein",
      items: [
        { name: "Projektmanager", icon: "pm-plain.svg", url: "/hire-project-managers" },
        { name: "Scrum Masters", icon: "scrum-plain.svg", url: "/hire-project-managers/scrum-masters" },
        { name: "Programm-Manager", icon: "program-plain.svg", url: "/hire-project-managers/program-managers" },
        { name: "Agile Coaches", icon: "agile-plain.svg", url: "/hire-project-managers/agile-coaches" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Anfrage",
      description: "Beschreiben Sie den idealen Projektmanager, den Sie suchen.",
      subtext: "Erzählen Sie uns von der Rolle, den Projektanforderungen und dem Budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Erhalten Sie geprüfte Projektmanager-Profile, die zu Ihren Anforderungen passen.",
      subtext: "Wählen Sie den Projektmanager aus, den Sie interviewen möchten.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Einstellen",
      description: "Wenn Sie bereit sind, stellen Sie den bevorzugten Projektmanager ein.",
      subtext: "Unterschreiben Sie eine NDA, und wir kümmern uns um den Papierkram.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "Wie man einen Projektmanager einstellt", image: "resources/1.png", url: "/employer-blog/hire-project-manager/" },
    { title: "PM Interview Fragen", image: "resources/2.png", url: "/employer-blog/pm-interview-questions/" },
    { title: "Aufbau eines Remote-Projektteams", image: "resources/3.png", url: "/employer-blog/remote-project-team/" },
    { title: "Agile vs Wasserfall-Methodik", image: "resources/4.png", url: "/employer-blog/agile-waterfall/" },
    { title: "Bewertung von PM-Kandidaten", image: "resources/5.png", url: "/employer-blog/evaluate-project-managers/" },
    { title: "Management von Remote-Projekten", image: "resources/6.png", url: "/employer-blog/manage-remote-projects/" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero
        category="project-managers"
        count={6789}
        description="Programmier-Anfang verfügt über 6.789 geprüfte Remote-Projektmanager, die bereit für Interviews sind. Finden Sie erfahrene Projektmanager, Scrum Master, Programm-Manager und mehr, um Ihre Projekte zum Erfolg zu führen."
      />
      <TalentShowcase heading="6.789 Remote-Projektmanager verfügbar:" profiles={profiles} category="project managers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top-Remote-Projektmanager sind nur wenige Klicks entfernt" subheading="Programmier-Anfang bietet vorgeprüfte Projektmanager mit nachweislicher Erfolgsbilanz." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="project managers" />
      <FAQSection category="project managers" />
      <ResourcesSection heading="Ressourcen für die Einstellung von Projektmanagement-Experten" subheading="Erfahren Sie mehr darüber, wie Sie Remote-Projektmanager einstellen und Projekte erfolgreich liefern!" articles={articles} />
      <FinalCTA
        heading="Ihr zukünftiger Projektmanager ist gleich um die Ecke!"
        subheading="Risikofrei starten."
        ctaText="Talente einstellen"
      />
      <Footer />
    </div>
  );
}

