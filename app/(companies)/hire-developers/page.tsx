import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import WhyChooseArc from '@/app/components/WhyChooseArc';
import HireHero from '../components/HireHero';
import TalentShowcase from '../components/TalentShowcase';
import StatsTestimonials from '../components/StatsTestimonials';
import CategoriesGrid from '../components/CategoriesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import CompaniesTestimonials from '../components/CompaniesTestimonials';
import DedicatedTeamSection from '../components/DedicatedTeamSection';
import HiringGuideSection from '../components/HiringGuideSection';
import FAQSection from '../components/FAQSection';
import ResourcesSection from '../components/ResourcesSection';
import FinalCTA from '../components/FinalCTA';

export default function HireDevelopersPage() {
  // Sample data - in production, this would come from an API or CMS
  const profiles = [
    {
      name: "Aksel .",
      location: "United States (UTC-4)",
      badge: "Vetted developer",
      bio: "With over 15 years of all-rounded expertise in staff software engineering and architecture, I boast a proven track record in designing highly scalable compute-intensive workflows. My focus industries span fintech, e-commerce/retail, and private/public cloud data processing and management.",
      skills: ["AWS", "Python", "Java", "Cloud", "Google Cloud Platform", "SQL", "NoSQL", "+17"],
      availability: "Full-time & Freelance",
      previousCompany: {
        name: "Amazon",
        logo: "Amazon.jpg"
      },
      avatar: ""
    },
    {
      name: "Nathaniel H.",
      location: "United States (UTC-5)",
      badge: "Vetted developer",
      bio: "AI and software engineer with over 14 years of experience, specialized in building scalable, AI-driven applications. Proficient in Node.js, Python, MySQL/MSSQL, JavaScript frameworks, Linux, AWS, and Azure cloud. Skilled in MVC/Microservice architecture, Docker CI/CD, Agile methodologies, and test-driven development.",
      skills: ["Python", "AWS", "SQL", "JavaScript", "Ruby on Rails", "Node.js", "ETL", "+10"],
      availability: "Full-time & Freelance",
      previousCompany: {
        name: "Facebook",
        logo: "Facebook.jpg"
      },
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
      quote: "We've tried hiring from traditional platforms before, but the quality of developers at Arc is far more superior.",
      author: "Moishe Groger",
      title: "CEO",
      company: "Tentaroo",
      avatar: ""
    },
    {
      quote: "I've sourced former founders, senior engineers, and even CMOs in less than 72 hours.",
      author: "Chris Bakke",
      title: "Founder & CEO",
      company: "Laskie",
      avatar: ""
    },
    {
      quote: "Highly skilled and diverse pool of talent at an affordable cost!",
      author: "Kristen Hadjis",
      title: "Lead Recruiter",
      company: "Stem",
      avatar: ""
    }
  ];

  const categorySections = [
    {
      id: "roles",
      title: "Find and hire remote developers by roles",
      items: [
        { name: "AI Developers", icon: "ai-plain.svg", url: "/hire-developers/ai" },
        { name: "Data Scientists", icon: "data-science-plain.svg", url: "/hire-developers/data-science" },
        { name: "Machine Learning Experts", icon: "machine-learning-plain.svg", url: "/hire-developers/machine-learning" },
        { name: "Software Developers", icon: "software-plain.svg", url: "/hire-developers/software-development" },
        { name: "Front-end Developers", icon: "frontend-plain.svg", url: "/hire-developers/front-end" },
        { name: "Back-End Developers", icon: "backend-plain.svg", url: "/hire-developers/back-end" },
        { name: "Full-Stack Developers", icon: "full-stack-plain.svg", url: "/hire-developers/full-stack" },
        { name: "DevOps Engineers", icon: "devops-plain.svg", url: "/hire-developers/devops" },
        { name: "Mobile App Developers", icon: "mobile-development-plain.svg", url: "/hire-developers/mobile-app-development" },
        { name: "Web Developers", icon: "web-plain.svg", url: "/hire-developers/web-development" }
      ]
    },
    {
      id: "skills",
      title: "Find and hire remote engineers by skills",
      items: [
        { name: "JavaScript Developers", icon: "javascript-plain.svg", url: "/hire-developers/javascript" },
        { name: "TypeScript Developers", icon: "typescript-plain.svg", url: "/hire-developers/typescript" },
        { name: "React Developers", icon: "reactjs-plain.svg", url: "/hire-developers/reactjs" },
        { name: "Node.js Developers", icon: "nodejs-plain.svg", url: "/hire-developers/nodejs" },
        { name: "Python Developers", icon: "python-plain.svg", url: "/hire-developers/python" },
        { name: "Java Developers", icon: "java-plain.svg", url: "/hire-developers/java" },
        { name: "PHP Developers", icon: "php-plain.svg", url: "/hire-developers/php" },
        { name: "Ruby Developers", icon: "ruby-plain.svg", url: "/hire-developers/ruby" },
        { name: "AWS Developers", icon: "aws-plain.svg", url: "/hire-developers/aws" },
        { name: "MongoDB Developers", icon: "mongodb-plain.svg", url: "/hire-developers/mongodb" }
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Request",
      description: "Describe the ideal full-time & freelance developer you're looking for.",
      subtext: "Tell us about the role, technical needs, and hiring budget.",
      image: "request.png"
    },
    {
      number: "02",
      title: "Interview",
      description: "Receive vetted candidate profiles that match your engineering needs.",
      subtext: "Select the full-time & freelance engineer you want to interview.",
      image: "interview.png"
    },
    {
      number: "03",
      title: "Hire",
      description: "When ready, hire the full-time & freelance developer you prefer.",
      subtext: "Sign an NDA with your new full-time & freelance engineer, and we'll handle all the other paperwork.",
      image: "hire.png"
    }
  ];

  const articles = [
    {
      title: "Is Your Developer Ready for Remote Work?",
      image: "resources/1.png",
      url: "/employer-blog/remote-ready-interview-questions/"
    },
    {
      title: "Remote Developer Interview Questions to Ask Potential Freelancers",
      image: "resources/2.png",
      url: "/employer-blog/software-engineer-interview-questions/"
    },
    {
      title: "Finding Freelance Developers: 21+ Expert Tips & Strategies",
      image: "resources/3.png",
      url: "/employer-blog/how-to-find-developers/"
    },
    {
      title: "How to Conduct a Remote Technical Interview Successfully",
      image: "resources/4.png",
      url: "/employer-blog/how-to-conduct-a-remote-technical-interview/"
    },
    {
      title: "How to Build & Maintain a Remote Engineering Team",
      image: "resources/5.png",
      url: "/employer-blog/distributed-software-engineering-team/"
    },
    {
      title: "How to Manage Remote Development Teams",
      image: "resources/6.png",
      url: "/employer-blog/how-to-manage-developers-remote-team/"
    }
  ];

  const companiesTestimonials = [
    {
      quote: "We've tried hiring from traditional platforms before, but the quality of developers at Arc is far more superior.",
      author: "Moishe Groger",
      title: "CEO",
      company: "Tentaroo",
      avatar: ""
    },
    {
      quote: "I've sourced former founders, senior engineers, and even CMOs in less than 72 hours.",
      author: "Chris Bakke",
      title: "Founder & CEO",
      company: "Laskie",
      avatar: ""
    }
  ];

  const dedicatedTeamFeatures = [
    {
      title: "Pre-vetted developers",
      description: "Every developer is tested on technical skills and communication."
    },
    {
      title: "Fast matching",
      description: "Get matched with qualified developers in 72 hours or less."
    },
    {
      title: "Quality guarantee",
      description: "Risk-free trial period. Only pay if you're 100% satisfied."
    }
  ];


  const guideSections = [
    {
      title: "Why Should You Hire a Freelance Developer?",
      subsections: [
        {
          subtitle: "Affordability",
          content: "Hiring freelance developers can be more cost-effective than full-time employees, as you only pay for the work done without additional overhead costs like benefits, office space, and equipment."
        },
        {
          subtitle: "Global market & access to talent",
          content: "The freelance market gives you access to a global pool of talented developers with diverse skill sets and experiences."
        },
        {
          subtitle: "Specialization",
          content: "Freelancers often specialize in specific technologies or domains, allowing you to find experts for your particular needs."
        },
        {
          subtitle: "Flexibility",
          content: "Scale your team up or down based on project requirements without long-term commitments."
        }
      ]
    },
    {
      title: "When Should You Hire a Freelance Developer?",
      subsections: [
        {
          subtitle: "When you're short on time",
          content: "Freelancers can start working on your project immediately, helping you meet tight deadlines."
        },
        {
          subtitle: "When you have limited skillsets",
          content: "If your team lacks specific technical expertise, freelancers can fill those gaps quickly."
        },
        {
          subtitle: "When you're on a tight budget",
          content: "Freelance developers can provide quality work at competitive rates without the overhead of full-time employees."
        }
      ]
    },
    {
      title: "How to Find a Top Freelance Developer",
      subsections: [
        {
          subtitle: "Think about your software developer job description",
          content: "Clearly define the skills, experience level, and project requirements before starting your search.",
          questions: [
            "What is your project about? What are some of the required skills?",
            "Do you have a geographical preference?",
            "What is your budget range?",
            "Do you need someone for a short-term or long-term project?"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <HireHero 
        category="developers"
        count={90921}
        description="Arc has 90921 full-time and freelance developers, engineers, programmers, coders, contractors, and tech experts ready to interview and available to hire right now. Our global network of developers can help with temporary staffing or scaling your engineering team. Simply tell us what you need and we'll help you hire the developers who are the best fit."
      />
      
      <TalentShowcase 
        heading="90,921 Remote developers and experts available to hire:"
        profiles={profiles}
        category="developers"
      />
      
      <StatsTestimonials 
        stats={stats}
        testimonials={testimonials}
      />
      
      <CategoriesGrid 
        heading="Top remote developers are just a few clicks away"
        subheading="Arc offers pre-vetted full-time and freelance developers skilled in every programming language, framework, and technology. Look through our popular remote engineer specializations below."
        sections={categorySections}
      />
      
      <HowItWorksSteps 
        steps={steps}
        category="developers"
      />
      
      <CompaniesTestimonials testimonials={companiesTestimonials} />
      
      <DedicatedTeamSection 
        heading="Build your dedicated team of remote developers"
        description="Arc helps you build your team with our global network of software developers, available for freelance contracts or full-time remote positions."
        features={dedicatedTeamFeatures}
      />
      
      <WhyChooseArc />
      
      <HiringGuideSection 
        heading="How to hire top freelance developers"
        sections={guideSections}
      />
      
      <FAQSection category="developers" />
      
      <ResourcesSection 
        heading="Resources for hiring engineering experts"
        subheading="Learn more about how to hire remote developers, important interview questions to ask freelance developers, and much more!"
        articles={articles}
      />
      
      <FinalCTA 
        heading="Your future remote developer is just around the corner!"
        subheading="Risk-free to get started."
        ctaText="Hire talent"
      />
      
      <Footer />
    </div>
  );
}

