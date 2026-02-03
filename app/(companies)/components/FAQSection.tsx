export default function FAQSection({ category }: { category: string }) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[40px] font-bold text-gray-900 mb-6">
            FAQs
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600">
            For more frequently asked questions on hiring <span className="font-semibold">{category}</span>,{' '}
            <a 
              href="/faq"
              className="text-[rgb(0,159,255)] hover:underline"
            >
              check out our FAQs page
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}

