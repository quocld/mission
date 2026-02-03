import Image from 'next/image';

export default function WhyChooseArc() {
  const features = [
    {
      id: 'vetted-talent',
      icon: '/images/03-why-choose/access_vetted_talent.webp',
      title: 'Access vetted talent',
      description: 'Meet ready to interview candidates who are fully vetted for domain expertise and English fluency.'
    },
    {
      id: 'matches-seconds',
      icon: '/images/03-why-choose/view_matches_in_second.webp',
      title: 'View matches in seconds',
      description: 'Stop reviewing 100s of resumes. View candidates instantly with HireAI.'
    },
    {
      id: 'global-hires',
      icon: '/images/03-why-choose/save_with_global_hires_v2.png',
      title: 'Save with global hires',
      description: 'Get access to 450,000 talent in 190 countries, saving up to 58% vs traditional hiring.'
    },
    {
      id: 'human-support',
      icon: '/images/03-why-choose/get_real_human_support.webp',
      title: 'Get real human support',
      description: 'Feel confident hiring remote talent with hands-on help from our team of expert global recruiters.'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[48px] font-bold text-gray-900 text-center mb-12">
          Why choose Arc
        </h2>

        {/* Features Grid - Max 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-6 border border-gray-200 rounded-sm p-4"
            >
              {/* Icon */}
              <div className="shrink-0">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

