import Image from 'next/image';

interface CategoryItem {
  name: string;
  icon: string;
  url: string;
}

interface CategorySection {
  id: string;
  title: string;
  items: CategoryItem[];
}

interface CategoriesGridProps {
  heading: string;
  subheading: string;
  sections: CategorySection[];
}

export default function CategoriesGrid({ heading, subheading, sections }: CategoriesGridProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Categories Sections */}
        {sections.map((section) => (
          <div key={section.id} className="mb-16 last:mb-0">
            {/* Section Title */}
            <h3 className="text-[24px] font-bold text-gray-900 mb-8">
              {section.title}
            </h3>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {section.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Name */}
                  <span className="text-sm font-medium text-gray-900 text-center leading-tight">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button className="px-8 py-3 text-base font-semibold text-white bg-[rgb(23,162,69)] rounded-md hover:bg-[rgb(20,145,60)] transition-colors">
            Hire a developer
          </button>
          <a 
            href="/hire-developers"
            className="px-8 py-3 text-base font-semibold text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            View all developers
          </a>
        </div>
      </div>
    </section>
  );
}

