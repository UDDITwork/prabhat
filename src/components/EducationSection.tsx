'use client';

const educationData = [
  {
    course: 'B. Tech in Petroleum Engineering',
    institute: 'Rajiv Gandhi Institute of Petroleum Technology',
    score: '7.50/10',
    scoreNote: 'Up to 4th Semester',
    year: '2023-2027',
    highlight: true,
    description: 'Pursuing comprehensive education in petroleum engineering with focus on reservoir engineering, drilling operations, and production optimization.',
  },
  {
    course: 'Intermediate (Class XII)',
    institute: 'Mothers Public School, Bareilly',
    score: '89.80%',
    scoreNote: 'CBSE Board',
    year: '2021',
    highlight: false,
    description: 'Completed senior secondary education with distinction in Science stream, laying foundation for engineering pursuits.',
  },
  {
    course: 'High School (Class X)',
    institute: 'Girish Prasad Memorial Inter College, Bareilly',
    score: '90.4%',
    scoreNote: 'UP Board',
    year: '2019',
    highlight: false,
    description: 'Achieved academic excellence in foundational studies, developing strong analytical and problem-solving abilities.',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="page-section bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto">
        {/* Magazine Spread Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Left Column - Title */}
          <div className="relative">
            <span className="section-number">01</span>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355] mb-4">Chapter One</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-none">
              ACADEMIC<br/>
              <span className="italic text-[#c9a962]">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-[#c9a962] mt-6" />

            {/* Pull Quote */}
            <div className="pull-quote mt-8">
              Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
            </div>
          </div>

          {/* Right Column - Feature Image */}
          <div className="relative">
            <div className="aspect-[4/3] image-placeholder bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] relative overflow-hidden">
              <span className="text-white/60">Campus Photo</span>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="magazine-badge bg-[#c9a962] text-[#1a1a1a]">RGIPT Campus</span>
                <p className="text-white font-serif text-xl mt-2">Where Excellence Meets Innovation</p>
              </div>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#c9a962] -z-10" />
          </div>
        </div>

        {/* Education Cards - Magazine Style */}
        <div className="space-y-0">
          {educationData.map((edu, index) => (
            <div
              key={edu.course}
              className={`grid lg:grid-cols-12 gap-6 lg:gap-8 py-8 lg:py-12 border-t border-[#e8e4dc] ${
                edu.highlight ? 'bg-white -mx-4 md:-mx-8 px-4 md:px-8' : ''
              }`}
            >
              {/* Number & Year */}
              <div className="lg:col-span-2">
                <div className="flex lg:flex-col items-baseline lg:items-start gap-4 lg:gap-2">
                  <span className="font-serif text-4xl lg:text-5xl text-[#c9a962]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-[#8b7355] uppercase tracking-wider">
                    {edu.year}
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-6">
                <div className="flex items-start gap-2 mb-2">
                  {edu.highlight && (
                    <span className="magazine-badge bg-[#c9a962] text-[#1a1a1a]">Current</span>
                  )}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#2d2d2d] mb-2">
                  {edu.course}
                </h3>
                <p className="text-[#8b7355] font-medium mb-4">
                  {edu.institute}
                </p>
                <p className="text-[#666] leading-relaxed font-light">
                  {edu.description}
                </p>
              </div>

              {/* Score Card */}
              <div className="lg:col-span-4">
                <div className={`p-6 ${edu.highlight ? 'bg-[#f5f3ef]' : 'bg-white'}`}>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8b7355] mb-2">
                    Academic Score
                  </p>
                  <p className="font-serif text-4xl md:text-5xl text-[#2d2d2d]">
                    {edu.score}
                  </p>
                  <p className="text-sm text-[#8b7355] mt-2">
                    {edu.scoreNote}
                  </p>
                  {edu.highlight && (
                    <div className="mt-4 pt-4 border-t border-[#e8e4dc]">
                      <p className="text-xs text-[#8b7355]">Expected Graduation</p>
                      <p className="font-serif text-lg text-[#2d2d2d]">2027</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-[#e8e4dc]">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355] mb-8 text-center">
            Academic Highlights
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-[#c9a962]">4</p>
              <p className="text-xs text-[#8b7355] uppercase tracking-wider mt-2">Semesters Completed</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-[#c9a962]">7.5</p>
              <p className="text-xs text-[#8b7355] uppercase tracking-wider mt-2">Current CPI</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-[#c9a962]">90%</p>
              <p className="text-xs text-[#8b7355] uppercase tracking-wider mt-2">High School Score</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-[#c9a962]">2x</p>
              <p className="text-xs text-[#8b7355] uppercase tracking-wider mt-2">UP Govt. Scholar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
