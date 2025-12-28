'use client';

const technicalSkills = [
  { name: 'PROSPER', category: 'Well Analysis', level: 90 },
  { name: 'Kingdom', category: 'Seismic Interpretation', level: 60 },
  { name: 'AutoCAD', category: 'Technical Drawing', level: 75 },
  { name: 'Canva', category: 'Design', level: 85 },
];

const programmingSkills = [
  { name: 'Python', category: 'Programming', level: 80 },
  { name: 'C++', category: 'Programming', level: 70 },
  { name: 'MS Office', category: 'Productivity', level: 90 },
  { name: 'Excel', category: 'Data Analysis', level: 85 },
];

const responsibilities = [
  {
    role: 'Outreach Head',
    organization: 'SEG RGIPT Student Chapter',
    period: '2025-Present',
    current: true,
  },
  {
    role: 'Event Management Head',
    organization: 'SEG RGIPT Student Chapter',
    period: '2024-2025',
    current: false,
  },
  {
    role: 'Designing Executive',
    organization: 'FIPI RGIPT Student Chapter',
    period: '2024-2025',
    current: false,
  },
  {
    role: 'Editorial Executive',
    organization: 'SPE RGIPT Student Chapter',
    period: '2023-2024',
    current: false,
  },
  {
    role: 'Logistics Executive',
    organization: 'ICTU Conference',
    period: '1 Oct 2024',
    current: false,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="page-section bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <div className="relative">
            <span className="section-number">06</span>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355] mb-4">Chapter Six & Seven</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-none">
              SKILLS &<br/>
              <span className="italic text-[#c9a962]">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-[#c9a962] mt-6" />
          </div>

          <div className="flex items-end">
            <p className="font-editorial text-xl text-[#666] italic leading-relaxed">
              A versatile skill set combining technical expertise with creative abilities and proven leadership experience across multiple industry organizations.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Technical Software */}
          <div className="bg-white p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                <span className="text-[#c9a962] text-xl">⚙️</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#2d2d2d]">Technical Software</h3>
                <p className="text-xs text-[#8b7355] uppercase tracking-wider">Industry Tools</p>
              </div>
            </div>

            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-medium text-[#2d2d2d]">{skill.name}</span>
                    <span className="text-xs text-[#8b7355] uppercase tracking-wider">{skill.category}</span>
                  </div>
                  <div className="h-2 bg-[#e8e4dc] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#c9a962] to-[#8b7355] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programming & Tools */}
          <div className="bg-white p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                <span className="text-[#c9a962] text-xl">💻</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#2d2d2d]">Programming & Tools</h3>
                <p className="text-xs text-[#8b7355] uppercase tracking-wider">Digital Skills</p>
              </div>
            </div>

            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-medium text-[#2d2d2d]">{skill.name}</span>
                    <span className="text-xs text-[#8b7355] uppercase tracking-wider">{skill.category}</span>
                  </div>
                  <div className="h-2 bg-[#e8e4dc] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#2d2d2d] to-[#666] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Positions of Responsibility */}
        <div className="bg-[#1a1a1a] -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a962] mb-4">
                Positions of Responsibility
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-white">
                Leadership <span className="italic text-[#c9a962]">Roles</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {responsibilities.map((resp, index) => (
                <div
                  key={resp.role + resp.organization}
                  className={`relative p-6 border transition-colors ${
                    resp.current
                      ? 'bg-[#c9a962]/10 border-[#c9a962]'
                      : 'bg-white/5 border-white/10 hover:border-[#c9a962]/50'
                  }`}
                >
                  {resp.current && (
                    <span className="absolute top-4 right-4 px-2 py-1 bg-[#c9a962] text-[#1a1a1a] text-[10px] uppercase tracking-wider font-medium">
                      Current
                    </span>
                  )}

                  <span className="font-serif text-4xl text-white/10">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h4 className="font-serif text-xl text-white mt-2 mb-1">
                    {resp.role}
                  </h4>
                  <p className="text-[#c9a962] text-sm mb-3">
                    {resp.organization}
                  </p>
                  <p className="text-white/50 text-xs uppercase tracking-wider">
                    {resp.period}
                  </p>
                </div>
              ))}
            </div>

            {/* Organization Logos Placeholder */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6 text-center">
                Affiliated Organizations
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {['SEG', 'SPE', 'FIPI', 'ICTU'].map((org) => (
                  <div
                    key={org}
                    className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
                  >
                    <span className="text-white/40 text-xs font-medium">{org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355] mb-4">
              Chapter Eight
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-[#2d2d2d]">
              Beyond <span className="italic text-[#c9a962]">Engineering</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Initiative */}
            <div className="bg-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a962]/10 rounded-full -translate-y-1/2 translate-x-1/2" />

              <span className="magazine-badge bg-[#c9a962] text-[#1a1a1a] mb-4 inline-block">
                Social Impact
              </span>

              <h4 className="font-serif text-2xl text-[#2d2d2d] mb-4">
                Arpan Club Initiative
              </h4>

              <p className="text-[#666] leading-relaxed mb-6">
                Actively contributing to society by teaching underprivileged sections through RGIPT&apos;s
                social initiative Arpan Club, demonstrating commitment to education and community development.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 image-placeholder rounded-full">
                  <span className="text-[8px]">Photo</span>
                </div>
                <div>
                  <p className="font-medium text-[#2d2d2d]">RGIPT Arpan Club</p>
                  <p className="text-xs text-[#8b7355]">Since 2024</p>
                </div>
              </div>
            </div>

            {/* Hobbies */}
            <div className="bg-white p-8">
              <span className="magazine-badge mb-4 inline-block">
                Hobbies & Interests
              </span>

              <h4 className="font-serif text-2xl text-[#2d2d2d] mb-6">
                Life Beyond the Lab
              </h4>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#f5f3ef]">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                    <span className="text-2xl">🏸</span>
                  </div>
                  <p className="font-medium text-sm text-[#2d2d2d]">Badminton</p>
                </div>

                <div className="text-center p-4 bg-[#f5f3ef]">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                    <span className="text-2xl">♟️</span>
                  </div>
                  <p className="font-medium text-sm text-[#2d2d2d]">Chess</p>
                </div>

                <div className="text-center p-4 bg-[#f5f3ef]">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                    <span className="text-2xl">🎲</span>
                  </div>
                  <p className="font-medium text-sm text-[#2d2d2d]">Rubik&apos;s Cube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
