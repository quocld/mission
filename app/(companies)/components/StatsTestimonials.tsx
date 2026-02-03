import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
}

interface StatsTestimonialsProps {
  stats: Array<{
    prefix?: string;
    value: string;
    label: string;
  }>;
  testimonials: Testimonial[];
}

export default function StatsTestimonials({ stats, testimonials }: StatsTestimonialsProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Title */}
        <h2 className="text-[40px] font-bold text-gray-900 text-center mb-12">
          Remote hiring made easy
        </h2>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-12 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[48px] font-bold text-gray-900 leading-none mb-2">
                {stat.prefix && (
                  <span className="text-[20px] font-normal text-gray-600">{stat.prefix} </span>
                )}
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6"
            >
              {/* Quote */}
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  {testimonial.avatar && (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.title} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot */}
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm font-semibold text-gray-900">Excellent</span>
          <a 
            href="https://www.trustpilot.com/review/arc.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Image
              src="/images/05-why-difrent/trustpilot-full-star.webp"
              alt="star"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Image
              src="/images/05-why-difrent/trustpilot-full-star.webp"
              alt="star"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Image
              src="/images/05-why-difrent/trustpilot-full-star.webp"
              alt="star"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Image
              src="/images/05-why-difrent/trustpilot-full-star.webp"
              alt="star"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <Image
              src="/images/05-why-difrent/trustpilot-half-star.webp"
              alt="half star"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

