import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import WhyChooseArc from '@/app/components/WhyChooseArc';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import HowItWorksSteps from '../components/HowItWorksSteps';
import CompaniesTestimonials from '../components/CompaniesTestimonials';
import DedicatedTeamSection from '../components/DedicatedTeamSection';
import HiringGuideSection from '../components/HiringGuideSection';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';

export default function HireDesignersPage() {
  const profiles = [
    {
      name: "Soheil O.",
      location: "Vereinigte Staaten (UTC-7)",
      badge: "Geprüft",
      bio: "Erfahrener Product Design Leader mit über 20 Jahren Erfahrung in der Gestaltung benutzerzentrierter Lösungen, die signifikante Ergebnisse erzielen. Leitete erfolgreich bahnbrechende GenAI-Projekte bei Pinterest, Twitter und Walmart+, lieferte konsistent skalierbare Produkte, die das Nutzerengagement um bis zu 15% steigerten und die Konversionsraten um 8% verbesserten. Expertise in datengesteuertem Design, Nutzerforschung und A/B-Tests, gepaart mit einer nachgewiesenen Erfolgsbilanz beim Aufbau von Designteams von wenigen Mitgliedern auf über 50.",
      primarySkill: { name: "Produktdesign", experience: "10 Jahre" },
      skills: ["UI-Design", "Branding", "Visuelles Design", "Figma", "Teamzusammenarbeit", "Nutzertests", "+13"],
      availability: "Vollzeit & Freelance",
      previousCompany: { name: "Pinterest", logo: "Pinterest.jpg" },
      avatar: ""
    },
    {
      name: "Audrey W.",
      location: "Vereinigte Staaten (UTC+8)",
      badge: "Geprüft",
      bio: "Ich bin eine Produktdesignerin mit Hintergrund in Kognitionswissenschaft und Human Centered Design, fasziniert davon, wie wir denken und mit der Welt um uns herum interagieren. Ich genieße es, komplexe Probleme zu zerlegen und gemeinsam an Designlösungen zu arbeiten. Mit 7+ Jahren Erfahrung habe ich Produkte sowohl in großen Unternehmen als auch in frühen Teams geleitet und bin derzeit offen für Teilzeit-Freelance-Arbeit.",
      primarySkill: { name: "Produktdesign", experience: "6 Jahre" },
      skills: ["Nutzerforschung", "Wireframing/Prototyping", "Figma", "Design-Systeme", "Strategie", "Branding", "+3"],
      availability: "Vollzeit & Freelance",
      previousCompany: { name: "Salesforce", logo: "Salesforce.jpg" },
      avatar: ""
    },
    {
      name: "Vincent B.",
      location: "Vereinigte Staaten (UTC-4)",
      badge: "Geprüft",
      bio: "Vincent Boutaud ist ein erfahrener agiler Product Owner, Projektmanager und Technologiespezialist mit 17+ Jahren Erfahrung in der Innovationsförderung an der Schnittstelle von 3D-Visualisierung, Building Information Modeling und Softwareentwicklung. Bringt Expertise auf Führungsebene in Produktstrategie, Qualitätsbetrieb und funktionsübergreifender Führung mit.",
      primarySkill: { name: "Produktmanagement", experience: "17+ Jahre" },
      skills: ["Salesforce", "Jira/Confluence", "Figma", "UI-Design", "UX/UI-Design", "Salesforce Lightning", "+3"],
      availability: "Vollzeit & Freelance",
      previousCompany: { name: "Epic Games", logo: "Epic Games.jpg" },
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
      quote: "Wir haben zuvor versucht, über traditionelle Plattformen einzustellen, aber die Qualität der Entwickler bei Programmier-Anfang ist weitaus besser.",
      author: "Moishe Groger",
      title: "CEO",
      company: "Tentaroo",
      avatar: "/images/testimonials/moishe-groger.jpg"
    },
    {
      quote: "Ich habe ehemalige Gründer, Senior Engineers und sogar CMOs in weniger als 72 Stunden gefunden.",
      author: "Chris Bakke",
      title: "Gründer & CEO",
      company: "Laskie",
      avatar: "/images/testimonials/chris-bakke.jpg"
    },
    {
      quote: "Hochqualifizierter und vielfältiger Talentpool zu erschwinglichen Kosten!",
      author: "Kristen Hadjis",
      title: "Lead Recruiter",
      company: "Stem",
      avatar: "/images/testimonials/kristen-hadjis.jpg"
    }
  ];

  const companiesTestimonials = [
    {
      avatar: "/images/testimonials/sarah-thompson.png",
      quote: "Programmier-Anfangs Designer haben unsere Produktvision in die Realität umgesetzt. Ihre Expertise in UX und Liebe zum Detail haben unsere Erwartungen übertroffen.",
      author: "Sarah Thompson",
      title: "Head of Design",
      company: "Automattic"
    },
    {
      avatar: "/images/testimonials/michael-chen.png",
      quote: "Top-Designer zu finden war nie einfacher. Der Prüfungsprozess von Programmier-Anfang stellt sicher, dass wir nur die Besten interviewen.",
      author: "Michael Chen",
      title: "Product Director",
      company: "Spotify"
    },
    {
      avatar: "/images/testimonials/jennifer-martinez.png",
      quote: "Wir haben unser gesamtes Designteam über Programmier-Anfang aufgebaut. Die Qualität und Geschwindigkeit der Einstellung war für uns revolutionär.",
      author: "Jennifer Martinez",
      title: "VP of Product",
      company: "Udacity"
    }
  ];

  const hiringGuideSections = [
    {
      title: "Was macht ein Produktdesigner und warum brauchen Sie einen?",
      subsections: [
        {
          subtitle: "Überblick",
          content: "Ein Produktdesigner hilft bei der Erstellung und Entwicklung sowohl digitaler als auch physischer Produkte. Sie stellen sicher, dass das Produkt funktional, einfach zu bedienen und visuell ansprechend ist und gleichzeitig die Bedürfnisse seiner Nutzer erfüllt. Produktdesigner konzentrieren sich darauf, das Design für Produkte wie Websites, Apps oder Software benutzerfreundlich und attraktiv zu gestalten. Sie nutzen User Experience (UX) und User Interface (UI) Fähigkeiten, um Layouts, Menüs und interaktive Funktionen zu erstellen, die einfach und effizient sind. Unabhängig von der Produktart spielen Produktdesigner eine Schlüsselrolle für den Erfolg eines Produkts."
        }
      ]
    },
    {
      title: "Arten von Produktdesignern",
      subsections: [
        {
          subtitle: "UX-Designer",
          content: "UX-Designer konzentrieren sich darauf, wie Nutzer mit einem Produkt interagieren, und sorgen für ein reibungsloses und angenehmes Erlebnis. Sie führen Benutzerforschung durch, erstellen Wireframes und testen Prototypen, um Benutzerbedürfnisse und -verhalten zu verstehen."
        },
        {
          subtitle: "UI-Designer",
          content: "UI-Designer spezialisieren sich auf die visuellen Aspekte eines Produkts und entwerfen Schnittstellen, die ansprechend und einfach zu navigieren sind. Sie konzentrieren sich auf Schaltflächen, Symbole, Typografie und Farbschemata, um ein stimmiges Erscheinungsbild zu schaffen."
        },
        {
          subtitle: "Interaktionsdesigner",
          content: "Interaktionsdesigner arbeiten daran, wie Nutzer auf detaillierter Ebene mit digitalen Produkten interagieren. Sie entwerfen die interaktiven Elemente wie Animationen, Übergänge und Reaktionen auf Benutzereingaben."
        },
        {
          subtitle: "Visual Designer",
          content: "Visual Designer konzentrieren sich auf das gesamte Aussehen und die Markenidentität digitaler Produkte. Sie stellen sicher, dass das Design mit der visuellen Identität des Unternehmens übereinstimmt und gleichzeitig funktional ist."
        }
      ]
    },
    {
      title: "Schlüsselqualifikationen, auf die Sie bei Produktdesignern achten sollten",
      subsections: [
        {
          subtitle: "Technische Fähigkeiten",
          content: "UX/UI-Design: Produktdesigner müssen benutzerfreundliche und visuell ansprechende Schnittstellen erstellen. Wireframing und Prototyping: Müssen in Tools wie Figma, Adobe XD oder InVision versiert sein. Grundlegendes Coding: Kenntnisse in HTML, CSS und JavaScript helfen bei der Zusammenarbeit mit Entwicklern. Nutzerforschung: Erfahrung in Interviews, Umfragen und Usability-Tests."
        },
        {
          subtitle: "Soft Skills",
          content: "Kommunikation: Fähigkeit, Ideen zu präsentieren und effektiv mit Teams zusammenzuarbeiten. Problemlösung: Probleme identifizieren und Lösungen schaffen, die Nutzer und Geschäftsziele zufriedenstellen. Anpassungsfähigkeit: Feedback annehmen und Designs anpassen, wenn sich Pläne ändern. Liebe zum Detail: Sicherstellen, dass jedes visuelle und interaktive Element zusammenarbeitet. Zeitmanagement: Arbeit pünktlich liefern, ohne die Qualität zu beeinträchtigen."
        }
      ]
    },
    {
      title: "Wie viel kostet es, Produktdesigner einzustellen?",
      subsections: [
        {
          subtitle: "Preisübersicht",
          content: "Die Kosten für die Einstellung eines Freelance-Produktdesigners variieren stark. Die meisten Freelance-Produktdesigner verlangen zwischen 25 und 200 US-Dollar pro Stunde. Für einfachere Aufgaben wie Wireframing oder grundlegendes UI-Design liegen die Preise typischerweise zwischen 25 und 80 US-Dollar pro Stunde. Komplexere Arbeiten wie 3D-Modellierung, CAD-Design oder tiefgehende Marktforschung können die Preise auf 150 bis 200 US-Dollar pro Stunde treiben."
        },
        {
          subtitle: "Faktoren, die die Preise beeinflussen",
          content: "Erfahrungsniveau: Senior Designer (5+ Jahre) verlangen 100-200 $/Std., Junior Designer (1-3 Jahre) 25-50 $/Std. Standort: Designer aus Osteuropa oder Asien können weniger verlangen als solche in San Francisco oder New York. Projektkomplexität: Komplexere Projekte erfordern höhere Preise."
        }
      ]
    },
    {
      title: "Häufige Fehler, die man bei der Einstellung von Produktdesignern vermeiden sollte",
      subsections: [
        {
          subtitle: "Ihre Projektbedürfnisse nicht klar definieren",
          content: "Einer der größten Fehler ist es, den Einstellungsprozess zu beginnen, ohne die Ziele und Anforderungen Ihres Projekts klar zu verstehen."
        },
        {
          subtitle: "Zu viel Fokus auf Ästhetik",
          content: "Während das Portfolio eines Designers visuell ansprechend aussehen mag, übersehen Sie nicht Funktionalität und User Experience."
        },
        {
          subtitle: "Relevante Erfahrung ignorieren",
          content: "Es ist leicht, von den allgemeinen Fähigkeiten eines Designers beeindruckt zu sein, aber relevante Erfahrung ist entscheidend."
        },
        {
          subtitle: "Kommunikationsfähigkeiten übersehen",
          content: "Produktdesigner arbeiten oft eng mit Entwicklern, Produktmanagern und Stakeholdern zusammen. Starke Kommunikationsfähigkeiten sind unerlässlich."
        }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Teilen Sie Ihre Anforderungen",
      description: "Erzählen Sie uns von der Rolle und dem Projekt, den erforderlichen Fähigkeiten, Ihrem Einstellungsbudget und dem gewünschten Standort Ihrer Freelance-Designer.",
      subtext: "Wir matchen Sie mit den richtigen Designern",
      image: "step-1.png"
    },
    {
      number: "02",
      title: "Beginnen Sie Interviews",
      description: "Wir verbinden Sie mit vorgeprüften Remote-Designern, die perfekt zu Ihren Anforderungen passen und bereit für Interviews sind.",
      subtext: "Interviewen Sie nur die besten Kandidaten",
      image: "step-2.png"
    },
    {
      number: "03",
      title: "Stellen Sie ein",
      description: "Wenn Sie bereit sind, stellen Sie einen Remote-Freelance-Designer ein, unterschreiben Sie eine NDA, und wir erledigen den Rest.",
      subtext: "Wir kümmern uns um den gesamten Papierkram",
      image: "step-3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <HireHero
        category="designers"
        count={2005}
        description="Ihre Vision verdient einen großartigen Produktdesigner, um sie zum Leben zu erwecken. Die richtige Passform alleine zu finden ist herausfordernd, aber Programmier-Anfang macht die Einstellung der besten Freelance- oder Vollzeit-Remote-Produktdesigner einfach. Sparen Sie Zeit, indem Sie sich direkt mit geprüften Produktdesignern verbinden, die bereit für Interviews sind."
      />

      {/* Talent Showcase */}
      <TalentShowcase
        heading="2.005 Remote-Produktdesigner und Experten verfügbar:"
        profiles={profiles}
        category="designers"
      />

      {/* Stats & Testimonials */}
      <StatsTestimonials
        stats={stats}
        testimonials={testimonials}
      />

      {/* Why Choose Arc - Reuse from home page */}
      <WhyChooseArc />

      {/* How It Works */}
      <HowItWorksSteps
        steps={steps}
        category="designers"
      />

      {/* Companies Testimonials */}
      <CompaniesTestimonials
        testimonials={companiesTestimonials}
      />

      {/* Dedicated Team Section */}
      <DedicatedTeamSection
        heading="Bauen Sie Ihr dediziertes Team von Produktdesignern auf"
        description="Arbeiten Sie nahtlos mit Ihrem Team zusammen mit den Projektmanagement-Tools, der Zeiterfassung und mehr von Programmier-Anfang."
        features={[
          { title: "Zeiterfassung", description: "Überwachen Sie Arbeitsstunden und Produktivität" },
          { title: "Projektmanagement", description: "Halten Sie Ihr Team organisiert und auf Kurs" },
          { title: "Sichere Zahlungen", description: "Einfache und sichere Zahlungsabwicklung" }
        ]}
      />

      {/* Hiring Guide */}
      <HiringGuideSection
        heading="Wie man Top-Produktdesigner einstellt"
        sections={hiringGuideSections}
      />

      {/* FAQs */}
      <FAQSection
        category="product designers"
      />

      {/* Final CTA */}
      <FinalCTA
        heading="Ihr zukünftiger Produktdesigner ist gleich um die Ecke!"
        subheading="Risikofrei starten."
        ctaText="Talente einstellen"
      />

      <Footer />
    </div>
  );
}

