export default function Footer() {
  const brands = [
    {
      name: 'Arc',
      description: 'Helping employers find talent for remote jobs',
      url: 'https://arc.dev/'
    },
    {
      name: 'Codementor',
      description: 'Find a mentor to help you in real time',
      url: 'https://www.codementor.io/'
    }
  ];

  const topTalent = {
    title: 'TOP TALENT',
    links: [
      { name: 'Software Developers', url: 'https://arc.dev/hire-developers/software-development' },
      { name: 'Web Developers', url: 'https://arc.dev/hire-developers/web-development' },
      { name: 'Mobile App Developers', url: 'https://arc.dev/hire-developers/mobile-app-development' },
      { name: 'Front-End Developers', url: 'https://arc.dev/hire-developers/front-end' },
      { name: 'Back-End Developers', url: 'https://arc.dev/hire-developers/back-end' },
      { name: 'Full-Stack Developers', url: 'https://arc.dev/hire-developers/full-stack' },
      { name: 'DevOps Developers', url: 'https://arc.dev/hire-developers/devops' },
      { name: 'iOS Developers', url: 'https://arc.dev/hire-developers/ios' },
      { name: 'AI Developers', url: 'https://arc.dev/hire-developers/ai' },
      { name: 'PHP Developers', url: 'https://arc.dev/hire-developers/php' },
      { name: 'Python Developers', url: 'https://arc.dev/hire-developers/python' },
      { name: 'React Developers', url: 'https://arc.dev/hire-developers/reactjs' },
      { name: 'Angular Developers', url: 'https://arc.dev/hire-developers/angular' },
      { name: 'Node.js Developers', url: 'https://arc.dev/hire-developers/nodejs' },
      { name: 'Product Designers', url: 'https://arc.dev/hire-designers' },
      { name: 'Web Designers', url: 'https://arc.dev/hire-designers/web-designers' },
      { name: 'UI Designers', url: 'https://arc.dev/hire-designers/ui-designers' },
      { name: 'UX Designers', url: 'https://arc.dev/hire-designers/ux-designers' },
      { name: 'Mobile App Designers', url: 'https://arc.dev/hire-designers/mobile-app-designers' },
      { name: 'Graphic Designers', url: 'https://arc.dev/hire-designers/graphic-designers' },
      { name: 'Brand Designers', url: 'https://arc.dev/hire-designers/brand-designers' },
      { name: 'Digital Marketers', url: 'https://arc.dev/hire-marketers' },
      { name: 'SEO Experts', url: 'https://arc.dev/hire-marketers/seo-experts' },
      { name: 'Content Writers', url: 'https://arc.dev/hire-marketers/content-writers' },
      { name: 'Growth Marketers', url: 'https://arc.dev/hire-marketers/growth-marketers' },
      { name: 'Fractional CMOs', url: 'https://arc.dev/hire-marketers/fractional-cmos' },
      { name: 'Product Managers', url: 'https://arc.dev/hire-product-managers' },
      { name: 'Project Managers', url: 'https://arc.dev/hire-project-managers' },
      { name: 'Program Managers', url: 'https://arc.dev/hire-project-managers/program-managers' },
      { name: 'Virtual Assistants', url: 'https://arc.dev/hire-assistants/virtual-assistants' }
    ]
  };

  const linksColumn = {
    title: 'LINKS',
    links: [
      { name: 'Remote Jobs', url: 'https://arc.dev/remote-jobs' },
      { name: 'Remote Developer Jobs', url: 'https://arc.dev/remote-jobs?jobRoles=engineering' },
      { name: 'Remote Design Jobs', url: 'https://arc.dev/remote-jobs?jobRoles=design' },
      { name: 'Remote Marketing Jobs', url: 'https://arc.dev/remote-jobs?jobRoles=marketing' },
      { name: 'Job Description Templates', url: 'https://arc.dev/job-descriptions' },
      { name: 'Development Services', url: 'https://arc.dev/development-services' },
      { name: 'Employer Blog', url: 'https://arc.dev/employer-blog' },
      { name: 'Talent Blog', url: 'https://arc.dev/talent-blog' },
      { name: 'Freelance Developer Rates', url: 'https://arc.dev/freelance-developer-rates' },
      { name: 'Remote Developer Salaries', url: 'https://arc.dev/salaries' },
      { name: 'About Us', url: 'https://arc.dev/about-us' },
      { name: 'Pricing', url: 'https://arc.dev/pricing' },
      { name: 'FAQ', url: 'https://arc.dev/faq' },
      { name: 'Arc Newsletter', url: 'https://arc.dev/w/arc-newsletter' },
      { name: 'Partner with Arc', url: 'https://arc.dev/g/partnerships' }
    ]
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brands Column */}
          <div>
            <h3 className="text-xs font-bold text-white/60 mb-6 uppercase tracking-wider">
              BRANDS
            </h3>
            <div className="space-y-6">
              {brands.map((brand) => (
                <a 
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="text-base font-semibold text-white group-hover:text-[rgb(0,159,255)] transition-colors">
                    {brand.name}
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    {brand.description}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Top Talent Column */}
          <div>
            <h3 className="text-xs font-bold text-white/60 mb-6 uppercase tracking-wider">
              {topTalent.title}
            </h3>
            <div className="space-y-3">
              {topTalent.links.slice(0, 15).map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  className="block text-sm text-white/80 hover:text-[rgb(0,159,255)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Top Talent Column (continued) */}
          <div>
            <h3 className="text-xs font-bold text-white/60 mb-6 uppercase tracking-wider opacity-0">
              {topTalent.title}
            </h3>
            <div className="space-y-3">
              {topTalent.links.slice(15).map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  className="block text-sm text-white/80 hover:text-[rgb(0,159,255)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xs font-bold text-white/60 mb-6 uppercase tracking-wider">
              {linksColumn.title}
            </h3>
            <div className="space-y-3">
              {linksColumn.links.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  className="block text-sm text-white/80 hover:text-[rgb(0,159,255)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright and Legal Links */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-white/60">
              © Copyright 2026 Arc
            </span>
            <a 
              href="https://arc.dev/cookies"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
            <a 
              href="https://arc.dev/privacy"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="https://arc.dev/terms"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/company/arcdotdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/arcdotdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/c/Arcdotdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/arcdotdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

