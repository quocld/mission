export default function FooterCTA() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-[40px] font-bold text-gray-900 mb-8">
            Your shortcut to the best remote talent
          </h2>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button className="px-8 py-3 text-base font-semibold text-white bg-[rgb(23,162,69)] rounded-md hover:bg-[rgb(20,145,60)] transition-colors">
              Hire talent
            </button>
            <a 
              href="https://arc.dev/talent"
              className="px-8 py-3 text-base font-semibold text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Find jobs
            </a>
          </div>

          {/* Subtext */}
          <p className="text-sm text-gray-600">
            No cost until you hire
          </p>
        </div>
      </div>
    </section>
  );
}

