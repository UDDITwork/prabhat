'use client';

const achievements = [
  {
    title: 'China University of Petroleum',
    subtitle: 'Research Symposium - Oral Presentation',
    date: '24 Oct 2025',
    category: 'International',
    description: 'Abstract selected for oral presentation at prestigious international research symposium',
    icon: '🎤',
  },
  {
    title: 'Best Poster Presentation',
    subtitle: 'ICPHD Conference',
    date: '7 Nov 2025',
    category: 'Award',
    description: 'Awarded for exceptional poster presentation at International Conference on Petroleum Hydrocarbon Decarbonisation',
    icon: '🏆',
  },
  {
    title: 'IWCF & WOCRM Certification',
    subtitle: 'Well Control Certification',
    date: '2025',
    category: 'Certification',
    description: 'International Well Control Forum certification demonstrating expertise in well control operations',
    icon: '📜',
  },
  {
    title: 'Introduction to Drilling',
    subtitle: 'Learn To Drill - Certified',
    date: 'Aug 2025',
    category: 'Certification',
    description: 'Professional certification in drilling fundamentals and operations',
    icon: '🛢️',
  },
  {
    title: 'U.P. Government Scholarship',
    subtitle: 'Merit-Based Scholarship',
    date: '2024-25',
    category: 'Scholarship',
    description: 'Recipient of state government scholarship for consecutive two years based on academic excellence',
    icon: '🎓',
  },
  {
    title: '3rd Rank - Chem-E-Quest',
    subtitle: 'BITS Pilani Quiz on Unstop',
    date: '2023',
    category: 'Competition',
    description: 'Secured third position in national-level chemical engineering quiz competition',
    icon: '🥉',
  },
  {
    title: 'NDA Written Examination',
    subtitle: 'National Defence Academy',
    date: '2022',
    category: 'Achievement',
    description: 'Successfully cleared the written examination for National Defence Academy',
    icon: '⭐',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="page-section bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a962] mb-4">Chapter Five</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white">
            ACHIEVEMENTS
          </h2>
          <p className="font-editorial text-xl text-white/60 italic mt-4">& Honors</p>
          <div className="w-24 h-1 bg-[#c9a962] mt-6 mx-auto" />
        </div>

        {/* Main Achievement Highlight */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden">
            <div className="aspect-[4/3] image-placeholder bg-gradient-to-br from-[#c9a962]/20 to-[#8b7355]/20">
              <span className="text-white/40">China Symposium Photo</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="magazine-badge bg-[#c9a962] text-[#1a1a1a]">Highlight</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white mt-3">
                International Recognition
              </h3>
              <p className="text-white/70 text-sm mt-2">
                Selected for oral presentation at China University of Petroleum
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="aspect-[4/3] image-placeholder bg-gradient-to-br from-[#c9a962]/20 to-[#8b7355]/20">
              <span className="text-white/40">ICPHD Conference Photo</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="magazine-badge bg-white text-[#1a1a1a]">Award</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white mt-3">
                Best Poster Presentation
              </h3>
              <p className="text-white/70 text-sm mt-2">
                ICPHD - International Conference on Petroleum Hydrocarbon Decarbonisation
              </p>
            </div>
          </div>
        </div>

        {/* Achievement Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-[#c9a962]/30 transform lg:-translate-x-1/2" />

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`relative grid lg:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 lg:left-1/2 top-0 w-4 h-4 bg-[#c9a962] rounded-full transform -translate-x-1/2 border-4 border-[#1a1a1a]" />

                {/* Content Card */}
                <div className={`ml-8 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:border-[#c9a962]/50 transition-colors">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <span className="text-2xl">{achievement.icon}</span>
                      <span className="px-3 py-1 bg-[#c9a962]/20 text-[#c9a962] text-xs uppercase tracking-wider">
                        {achievement.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-[#c9a962] text-sm mb-3">
                      {achievement.subtitle}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className={`mt-4 pt-4 border-t border-white/10 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 && <div className="hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a962] mb-8 text-center">
            Certifications & Credentials
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 p-6 text-center border border-white/10 hover:border-[#c9a962]/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <span className="text-2xl">🛢️</span>
              </div>
              <p className="text-white font-medium text-sm">IWCF</p>
              <p className="text-white/50 text-xs mt-1">Well Control</p>
            </div>

            <div className="bg-white/5 p-6 text-center border border-white/10 hover:border-[#c9a962]/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <p className="text-white font-medium text-sm">WOCRM</p>
              <p className="text-white/50 text-xs mt-1">Risk Management</p>
            </div>

            <div className="bg-white/5 p-6 text-center border border-white/10 hover:border-[#c9a962]/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <p className="text-white font-medium text-sm">Learn To Drill</p>
              <p className="text-white/50 text-xs mt-1">Drilling Basics</p>
            </div>

            <div className="bg-white/5 p-6 text-center border border-white/10 hover:border-[#c9a962]/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <p className="text-white font-medium text-sm">UP Govt.</p>
              <p className="text-white/50 text-xs mt-1">Scholar (2x)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
