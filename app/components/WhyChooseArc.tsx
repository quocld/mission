import Image from 'next/image';

export default function WhyChooseArc() {
  const features = [
    {
      id: 'vetted-talent',
      icon: '/images/03-why-choose/access_vetted_talent.webp',
      title: 'Zugang zu geprüften Talenten',
      description: 'Treffen Sie interviewbereite Kandidaten, die vollständig auf Fachwissen und Englischkenntnisse geprüft sind.'
    },
    {
      id: 'matches-seconds',
      icon: '/images/03-why-choose/view_matches_in_second.webp',
      title: 'Matches in Sekunden sehen',
      description: 'Schluss mit dem Durchsehen von Hunderten von Lebensläufen. Sehen Sie Kandidaten sofort mit HireAI.'
    },
    {
      id: 'global-hires',
      icon: '/images/03-why-choose/save_with_global_hires_v2.png',
      title: 'Sparen mit globalen Einstellungen',
      description: 'Erhalten Sie Zugang zu 450.000 Talenten in deutschen Städten (Berlin, München, Hamburg, Zürich) und weltweit, und sparen Sie bis zu 58% gegenüber traditionellen Einstellungen.'
    },
    {
      id: 'human-support',
      icon: '/images/03-why-choose/get_real_human_support.webp',
      title: 'Echte menschliche Unterstützung',
      description: 'Fühlen Sie sich sicher bei der Einstellung von Remote-Talenten mit praktischer Hilfe von unserem Team erfahrener Recruiter.'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[48px] font-bold text-gray-900 text-center mb-12">
          Warum Programmier-Anfang wählen?
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

