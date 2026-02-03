export default function FAQSection({ category }: { category: string }) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[40px] font-bold text-gray-900 mb-6">
            Häufig gestellte Fragen
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600">
            Für weitere häufige Fragen zur Einstellung von <span className="font-semibold">{category}</span>,{' '}
            <a
              href="/faq"
              className="text-[rgb(0,159,255)] hover:underline"
            >
              besuchen Sie unsere FAQ-Seite
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}

