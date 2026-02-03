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
      location: "United States (UTC-7)",
      badge: "Vetted",
      bio: "Accomplished Product Design leader with over 20 years of experience crafting user-centric solutions that drive substantial results. Successfully led groundbreaking GenAI projects at Pinterest, Twitter, and Walmart+, consistently delivering scalable products that boosted user engagement by up to 15% and improved conversion rates by 8%. Expertise in data-driven design, user research, and A/B testing, alongside a proven track record in growing design teams from a few members to over 50.",
      primarySkill: { name: "Product design", experience: "10 yrs" },
      skills: ["UI design", "Branding", "Visual design", "Figma", "Team collaboration", "User Testing", "+13"],
      availability: "Full-time & Freelance",
      previousCompany: { name: "Pinterest", logo: "Pinterest.jpg" },
      avatar: ""
    },
    {
      name: "Audrey W.",
      location: "United States (UTC+8)",
      badge: "Vetted",
      bio: "I'm a product designer with a background in cognitive science and human centered design fascinated by how we think and interact with the world around us. I enjoy breaking down complex problems and collaborating on design solutions. With 7+ years of experience, I've led products in large enterprises as well as early teams and am currently open to part time freelance work.",
      primarySkill: { name: "Product design", experience: "6 yrs" },
      skills: ["User Research", "Wireframing/prototyping", "Figma", "Design Systems", "Strategy", "Branding", "+3"],
      availability: "Full-time & Freelance",
      previousCompany: { name: "Salesforce", logo: "Salesforce.jpg" },
      avatar: ""
    },
    {
      name: "Vincent B.",
      location: "United States (UTC-4)",
      badge: "Vetted",
      bio: "Vincent Boutaud is a seasoned agile Product Owner, Project Manager, and technology specialist with 17+ years of experience driving innovation at the intersection of 3D visualization, Building Information Modeling, and software development. Brings executive-level expertise in product strategy, quality operations, and cross-functional leadership.",
      primarySkill: { name: "Product Management", experience: "17+ yrs" },
      skills: ["Salesforce", "Jira/confluence", "Figma", "UI design", "UX/UI Design", "Salesforce lightning", "+3"],
      availability: "Full-time & Freelance",
      previousCompany: { name: "Epic Games", logo: "Epic Games.jpg" },
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
      avatar: "/images/testimonials/moishe-groger.jpg"
    },
    {
      quote: "I've sourced former founders, senior engineers, and even CMOs in less than 72 hours.",
      author: "Chris Bakke",
      title: "Founder & CEO",
      company: "Laskie",
      avatar: "/images/testimonials/chris-bakke.jpg"
    },
    {
      quote: "Highly skilled and diverse pool of talent at an affordable cost!",
      author: "Kristen Hadjis",
      title: "Lead Recruiter",
      company: "Stem",
      avatar: "/images/testimonials/kristen-hadjis.jpg"
    }
  ];

  const companiesTestimonials = [
    {
      avatar: "/images/testimonials/sarah-thompson.png",
      quote: "Arc's designers transformed our product vision into reality. Their expertise in UX and attention to detail exceeded expectations.",
      author: "Sarah Thompson",
      title: "Head of Design",
      company: "Automattic"
    },
    {
      avatar: "/images/testimonials/michael-chen.png",
      quote: "Finding top-tier designers has never been easier. Arc's vetting process ensures we only interview the best.",
      author: "Michael Chen",
      title: "Product Director",
      company: "Spotify"
    },
    {
      avatar: "/images/testimonials/jennifer-martinez.png",
      quote: "We built our entire design team through Arc. The quality and speed of hiring has been game-changing for us.",
      author: "Jennifer Martinez",
      title: "VP of Product",
      company: "Udacity"
    }
  ];

  const hiringGuideSections = [
      {
        title: "What does a product designer do and why do you need one?",
        subsections: [
          {
            subtitle: "Overview",
            content: "A product designer helps create and develop both digital and physical products. They ensure the product is functional, easy to use, and visually appealing while meeting the needs of its users. Product designers focus on making the design user-friendly and attractive for products like websites, apps, or software. They use user experience (UX) and user interface (UI) skills to create layouts, menus, and interactive features that are simple and efficient. No matter the product type, product designers play a key role in a product's success."
          }
        ]
      },
      {
        title: "Types of product designers",
        subsections: [
          {
            subtitle: "UX designers",
            content: "UX designers focus on how users interact with a product, ensuring a smooth and enjoyable experience. They conduct user research, create wireframes, and test prototypes to understand user needs and behaviors."
          },
          {
            subtitle: "UI designers",
            content: "UI designers specialize in the visual aspects of a product, designing interfaces that are appealing and easy to navigate. They focus on buttons, icons, typography, and color schemes to create a cohesive look and feel."
          },
          {
            subtitle: "Interaction designers",
            content: "Interaction designers work on how users engage with digital products on a detailed level. They design the interactive elements, such as animations, transitions, and responses to user input."
          },
          {
            subtitle: "Visual designers",
            content: "Visual designers focus on the overall look and brand identity of digital products. They ensure that the design aligns with the company's visual identity while being functional."
          }
        ]
      },
      {
        title: "Key skills to look for in product designers",
        subsections: [
          {
            subtitle: "Technical skills",
            content: "UX/UI design: Product designers need to create user-friendly and visually appealing interfaces. Wireframing and prototyping: Must be skilled in tools like Figma, Adobe XD, or InVision. Basic coding: Knowledge of HTML, CSS, and JavaScript helps collaboration with developers. User research: Experience in interviews, surveys, and usability testing."
          },
          {
            subtitle: "Soft skills",
            content: "Communication: Ability to present ideas and work with teams effectively. Problem-solving: Identify issues and create solutions that satisfy users and business goals. Adaptability: Accept feedback and adapt designs when plans shift. Attention to detail: Ensure every visual and interactive element works together. Time management: Deliver work on time without sacrificing quality."
          }
        ]
      },
      {
        title: "How much does it cost to hire product designers?",
        subsections: [
          {
            subtitle: "Rate overview",
            content: "The cost of hiring a freelance product designer varies widely. Most freelance product designers charge between $25 to $200 per hour. For simpler tasks like wireframing or basic UI design, rates typically range from $25 to $80 per hour. More complex work, like 3D modeling, CAD design, or in-depth market research, can push rates up to $150 to $200 per hour."
          },
          {
            subtitle: "Factors that affect rates",
            content: "Experience level: Senior designers (5+ years) charge $100-$200/hr, junior designers (1-3 years) charge $25-$50/hr. Location: Designers from Eastern Europe or Asia may charge less than those in San Francisco or New York. Project complexity: More complex projects demand higher rates."
          }
        ]
      },
      {
        title: "Common mistakes to avoid when hiring product designers",
        subsections: [
          {
            subtitle: "Not defining your project needs clearly",
            content: "One of the biggest mistakes is starting the hiring process without clearly understanding your project's goals and requirements."
          },
          {
            subtitle: "Focusing too much on aesthetics",
            content: "While a designer's portfolio may look visually appealing, don't overlook functionality and user experience."
          },
          {
            subtitle: "Ignoring relevant experience",
            content: "It's easy to be impressed by a designer's overall skills, but relevant experience is key."
          },
          {
            subtitle: "Overlooking communication skills",
            content: "Product designers often work closely with developers, product managers, and stakeholders. Strong communication skills are essential."
          }
        ]
      }
    ];

  const steps = [
    {
      number: "01",
      title: "Share your requirements",
      description: "Tell us about the role and project, the skills required, your hiring budget, and desired location of your freelance designers.",
      subtext: "We'll match you with the right designers",
      image: "step-1.png"
    },
    {
      number: "02",
      title: "Start interviewing",
      description: "We'll connect you with pre-screened remote designers who perfectly match your requirements and are ready to be interviewed.",
      subtext: "Interview only the best candidates",
      image: "step-2.png"
    },
    {
      number: "03",
      title: "Make a hire",
      description: "When ready, hire a remote freelance designer, sign an NDA, and we'll take care of the rest.",
      subtext: "We handle all the paperwork",
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
        description="Your vision deserves a great product designer to bring it to life. Finding the right fit alone is challenging alone, but Arc makes hiring the best freelance or full-time remote product designers easy. Save time by connecting directly with vetted product designers ready to interview."
      />

      {/* Talent Showcase */}
      <TalentShowcase 
        heading="2,005 Remote product designers and experts available to hire:" 
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
        heading="Build your dedicated team of product designers"
        description="Work with your team seamlessly with Arc's project management tools, time tracking, and more."
        features={[
          { title: "Time tracking", description: "Monitor work hours and productivity" },
          { title: "Project management", description: "Keep your team organized and on track" },
          { title: "Secure payments", description: "Easy and secure payment processing" }
        ]}
      />

      {/* Hiring Guide */}
      <HiringGuideSection 
        heading="How to hire top product designers"
        sections={hiringGuideSections}
      />

      {/* FAQs */}
      <FAQSection 
        category="product designers"
      />

      {/* Final CTA */}
      <FinalCTA 
        heading="Your future product designer is just around the corner!"
        subheading="Risk-free to get started."
        ctaText="Hire talent"
      />

      <Footer />
    </div>
  );
}

