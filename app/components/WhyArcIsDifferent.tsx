'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function WhyArcIsDifferent() {
  const testimonials = [
    {
      id: 1,
      quote: "Scale your team while saving time, money, and brainpower",
      author: "Todd Wiesel",
      position: "Founder @ BAXUS Blockchain protocol",
      company: "BAXUS",
      logo: "/images/05-why-difrent/baxus-logo.webp",
      url: "https://arc.dev/employer-blog/baxus-arc-case-study/"
    },
    {
      id: 2,
      quote: "Highly skilled and diverse pool of talent at an affordable cost!",
      author: "Kristen (KJ) O'Sullivan",
      position: "Lead Recruiter @ Stem",
      company: "Stem",
      logo: "/images/05-why-difrent/stem-logo.webp",
      url: "https://arc.dev/employer-blog/stem-hiring-global-talent-with-arc/"
    },
    {
      id: 3,
      quote: "Quickly delivered candidates that met our very high bar",
      author: "Derrick Mar",
      position: "Co-founder and CPO @ YC-backed Pathrise",
      company: "Pathrise",
      logo: "/images/05-why-difrent/pathrise-logo.webp",
      url: "https://arc.dev/employer-blog/pathrise-case-study/"
    },
    {
      id: 4,
      quote: "Some of the best hires we've ever made!",
      author: "Hunter McKinley",
      position: "Co-Founder & CEO @ Backtrack",
      company: "Backtrack",
      logo: "/images/05-why-difrent/backtrack-logo.webp",
      url: "https://arc.dev/employer-blog/category/case-studies/"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5; // Scroll speed
      
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPos;
        
        // Reset when reaching halfway (since we duplicated items)
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Triple the testimonials for seamless loop
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Section Heading */}
        <h2 className="text-[48px] font-bold text-gray-900 text-center mb-8">
          Why Arc is different
        </h2>

        {/* Trustpilot and Stats Row */}
        <div className="flex items-center justify-center gap-12 mb-12">
          {/* Trustpilot Rating */}
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-gray-900 mb-2">Excellent</span>
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

          {/* Divider */}
          <div className="h-12 w-px bg-gray-200"></div>

          {/* Stats */}
          <div className="flex items-center gap-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-[36px] font-bold text-gray-900">75%</div>
              <div className="text-sm text-gray-600">faster to hire</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-[36px] font-bold text-gray-900">58%</div>
              <div className="text-sm text-gray-600">cost savings</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-[36px] font-bold text-gray-900">800+</div>
              <div className="text-sm text-gray-600">hires made</div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {tripleTestimonials.map((testimonial, index) => (
              <a
                key={`${testimonial.id}-${index}`}
                href={testimonial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[380px] bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                {/* Quote */}
                <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </h3>

                {/* Author Info */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      {testimonial.position}
                    </div>
                  </div>

                  {/* Company Logo */}
                  <div className="ml-4">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.company}
                      width={80}
                      height={32}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

