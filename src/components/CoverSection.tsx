'use client';

export default function CoverSection() {
  return (
    <section id="cover" className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Magazine Frame */}
      <div className="absolute inset-4 md:inset-8 lg:inset-12 border border-white/10" />

      {/* Content Grid */}
      <div className="relative min-h-screen grid lg:grid-cols-2">
        {/* Left Side - Cover Image */}
        <div className="relative h-[60vh] lg:h-screen">
          {/* Placeholder Image */}
          <div className="absolute inset-0 image-placeholder bg-gradient-to-br from-[#3d3d3d] to-[#1a1a1a]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#2d2d2d] mx-auto mb-4 flex items-center justify-center border-2 border-[#c9a962]/30">
                  <span className="text-[#8b8580] text-sm uppercase tracking-widest">Profile Photo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay Elements */}
          <div className="absolute bottom-8 left-8 right-8 lg:left-12 lg:bottom-12">
            <p className="text-[#c9a962] text-sm font-medium uppercase tracking-[0.3em] mb-2">Issue No. 01</p>
            <p className="text-white/60 text-xs tracking-wider">December 2024 Edition</p>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
            <div className="w-16 h-[1px] bg-[#c9a962]" />
            <div className="w-[1px] h-16 bg-[#c9a962]" />
          </div>
        </div>

        {/* Right Side - Cover Content */}
        <div className="relative flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-0">
          {/* Magazine Masthead */}
          <div className="mb-8 lg:mb-12">
            <p className="text-[#c9a962] text-xs font-medium uppercase tracking-[0.5em] mb-4">Weekly</p>
            <h1 className="masthead text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-none">
              PETRO<br/>VIEW
            </h1>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#c9a962] to-transparent mt-4" />
          </div>

          {/* Featured Story Headlines */}
          <div className="space-y-6 lg:space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-[#c9a962] font-serif text-4xl lg:text-5xl font-light">P</span>
              <div>
                <span className="magazine-badge bg-[#c9a962] text-[#1a1a1a]">Exclusive</span>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mt-2 leading-tight">
                  PRABHAT
                </h2>
                <p className="text-white/60 text-sm mt-1 uppercase tracking-wider">
                  The Rising Star in Petroleum Engineering
                </p>
              </div>
            </div>

            <div className="pl-0 lg:pl-12 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-5xl lg:text-6xl font-serif font-light text-[#c9a962]">20</span>
                <div>
                  <p className="text-white text-sm uppercase tracking-wider font-medium">Research &</p>
                  <p className="text-white text-sm uppercase tracking-wider font-medium">Academic Insights</p>
                </div>
              </div>

              <div className="border-l-2 border-[#c9a962] pl-4 py-2">
                <p className="text-white/80 font-serif text-lg italic">
                  &ldquo;From RGIPT to IIT Dhanbad &mdash; A Journey of Excellence&rdquo;
                </p>
              </div>
            </div>

            {/* Cover Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-3 py-1 border border-white/20 text-white/70 text-xs uppercase tracking-wider">
                Well Optimization
              </span>
              <span className="px-3 py-1 border border-white/20 text-white/70 text-xs uppercase tracking-wider">
                Research Intern
              </span>
              <span className="px-3 py-1 border border-white/20 text-white/70 text-xs uppercase tracking-wider">
                IWCF Certified
              </span>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-8 lg:mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest">Rajiv Gandhi Institute of</p>
              <p className="text-white/60 text-sm font-medium">Petroleum Technology</p>
            </div>
            <div className="text-right">
              <p className="text-white/40 text-xs uppercase tracking-widest">Batch</p>
              <p className="text-white/60 text-sm font-medium">2023 - 2027</p>
            </div>
          </div>

          {/* Barcode */}
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-16 flex items-end gap-2">
            <div className="flex gap-[2px]">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white/30"
                  style={{
                    width: Math.random() > 0.5 ? '2px' : '1px',
                    height: `${20 + Math.random() * 15}px`
                  }}
                />
              ))}
            </div>
            <span className="text-white/30 text-[10px] tracking-wider">RGIPT-2023</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
