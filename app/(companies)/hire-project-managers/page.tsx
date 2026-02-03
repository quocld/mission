import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';

export default function HireProjectManagersPage() {
  const profiles = [
    {
      name: "David K.",
      location: "Australia (UTC+10)",
      badge: "Vetted project manager",
      bio: "Certified PMP with 12+ years managing complex technical projects. Expert in agile and waterfall methodologies, risk management, and stakeholder communication. Delivered 50+ projects on time and budget.",
      skills: ["PMP", "Agile", "Scrum", "Jira", "Risk Management", "Stakeholder Management", "Waterfall", "+9"],
      availability: "Full-time & Freelance",
      previousCompany: { name: "Microsoft", logo: "Microsoft.jpg" },
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
      quote: "Our Arc project manager kept our complex project on track and delivered on time.",
      author: "Susan Miller",
      title: "Director of Operations",
      company: "EnterpriseInc",
      avatar: ""
    },
    {
      quote: "Found a certified PMP who immediately understood our project needs.",
      author: "John Davis",
      title: "VP of Engineering",
      company: "TechCorp",
      avatar: ""
    },
    {
      quote: "The scrum master we hired transformed our agile processes.",
      author: "Maria Garcia",
      title: "CTO",
      company: "AgileTeam",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Find and hire remote project managers by specialization",
      items: [
        { name: "Project Managers", icon: "pm-plain.svg", url: "/hire-project-managers" },
        { name: "Scrum Masters", icon: "scrum-plain.svg", url: "/hire-project-managers/scrum-masters" },
        { name: "Program Managers", icon: "program-plain.svg", url: "/hire-project-managers/program-managers" },
        { name: "Agile Coaches", icon: "agile-plain.svg", url: "/hire-project-managers/agile-coaches" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Request",
      description: "Describe the ideal project manager you're looking for.",
      subtext: "Tell us about the role, project needs, and hiring budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Receive vetted project manager profiles that match your needs.",
      subtext: "Select the project manager you want to interview.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Hire",
      description: "When ready, hire the project manager you prefer.",
      subtext: "Sign an NDA with your new project manager, and we'll handle all the paperwork.",
      image: "hire.png"
    }
  ];

  const articles = [
    { title: "How to Hire a Project Manager", image: "resources/1.png", url: "/employer-blog/hire-project-manager/" },
    { title: "PM Interview Questions", image: "resources/2.png", url: "/employer-blog/pm-interview-questions/" },
    { title: "Building a Remote Project Team", image: "resources/3.png", url: "/employer-blog/remote-project-team/" },
    { title: "Agile vs Waterfall Methodology", image: "resources/4.png", url: "/employer-blog/agile-waterfall/" },
    { title: "Evaluating PM Candidates", image: "resources/5.png", url: "/employer-blog/evaluate-project-managers/" },
    { title: "Managing Remote Projects", image: "resources/6.png", url: "/employer-blog/manage-remote-projects/" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HireHero 
        category="project-managers"
        count={6789}
        description="Arc has 6,789 vetted remote project managers ready to interview and hire. Find experienced project managers, scrum masters, program managers, and more to lead your projects to success."
      />
      <TalentShowcase heading="6,789 Remote project managers available to hire:" profiles={profiles} category="project managers" />
      <StatsTestimonials stats={stats} testimonials={testimonials} />
      <CategoriesGrid heading="Top remote project managers are just a few clicks away" subheading="Arc offers pre-vetted project managers with proven track records." sections={categorySections} />
      <HowItWorksSteps steps={steps} category="project managers" />
      <FAQSection category="project managers" />
      <ResourcesSection heading="Resources for hiring project management experts" subheading="Learn more about how to hire remote project managers and deliver projects successfully!" articles={articles} />
      <Footer />
    </div>
  );
}

