import Image from 'next/image';

interface HireHeroProps {
  category: 'developers' | 'designers' | 'marketers' | 'product-managers' | 'project-managers' | 'assistants';
  count: number;
  description: string;
}

export default function HireHero({ category, count, description }: HireHeroProps) {
  const categoryNames: Record<string, string> = {
    'developers': 'Remote-Entwickler',
    'designers': 'Remote-Designer',
    'marketers': 'Remote-Marketer',
    'product-managers': 'Produktmanager',
    'project-managers': 'Projektmanager',
    'assistants': 'Remote-Assistenten'
  };

  const badges = ['Freelance-Vertragnehmer', 'Vollzeitstellen', 'Globale Teams'];

  const companies = [
    { name: 'Spotify', logo: '/images/logos/spotify.svg', height: 32 },
    { name: 'Automattic', logo: '/images/logos/automattic.svg', height: 24 },
    { name: 'Splice', logo: '/images/logos/splice.svg', height: 28 },
    { name: 'hims', logo: '/images/logos/hims.svg', height: 24 },
    { name: 'hopper', logo: '/images/logos/hopper.svg', height: 28 },
    { name: 'Udacity', logo: '/images/logos/udacity.svg', height: 32 },
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Hero Content */}
        <div className="max-w-3xl mb-8">
          {/* Heading */}
          <h1 className="text-[56px] font-bold leading-tight mb-6">
            <span className="text-white">Stellen Sie die </span>
            <a
              href="#"
              className="text-[rgb(0,159,255)] hover:underline"
            >
              Top 2%
            </a>
            <span className="text-white"> der</span>
            <br />
            <span className="text-white">{categoryNames[category]}</span>
            <span className="text-white"> ein</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/85 leading-relaxed mb-8">
            {description}
          </p>

          {/* Badges */}
          <div className="flex items-center gap-6 mb-8">
            {badges.map((badge) => (
              <div
                key={badge}
                className="px-4 py-2 bg-white/10 rounded-full text-sm text-white"
              >
                {badge}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full max-w-[400px] h-14 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(23,162,69,0.3)] transition-all duration-200">
            Talente einstellen
          </button>

          {/* Badge */}
          <div className="flex items-center gap-2 mt-4 max-w-[400px]">
            <span className="text-base">🔥</span>
            <span className="text-sm font-medium text-white">$0 bis zur Einstellung</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center gap-8 pt-8 border-t border-white/10">
          <span className="text-sm text-white/60">Vertrauen von</span>

          <div className="flex items-center gap-10 flex-wrap">
            {companies.map((company) => (
              <div
                key={company.name}
                className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                style={{ height: `${company.height}px` }}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.height * 4}
                  height={company.height}
                  className="h-full w-auto brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

