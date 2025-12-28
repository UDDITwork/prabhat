'use client';

export default function ExperienceSection() {
  return (
    <section id="experience" className="page-section bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355] mb-4">Chapter Two & Three</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a]">
            FIELD &amp; <span className="italic text-[#c9a962]">Research</span>
          </h2>
          <div className="w-24 h-1 bg-[#c9a962] mt-6 mx-auto" />
        </div>

        {/* Field Trip Spread */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Large Image */}
            <div className="relative">
              <div className="aspect-[3/4] lg:aspect-auto lg:h-full image-placeholder bg-gradient-to-br from-[#4a5568] to-[#2d3748]">
                <span className="text-white/60">Himalayan Field Trip</span>
              </div>
              <div className="absolute top-6 left-6">
                <span className="magazine-badge">Field Expedition</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 text-xs uppercase tracking-widest mb-2">April 2025</p>
                <p className="text-white font-serif text-2xl">Geological & Industrial Field Trip</p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="bg-[#1a1a1a] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="relative">
                <span className="absolute -top-8 -left-4 font-serif text-8xl text-white/5">02</span>

                <p className="text-[#c9a962] text-xs font-medium uppercase tracking-[0.3em] mb-4">
                  5th - 9th April 2025
                </p>

                <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
                  Exploring the<br/>
                  <span className="italic text-[#c9a962]">Himalayan Frontier</span>
                </h3>

                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p className="drop-cap">
                    Gained insights into formation, migration and trapping of oil through exploration of various aspects of geological structures and fossils through rock exposure in the majestic Himalayan region.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/10">
                    <div>
                      <p className="text-[#c9a962] font-serif text-2xl">IDT</p>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Dehradun Training</p>
                    </div>
                    <div>
                      <p className="text-[#c9a962] font-serif text-2xl">5</p>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Days Duration</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a962] mt-1">&#9670;</span>
                      <span>Practical knowledge on well control through simulation at IDT, Dehradun</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a962] mt-1">&#9670;</span>
                      <span>Studied rock formations found in the Himalayan Region</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a962] mt-1">&#9670;</span>
                      <span>Learned about different types of Exploration techniques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Internship Spread */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column - Title Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#f5f3ef] p-8 h-full relative">
                <span className="section-number">03</span>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355] mb-4">
                  Research Internship
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-[#2d2d2d] mb-4">
                  IIT (ISM)<br/>
                  <span className="text-[#c9a962]">DHANBAD</span>
                </h3>
                <div className="w-16 h-1 bg-[#c9a962] mb-6" />
                <p className="text-[#8b7355] text-sm mb-6">
                  4th June - 17th July 2025
                </p>
                <div className="aspect-square image-placeholder bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a]">
                  <span className="text-white/60 text-xs">IIT ISM Campus</span>
                </div>
              </div>
            </div>

            {/* Middle Column - Main Content */}
            <div className="lg:col-span-5">
              <div className="mb-6">
                <span className="magazine-badge bg-[#c9a962] text-[#1a1a1a]">Featured Research</span>
              </div>

              <h4 className="font-serif text-2xl md:text-3xl text-[#2d2d2d] mb-6 leading-tight">
                &ldquo;Synthesis of Super Absorbent Polymer Gel to Solve Water Shutoff Problems in Reservoir&rdquo;
              </h4>

              <div className="magazine-columns text-[#666] leading-relaxed text-sm">
                <p className="mb-4">
                  During this intensive research internship at one of India&apos;s premier institutions, the focus was on developing innovative solutions for one of the oil industry&apos;s most persistent challenges: water shutoff problems in reservoirs.
                </p>
                <p className="mb-4">
                  The research involved synthesis and characterization of Preformed Particle Gel (PPG), a super absorbent polymer that can effectively block water channels while allowing oil flow.
                </p>
                <p>
                  This work has significant implications for enhanced oil recovery and could lead to more efficient extraction processes in mature oil fields across India.
                </p>
              </div>

              <div className="mt-8 p-6 bg-[#f5f3ef] border-l-4 border-[#c9a962]">
                <p className="font-serif text-lg italic text-[#2d2d2d]">
                  &ldquo;Working at IIT Dhanbad opened new horizons in understanding the intersection of chemistry and petroleum engineering.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column - Lab Details */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-[#1a1a1a] p-6">
                <p className="text-[#c9a962] text-xs font-medium uppercase tracking-[0.2em] mb-4">
                  Labs Visited
                </p>
                <ul className="space-y-3">
                  <li className="text-white/80 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#c9a962]" />
                    Drilling Fluid Lab
                  </li>
                  <li className="text-white/80 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#c9a962]" />
                    Flow Assurance Lab
                  </li>
                  <li className="text-white/80 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#c9a962]" />
                    Enhanced Oil Recovery Lab
                  </li>
                </ul>
              </div>

              <div className="aspect-[4/3] image-placeholder bg-gradient-to-br from-[#3d3d3d] to-[#2d2d2d]">
                <span className="text-white/60 text-xs">Lab Work Photo</span>
              </div>

              <div className="bg-[#f5f3ef] p-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8b7355] mb-2">
                  Duration
                </p>
                <p className="font-serif text-3xl text-[#2d2d2d]">6 Weeks</p>
                <p className="text-xs text-[#8b7355] mt-1">Intensive Research</p>
              </div>
            </div>
          </div>
        </div>

        {/* PROSPER Project Spread */}
        <div className="bg-[#f5f3ef] -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Visual */}
              <div className="relative">
                <div className="aspect-video image-placeholder bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
                  <span className="text-white/60">PROSPER Software Screenshot</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#c9a962] p-4">
                  <p className="text-[#1a1a1a] font-serif text-2xl">PROSPER</p>
                  <p className="text-[#1a1a1a]/70 text-xs">Well Analysis Tool</p>
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355] mb-4">
                  Technical Project
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-[#2d2d2d] mb-6">
                  Well Production<br/>
                  <span className="italic text-[#c9a962]">Optimization</span>
                </h3>

                <p className="text-[#666] leading-relaxed mb-8">
                  Comprehensive well production analysis using industry-standard PROSPER software,
                  focusing on optimizing production parameters and understanding well behavior under
                  various operating conditions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white">
                    <span className="font-serif text-2xl text-[#c9a962]">01</span>
                    <div>
                      <p className="font-medium text-[#2d2d2d]">Reservoir Model Calibration</p>
                      <p className="text-sm text-[#8b7355]">Calibrating models in PROSPER for accurate simulation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white">
                    <span className="font-serif text-2xl text-[#c9a962]">02</span>
                    <div>
                      <p className="font-medium text-[#2d2d2d]">Sensitivity Analysis</p>
                      <p className="text-sm text-[#8b7355]">Effects of pressure, water cut, GOR, tubing size</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white">
                    <span className="font-serif text-2xl text-[#c9a962]">03</span>
                    <div>
                      <p className="font-medium text-[#2d2d2d]">Sucker Rod Pump Design</p>
                      <p className="text-sm text-[#8b7355]">Designing pumps and interpreting dynagraphs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
