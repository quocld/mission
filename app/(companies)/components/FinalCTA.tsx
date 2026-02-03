interface FinalCTAProps {
  heading: string;
  subheading: string;
  ctaText: string;
}

export default function FinalCTA({ heading, subheading, ctaText }: FinalCTAProps) {
  return (
    <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] py-24">
      <div className="max-w-[1280px] mx-auto px-12 w-full text-center">
        <h2 className="text-[40px] font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-lg text-white/90 mb-8">
          {subheading}
        </p>
        <button className="px-12 py-4 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(23,162,69,0.4)] transition-all duration-200">
          {ctaText}
        </button>
      </div>
    </section>
  );
}

