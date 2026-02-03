import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';

export default function HireAssistantsPage() {
  const profiles = [
    {
      name: "Maria R.",
      location: "Philippines (UTC+8)",
      badge: "Vetted assistant",
      bio: "Highly organized executive assistant with 7+ years supporting C-level executives. Expert in calendar management, travel coordination, email management, and project coordination. Excellent communication skills and attention to detail.",
      skills: ["Executive Support", "Calendar Management", "Travel Planning", "Email Management", "Data Entry", "Research", "+6"],
      availability: "Full-time & Freelance",
      previousCompany: { name: "Salesforce", logo: "Salesforce.jpg" },
      avatar: ""
    }
  ];

  const stats = [
    { prefix: "Up to", value: "75%", label: "faster to hire" },
    { prefix: "Up to", value: "58%", label: "cost savings" },
    { value: "800+", label: "hires made" }
  ];

  const testimonials = [
    {
      quote: "Our virtual assistant from Arc has been a game-changer for our productivity.",
      author: "Robert Johnson",
      title: "CEO",
      company: "StartupCo",
      avatar: ""
    },
    {
      quote: "Found an exceptional executive assistant who handles everything flawlessly.",
      author: "Amanda Smith",
      title: "Founder",
      company: "GrowthVentures",
      avatar: ""
    },
    {
      quote: "The assistant we hired is professional, efficient, and incredibly organized.",
      author: "Chris Lee",
      title: "COO",
      company: "BusinessInc",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Find and hire remote assistants by specialization",
      items: [
        { name: "Virtual Assistants", icon: "va-plain.svg", url: "/hire-assistants/virtual-assistants" },
        { name: "Executive Assistants", icon: "ea-plain.svg", url: "/hire-assistants/executive-assistants" },
        { name: "Administrative Assistants", icon: "admin-plain.svg", url: "/hire-assistants/administrative-assistants" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Request",
      description: "Describe the ideal assistant you're looking for.",
      subtext: "Tell us about the role, support needs, and hiring budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Receive vetted assistant profiles that match your needs.",
      subtext: "Select the assistant you want to interview.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Hire",
      description: "When ready, hire the assistant you prefer.",
      subtext: "Sign an NDA with your new assistant, and we'll handle all the paperwork.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "How to Hire a Virtual Assistant", image: "resources/1.png", url: "/employer-blog/hire-virtual-assistant/" },
    { title: "VA Interview Questions", image: "resources/2.png", url: "/employer-blog/va-questions/" },
    { title: "Working with Remote Assistants", image: "resources/3.png", url: "/employer-blog/remote-assistants/" },
    { title: "Delegating Tasks Effectively", image: "resources/4.png", url: "/employer-blog/delegate-tasks/" },
    { title: "Evaluating Assistant Candidates", image: "resources/5.png", url: "/employer-blog/evaluate-assistants/" },
    { title: "Managing Virtual Assistants", image: "resources/6.png", url: "/employer-blog/manage-virtual-assistants/" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero 
        category="assistants"
        count={4532}
        description="Arc has 4,532 vetted remote assistants ready to interview and hire. Find virtual assistants, executive assistants, administrative assistants, and more to support your business operations."
      />
      <TalentShowcase heading="4,532 Remote assistants available to hire:" profiles={profiles} category="assistants" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top remote assistants are just a few clicks away" subheading="Arc offers pre-vetted assistants ready to support your business needs." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="assistants" />
      <FAQSection category="assistants" />
      <ResourcesSection heading="Resources for hiring remote assistants" subheading="Learn more about how to hire remote assistants and maximize productivity!" articles={articles} />
      <Footer />
    </div>
  );
}

