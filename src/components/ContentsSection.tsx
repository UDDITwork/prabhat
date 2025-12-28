'use client';

const contents = [
  { number: '01', title: 'Educational Journey', subtitle: 'From High School to RGIPT', page: '04' },
  { number: '02', title: 'Field Expeditions', subtitle: 'Geological & Industrial Insights', page: '08' },
  { number: '03', title: 'Research Portfolio', subtitle: 'IIT Dhanbad Internship', page: '12' },
  { number: '04', title: 'Technical Projects', subtitle: 'Well Production Optimization', page: '16' },
  { number: '05', title: 'Achievements & Honors', subtitle: 'Awards & Certifications', page: '20' },
  { number: '06', title: 'Leadership Roles', subtitle: 'Positions of Responsibility', page: '24' },
  { number: '07', title: 'Technical Arsenal', subtitle: 'Skills & Competencies', page: '28' },
  { number: '08', title: 'Beyond Engineering', subtitle: 'Activities & Interests', page: '32' },
];

export default function ContentsSection() {
  return (
    <section id="contents" className="page-section bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-1">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355] mb-4">Issue Contents</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-none">
              CONTENTS.
            </h2>
            <div className="w-24 h-1 bg-[#c9a962] mt-6" />
          </div>

          <div className="lg:col-span-2">
            {/* Editor's Note Preview */}
            <div className="bg-[#f5f3ef] p-6 md:p-8 relative">
              <span className="section-number">N</span>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355] mb-4">Editor&apos;s Note</p>
              <p className="font-editorial text-xl md:text-2xl text-[#2d2d2d] leading-relaxed italic">
                &ldquo;Discover the remarkable journey of a petroleum engineering student who combines academic excellence
                with hands-on research experience. From geological field trips to cutting-edge polymer gel synthesis,
                this portfolio showcases a future industry leader.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full image-placeholder">
                  <span className="text-[8px]">Photo</span>
                </div>
                <div>
                  <p className="font-serif text-lg text-[#2d2d2d]">Prabhat</p>
                  <p className="text-xs text-[#8b7355] uppercase tracking-wider">Class of 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contents List */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {contents.map((item, index) => (
            <div
              key={item.number}
              className="group border-t border-[#e8e4dc] py-6 transition-colors duration-300 hover:bg-[#f5f3ef] px-4 -mx-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-6">
                  <span className="font-serif text-3xl md:text-4xl text-[#c9a962] group-hover:text-[#8b7355] transition-colors">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-[#2d2d2d] group-hover:text-[#1a1a1a] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#8b7355] mt-1 uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <span className="font-serif text-lg text-[#8b7355] group-hover:text-[#c9a962] transition-colors">
                  {item.page}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Spreads Preview */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="magazine-card bg-[#f5f3ef] overflow-hidden">
            <div className="aspect-[4/3] image-placeholder relative">
              <span>Field Trip Photo</span>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="magazine-badge bg-[#c9a962] text-[#1a1a1a]">Featured</span>
              </div>
            </div>
            <div className="p-4">
              <p className="font-serif text-lg text-[#2d2d2d]">Himalayan Expedition</p>
              <p className="text-xs text-[#8b7355] mt-1">Geological Field Study</p>
            </div>
          </div>

          <div className="magazine-card bg-[#f5f3ef] overflow-hidden">
            <div className="aspect-[4/3] image-placeholder relative">
              <span>Lab Photo</span>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="magazine-badge bg-white text-[#1a1a1a]">Research</span>
              </div>
            </div>
            <div className="p-4">
              <p className="font-serif text-lg text-[#2d2d2d]">IIT Dhanbad Labs</p>
              <p className="text-xs text-[#8b7355] mt-1">Polymer Gel Synthesis</p>
            </div>
          </div>

          <div className="magazine-card bg-[#f5f3ef] overflow-hidden">
            <div className="aspect-[4/3] image-placeholder relative">
              <span>Conference Photo</span>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="magazine-badge">Achievement</span>
              </div>
            </div>
            <div className="p-4">
              <p className="font-serif text-lg text-[#2d2d2d]">China Symposium</p>
              <p className="text-xs text-[#8b7355] mt-1">Oral Presentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
