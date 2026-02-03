import Image from 'next/image';

export default function HowToUseArc() {
  const steps = [
    {
      id: 1,
      number: '1',
      title: 'Tell us your needs',
      description: 'Share with us your goals, budget, job details, and location preferences.',
      hasIcon: false
    },
    {
      id: 2,
      number: '2',
      title: 'Meet top candidates',
      description: 'Connect directly with your best matches, fully vetted and highly responsive.',
      hasIcon: false
    },
    {
      id: 3,
      number: '3',
      title: 'Interview and hire',
      description: "Decide who to hire, and we'll take care of the rest. Enjoy peace of mind with secure freelancer payments and compliant global hires via trusted EOR partners.",
      hasIcon: true
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[48px] font-bold text-gray-900 text-center mb-12">
          How to use Arc
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              {/* Step Number with optional icon */}
              <div className="flex items-center justify-center mb-4">
                {step.hasIcon && (
                  <Image
                    src="/images/06/star-highlight-icon.webp"
                    alt="star"
                    width={24}
                    height={24}
                    className="w-6 h-6 mr-2"
                  />
                )}
                <h3 className="text-[32px] font-bold text-gray-900">
                  {step.number}. {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

