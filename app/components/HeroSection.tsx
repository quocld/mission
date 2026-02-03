export default function HeroSection() {
  return (
    <section className="bg-black h-[476px]">
      <div className="max-w-[1280px] mx-auto px-12 h-full flex items-center">
        {/* Grid Layout: 45% / 55% */}
        <div className="grid grid-cols-[45%_55%] gap-16 items-center">
          
          {/* Left Column */}
          <div>
            {/* Heading */}
            <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">Hire the world's</span>
              <br />
              <span className="text-[rgb(0,159,255)]">top remote talent</span>
              <br />
              <span className="text-white">without the search</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-white/85 leading-relaxed max-w-[520px] mb-8">
              Freelance or full-time developers, designers, marketers, product managers, 
              project managers, assistants, and more. Vetted & ready to interview.
            </p>

            {/* CTA Button */}
            <button className="w-full max-w-[400px] h-14 text-lg font-semibold text-white bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(23,162,69,0.3)] transition-all duration-200">
              Hire talent
            </button>

            {/* Badge */}
            <div className="flex items-center justify-center gap-2 mt-4 max-w-[400px]">
              <span className="text-base">🔥</span>
              <span className="text-sm font-medium text-white">$0 until you hire</span>
            </div>
          </div>

          {/* Right Column - Illustration Card */}
          <div className="relative bg-white rounded-sm p-8 border-4 border-[#E5E5E5] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            {/* Video */}
            <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: '760/428' }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/hero.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

