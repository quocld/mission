export default function HeroSection() {
  return (
    <section className="bg-black h-[600px] lg:h-[500px] flex items-center">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 w-full">
        {/* Grid Layout: 45% / 55% */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div>
            {/* Heading */}
            <h1 className="text-[32px] lg:text-[40px] font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">Stellen Sie die weltweit</span>
              <br />
              <span className="text-[rgb(0,159,255)]">besten Remote-Talente</span>
              <br />
              <span className="text-white">ein ohne lange Suche</span>
            </h1>

            {/* Subheading */}
            <p className="text-base lg:text-lg text-white/85 leading-relaxed max-w-[520px] mb-8">
              Freelance oder Vollzeit-Entwickler, Designer, Marketer, Produktmanager,
              Projektmanager, Assistenten und mehr. Geprüft & bereit für Interviews.
            </p>

            {/* CTA Button */}
            <button className="w-full max-w-[400px] h-14 text-lg font-semibold text-white bg-[#0050ff] rounded-lg hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
              Talente einstellen
            </button>

            {/* Badge */}
            <div className="flex items-center justify-center gap-2 mt-4 max-w-[400px]">
              <span className="text-base">🔥</span>
              <span className="text-sm font-medium text-white">$0 bis zur Einstellung</span>
            </div>
          </div>

          {/* Right Column - Illustration Card */}
          <div className="relative bg-white rounded-xl p-8 shadow-[0_20px_60px_rgba(255,255,255,0.05)] aspect-[16/9] flex flex-col justify-center items-center">
            {/* Top Right Icons */}
            <div className="absolute top-6 right-6 flex items-center gap-4 bg-white shadow-sm border border-gray-100 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              <svg className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              <svg className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <svg className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
            </div>

            {/* Main Content */}
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold font-mono text-black mb-4 tracking-tighter">
                programmier-anfang()
              </h2>
              <p className="text-xl text-black font-semibold mb-6">
                Dein Remote-Job-Matchmaker
              </p>
              <div className="inline-block bg-[#333] text-white text-sm px-4 py-2 rounded">
                Programmier-Anfang, Dein Remote-Job-Matchmaker.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

