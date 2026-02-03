import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';

export default function HireMarketersPage() {
  const profiles = [
    {
      name: "Michael T.",
      location: "United Kingdom (UTC+0)",
      badge: "Vetted marketer",
      bio: "Data-driven digital marketing strategist with 10+ years experience in B2B and B2C growth. Expert in SEO, content marketing, paid acquisition, and marketing automation. Scaled startups from $0 to $10M ARR.",
      skills: ["SEO", "Content Marketing", "Google Ads", "Analytics", "Growth Marketing", "Email Marketing", "HubSpot", "+8"],
      availability: "Full-time & Freelance",
      previousCompany: { name: "HubSpot", logo: "HubSpot.jpg" },
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
      quote: "Our Arc marketer helped us triple our organic traffic in 6 months.",
      author: "Alex Rodriguez",
      title: "VP of Marketing",
      company: "GrowthCo",
      avatar: ""
    },
    {
      quote: "Found an exceptional growth marketer who understood our business immediately.",
      author: "Lisa Chen",
      title: "Founder",
      company: "StartupHub",
      avatar: ""
    },
    {
      quote: "The SEO expert we hired through Arc delivered incredible results.",
      author: "Tom Anderson",
      title: "CMO",
      company: "TechScale",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Find and hire remote marketers by roles",
      items: [
        { name: "Digital Marketers", icon: "marketing-plain.svg", url: "/hire-marketers" },
        { name: "SEO Experts", icon: "seo-plain.svg", url: "/hire-marketers/seo-experts" },
        { name: "Content Writers", icon: "content-plain.svg", url: "/hire-marketers/content-writers" },
        { name: "Growth Marketers", icon: "growth-plain.svg", url: "/hire-marketers/growth-marketers" },
        { name: "Social Media Marketers", icon: "social-plain.svg", url: "/hire-marketers/social-media-marketers" },
        { name: "Email Marketers", icon: "email-plain.svg", url: "/hire-marketers/email-marketers" },
        { name: "PPC Specialists", icon: "ppc-plain.svg", url: "/hire-marketers/ppc-specialists" },
        { name: "Fractional CMOs", icon: "cmo-plain.svg", url: "/hire-marketers/fractional-cmos" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Request",
      description: "Describe the ideal marketer you're looking for.",
      subtext: "Tell us about the role, marketing needs, and hiring budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Receive vetted marketer profiles that match your needs.",
      subtext: "Select the marketer you want to interview.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Hire",
      description: "When ready, hire the marketer you prefer.",
      subtext: "Sign an NDA with your new marketer, and we'll handle all the paperwork.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "How to Hire a Growth Marketer", image: "resources/1.png", url: "/employer-blog/hire-growth-marketer/" },
    { title: "SEO Specialist Interview Questions", image: "resources/2.png", url: "/employer-blog/seo-questions/" },
    { title: "Building a Remote Marketing Team", image: "resources/3.png", url: "/employer-blog/remote-marketing-team/" },
    { title: "Content Marketing Strategy Guide", image: "resources/4.png", url: "/employer-blog/content-strategy/" },
    { title: "Evaluating Marketing Candidates", image: "resources/5.png", url: "/employer-blog/evaluate-marketers/" },
    { title: "Managing Remote Marketers", image: "resources/6.png", url: "/employer-blog/manage-remote-marketers/" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero 
        category="marketers"
        count={8234}
        description="Arc has 8,234 vetted remote marketers ready to interview and hire. Find digital marketers, content marketers, SEO experts, growth marketers, social media specialists, and more. Hire freelance marketers or build full-time marketing teams."
      />
      <TalentShowcase heading="8,234 Remote marketers available to hire:" profiles={profiles} category="marketers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top remote marketers are just a few clicks away" subheading="Arc offers pre-vetted marketers skilled in every marketing channel and strategy." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="marketers" />
      <FAQSection category="marketers" />
      <ResourcesSection heading="Resources for hiring marketing experts" subheading="Learn more about how to hire remote marketers and build exceptional marketing teams!" articles={articles} />
      <Footer />
    </div>
  );
}

