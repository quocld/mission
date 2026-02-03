import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';

export default function HireDesignersPage() {
  const profiles = [
    {
      name: "Sarah M.",
      location: "United States (UTC-5)",
      badge: "Vetted designer",
      bio: "Award-winning product designer with 12+ years creating user-centered digital experiences. Specialized in UI/UX design, design systems, and brand identity. Led design teams at Fortune 500 companies and startups.",
      skills: ["Figma", "UI/UX", "Product Design", "Design Systems", "Prototyping", "Branding", "Sketch", "+12"],
      availability: "Full-time & Freelance",
      previousCompany: { name: "Apple", logo: "Apple.jpg" },
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
      quote: "Arc designers are incredibly talented and professional. They helped us completely redesign our product.",
      author: "Emily Chen",
      title: "Head of Product",
      company: "TechCorp",
      avatar: ""
    },
    {
      quote: "The quality of design work from Arc designers exceeded our expectations.",
      author: "James Wilson",
      title: "CEO",
      company: "DesignCo",
      avatar: ""
    },
    {
      quote: "Found an amazing UI/UX designer through Arc in just 3 days!",
      author: "Sarah Kim",
      title: "Product Manager",
      company: "StartupXYZ",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Find and hire remote designers by roles",
      items: [
        { name: "UI Designers", icon: "ui-plain.svg", url: "/hire-designers/ui-designers" },
        { name: "UX Designers", icon: "ux-plain.svg", url: "/hire-designers/ux-designers" },
        { name: "Product Designers", icon: "product-plain.svg", url: "/hire-designers" },
        { name: "Web Designers", icon: "web-plain.svg", url: "/hire-designers/web-designers" },
        { name: "Graphic Designers", icon: "graphic-plain.svg", url: "/hire-designers/graphic-designers" },
        { name: "Brand Designers", icon: "brand-plain.svg", url: "/hire-designers/brand-designers" },
        { name: "Mobile App Designers", icon: "mobile-plain.svg", url: "/hire-designers/mobile-app-designers" },
        { name: "Visual Designers", icon: "visual-plain.svg", url: "/hire-designers/visual-designers" }
      ]
    },
    {
      id: "skills",
      title: "Find and hire remote designers by skills",
      items: [
        { name: "Figma Designers", icon: "figma-plain.svg", url: "/hire-designers/figma-designers" },
        { name: "Sketch Designers", icon: "sketch-plain.svg", url: "/hire-designers/sketch-designers" },
        { name: "Adobe XD Designers", icon: "xd-plain.svg", url: "/hire-designers/adobe-xd" },
        { name: "Photoshop Experts", icon: "photoshop-plain.svg", url: "/hire-designers/photoshop" },
        { name: "Illustrator Experts", icon: "illustrator-plain.svg", url: "/hire-designers/illustrator" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Request",
      description: "Describe the ideal designer you're looking for.",
      subtext: "Tell us about the role, design needs, and hiring budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Receive vetted designer profiles that match your needs.",
      subtext: "Select the designer you want to interview.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Hire",
      description: "When ready, hire the designer you prefer.",
      subtext: "Sign an NDA with your new designer, and we'll handle all the paperwork.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "How to Hire the Perfect UX Designer", image: "resources/1.png", url: "/employer-blog/hire-ux-designer/" },
    { title: "UI Designer Interview Questions", image: "resources/2.png", url: "/employer-blog/ui-designer-questions/" },
    { title: "Building a Remote Design Team", image: "resources/3.png", url: "/employer-blog/remote-design-team/" },
    { title: "Design System Best Practices", image: "resources/4.png", url: "/employer-blog/design-systems/" },
    { title: "How to Evaluate Designer Portfolios", image: "resources/5.png", url: "/employer-blog/designer-portfolios/" },
    { title: "Managing Remote Designers", image: "resources/6.png", url: "/employer-blog/manage-remote-designers/" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero 
        category="designers"
        count={12453}
        description="Arc has 12,453 vetted remote designers ready to interview and hire. Browse profiles of world-class product designers, UI/UX designers, web designers, graphic designers, and more. Hire freelance designers or build full-time design teams."
      />
      <TalentShowcase heading="12,453 Remote designers available to hire:" profiles={profiles} category="designers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top remote designers are just a few clicks away" subheading="Arc offers pre-vetted designers skilled in every design tool and methodology." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="designers" />
      <FAQSection category="designers" />
      <ResourcesSection heading="Resources for hiring design experts" subheading="Learn more about how to hire remote designers and build exceptional design teams!" articles={articles} />
      <Footer />
    </div>
  );
}

