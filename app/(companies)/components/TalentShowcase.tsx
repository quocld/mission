import Image from 'next/image';

interface Profile {
  name: string;
  location: string;
  badge: string;
  bio: string;
  skills: string[];
  availability: string;
  previousCompany: {
    name: string;
    logo: string;
  };
  avatar: string;
}

interface TalentShowcaseProps {
  heading: string;
  profiles: Profile[];
  category: string;
}

export default function TalentShowcase({ heading, profiles, category }: TalentShowcaseProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-12 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-[rgb(0,159,255)] transition-colors">Home</a>
          <span>/</span>
          <span className="text-gray-900 capitalize">{category}</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-[40px] font-bold text-gray-900 mb-12">
          {heading}
        </h2>

        {/* Profiles Grid */}
        <div className="space-y-8 mb-12">
          {profiles.map((profile, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                    {profile.avatar && (
                      <Image
                        src={profile.avatar}
                        alt={profile.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  {/* Vetted Badge */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[rgb(23,162,69)] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  {/* Name and Location */}
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {profile.badge} in {profile.location}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-base text-gray-700 leading-relaxed mb-4 line-clamp-3">
                    {profile.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      {/* Availability */}
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Availability</div>
                        <div className="text-sm font-semibold text-gray-900">
                          {profile.availability}
                        </div>
                      </div>

                      {/* Previous Company */}
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Previously at</div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                          <span className="text-sm font-semibold text-gray-900">
                            {profile.previousCompany.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[rgb(23,162,69)] rounded-md hover:bg-[rgb(20,145,60)] transition-colors">
                      Hire now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h3 className="text-[32px] font-bold text-gray-900 mb-6">
            Discover more <span className="text-[rgb(0,159,255)]">remote {category}</span> today
          </h3>
          <button className="px-8 py-3 text-base font-semibold text-white bg-[rgb(23,162,69)] rounded-md hover:bg-[rgb(20,145,60)] transition-colors">
            Start hiring
          </button>
        </div>
      </div>
    </section>
  );
}

