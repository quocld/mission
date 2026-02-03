import Image from 'next/image';

interface Step {
  number: string;
  title: string;
  description: string;
  subtext: string;
  image: string;
}

interface HowItWorksStepsProps {
  steps: Step[];
  category: string;
}

export default function HowItWorksSteps({ steps, category }: HowItWorksStepsProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[40px] font-bold text-gray-900 text-center mb-16">
          It's easy to hire full-time & freelance {category} with Arc
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Image */}
              <div className="mb-6 rounded-lg overflow-hidden bg-white p-8">
                <div className="aspect-square w-full max-w-[300px] mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>

              {/* Number */}
              <div className="text-[20px] font-bold text-[rgb(0,159,255)] mb-2">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed mb-2">
                {step.description}
              </p>

              {/* Subtext */}
              <p className="text-sm text-gray-600">
                {step.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4">
          <button className="px-8 py-3 text-base font-semibold text-white bg-[rgb(23,162,69)] rounded-md hover:bg-[rgb(20,145,60)] transition-colors">
            Hire a {category === 'developers' ? 'developer' : category.slice(0, -1)}
          </button>
          <a 
            href="/pricing"
            className="px-8 py-3 text-base font-semibold text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Learn more about pricing
          </a>
        </div>
      </div>
    </section>
  );
}

