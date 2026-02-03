import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';

export default function HireProductManagersPage() {
  const profiles = [
    {
      name: "Jennifer L.",
      location: "Canada (UTC-4)",
      badge: "Vetted product manager",
      bio: "Strategic product manager with 8+ years leading cross-functional teams. Expert in product strategy, roadmap planning, and agile methodologies. Successfully launched 15+ products from 0 to 1.",
      skills: ["Product Strategy", "Agile", "Scrum", "Data Analysis", "User Research", "Roadmapping", "Jira", "+10"],
      availability: "Full-time & Freelance",
      previousCompany: { name: "Spotify", logo: "Spotify.jpg" },
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
      quote: "Our Arc product manager transformed our product strategy and execution.",
      author: "David Park",
      title: "CEO",
      company: "ProductCo",
      avatar: ""
    },
    {
      quote: "Found an incredible technical PM who bridges the gap between eng and business.",
      author: "Rachel Green",
      title: "CTO",
      company: "TechVenture",
      avatar: ""
    },
    {
      quote: "The PM we hired helped us prioritize our roadmap and ship faster.",
      author: "Mark Wilson",
      title: "VP of Engineering",
      company: "FastShip",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Find and hire remote product managers by specialization",
      items: [
        { name: "Product Managers", icon: "pm-plain.svg", url: "/hire-product-managers" },
        { name: "Technical Product Managers", icon: "technical-pm-plain.svg", url: "/hire-product-managers/technical" },
        { name: "Product Owners", icon: "po-plain.svg", url: "/hire-product-managers/product-owners" },
        { name: "AI Product Managers", icon: "ai-pm-plain.svg", url: "/hire-product-managers/ai" },
        { name: "Data Product Managers", icon: "data-pm-plain.svg", url: "/hire-product-managers/data" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Request",
      description: "Describe the ideal product manager you're looking for.",
      subtext: "Tell us about the role, product needs, and hiring budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Receive vetted product manager profiles that match your needs.",
      subtext: "Select the product manager you want to interview.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Hire",
      description: "When ready, hire the product manager you prefer.",
      subtext: "Sign an NDA with your new product manager, and we'll handle all the paperwork.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "How to Hire a Product Manager", image: "resources/1.png", url: "/employer-blog/hire-product-manager/" },
    { title: "PM Interview Questions", image: "resources/2.png", url: "/employer-blog/pm-questions/" },
    { title: "Building a Remote Product Team", image: "resources/3.png", url: "/employer-blog/remote-product-team/" },
    { title: "Product Roadmap Best Practices", image: "resources/4.png", url: "/employer-blog/product-roadmap/" },
    { title: "Evaluating PM Candidates", image: "resources/5.png", url: "/employer-blog/evaluate-pms/" },
    { title: "Managing Remote PMs", image: "resources/6.png", url: "/employer-blog/manage-remote-pms/" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero 
        category="product-managers"
        count={5678}
        description="Arc has 5,678 vetted remote product managers ready to interview and hire. Find experienced product managers, product owners, technical PMs, and more to drive your product strategy and roadmap."
      />
      <TalentShowcase heading="5,678 Remote product managers available to hire:" profiles={profiles} category="product managers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top remote product managers are just a few clicks away" subheading="Arc offers pre-vetted product managers with deep experience across industries." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="product managers" />
      <FAQSection category="product managers" />
      <ResourcesSection heading="Resources for hiring product management experts" subheading="Learn more about how to hire remote product managers and build exceptional product teams!" articles={articles} />
      <Footer />
    </div>
  );
}

