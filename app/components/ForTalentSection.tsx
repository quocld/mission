import Image from 'next/image';

export default function ForTalentSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Grid Layout: 50% / 50% */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Column - Text Content */}
          <div>
            {/* Label */}
            <div className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">
              Für Talente
            </div>

            {/* Heading */}
            <h2 className="text-[40px] font-bold leading-tight mb-6">
              <span className="text-white">Arbeiten Sie, wie Sie wollen </span>
              <span className="text-[rgb(0,159,255)]">überall</span>
              <br />
              <span className="text-white">auf der Welt</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              Programmier-Anfang ist der beste Ort, um Freelance- und Vollzeit-Remote-Jobs für Entwickler,
              Designer, Marketer, Produktmanager, Projektmanager, Assistenten und mehr zu finden.
              Werden Sie mit US-basierten Startups und Technologieunternehmen gematcht.
            </p>

            {/* CTA Button */}
            <a
              href="https://arc.dev/talent"
              className="inline-block px-8 py-3 text-base font-semibold text-white border border-white rounded-md hover:bg-white/10 transition-colors"
            >
              Mehr erfahren
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <Image
              src="/images/07/hero-photo.webp"
              alt="Work the way you want anywhere in the world"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

