import Image from 'next/image';

export default function BestFitSection() {
  const offerings = [
    {
      id: 1,
      title: 'Freelance contracts',
      icon: '/images/04-best-fit/freelance-icon.svg',
      features: [
        'Top 2% of talent, fully vetted',
        'Hire in 72 hours',
        'Pay hourly'
      ]
    },
    {
      id: 2,
      title: 'Full-time hires',
      icon: '/images/04-best-fit/fulltime-icon.svg',
      features: [
        'Vetted and ready to interview',
        'Hire in 14 days',
        'Pay per hire'
      ]
    },
    {
      id: 3,
      title: 'Global teams',
      icon: '/images/04-best-fit/global-icon.svg',
      features: [
        'Scale globally with confidence',
        'Dedicated recruiters for support',
        'LATAM and APAC market entry'
      ]
    }
  ];

  return (
    <section className="bg-white h-[526px] flex items-center">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[48px] font-bold text-gray-900 text-center mb-12">
          Find the best fit for any remote role
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering) => (
            <div 
              key={offering.id}
              className="bg-gray-50 rounded-lg p-8 h-[244px] flex flex-col"
            >
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={offering.icon}
                  alt={offering.title}
                  width={49}
                  height={43}
                  className="w-[49px] h-[43px]"
                />
              </div>

              {/* Title */}
              <h3 className="text-[28px] font-bold text-gray-900 mb-4">
                {offering.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-3">
                {offering.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Image
                      src="/images/04-best-fit/checkmark.svg"
                      alt="checkmark"
                      width={24}
                      height={24}
                      className="w-6 h-6 shrink-0 mt-0.5"
                    />
                    <span className="text-[18px] text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

