'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="page-section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Side - Contact Info */}
          <div className="relative">
            <span className="section-number">C</span>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#8b7355] mb-4">Get In Touch</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] leading-none mb-8">
              LET&apos;S<br/>
              <span className="italic text-[#c9a962]">Connect</span>
            </h2>

            <div className="w-24 h-1 bg-[#c9a962] mb-8" />

            <p className="text-[#666] leading-relaxed mb-12 max-w-md">
              Interested in discussing petroleum engineering, research collaborations,
              or professional opportunities? I&apos;d love to hear from you.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:23pe3035@rgipt.ac.in"
                className="flex items-center gap-4 p-4 bg-[#f5f3ef] hover:bg-[#e8e4dc] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                  <span className="text-[#c9a962]">✉️</span>
                </div>
                <div>
                  <p className="text-xs text-[#8b7355] uppercase tracking-wider">University Email</p>
                  <p className="text-[#2d2d2d] group-hover:text-[#c9a962] transition-colors">
                    23pe3035@rgipt.ac.in
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact2me902@gmail.com"
                className="flex items-center gap-4 p-4 bg-[#f5f3ef] hover:bg-[#e8e4dc] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                  <span className="text-[#c9a962]">📧</span>
                </div>
                <div>
                  <p className="text-xs text-[#8b7355] uppercase tracking-wider">Personal Email</p>
                  <p className="text-[#2d2d2d] group-hover:text-[#c9a962] transition-colors">
                    contact2me902@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919528100958"
                className="flex items-center gap-4 p-4 bg-[#f5f3ef] hover:bg-[#e8e4dc] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                  <span className="text-[#c9a962]">📱</span>
                </div>
                <div>
                  <p className="text-xs text-[#8b7355] uppercase tracking-wider">Mobile</p>
                  <p className="text-[#2d2d2d] group-hover:text-[#c9a962] transition-colors">
                    +91 9528100958
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/prabhat-0043ba290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#1a1a1a] hover:bg-[#2d2d2d] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#c9a962] flex items-center justify-center">
                  <span className="text-[#1a1a1a]">in</span>
                </div>
                <div>
                  <p className="text-xs text-[#c9a962] uppercase tracking-wider">LinkedIn Profile</p>
                  <p className="text-white group-hover:text-[#c9a962] transition-colors">
                    Connect on LinkedIn →
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Card */}
          <div className="relative">
            {/* Magazine-style Profile Card */}
            <div className="bg-[#1a1a1a] p-8 md:p-12 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#c9a962]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#c9a962]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto mb-8 rounded-full image-placeholder bg-gradient-to-br from-[#3d3d3d] to-[#2d2d2d] border-4 border-[#c9a962]">
                  <span className="text-white/60 text-xs">Photo</span>
                </div>

                <div className="text-center">
                  <p className="text-[#c9a962] text-xs font-medium uppercase tracking-[0.3em] mb-2">
                    Petroleum Engineer
                  </p>
                  <h3 className="font-serif text-4xl text-white mb-2">
                    Prabhat
                  </h3>
                  <p className="text-white/60 text-sm mb-6">
                    B.Tech Petroleum Engineering | RGIPT
                  </p>

                  <div className="w-16 h-[1px] bg-[#c9a962] mx-auto mb-6" />

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div>
                      <p className="font-serif text-2xl text-[#c9a962]">7.5</p>
                      <p className="text-white/40 text-xs">CPI</p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-[#c9a962]">2027</p>
                      <p className="text-white/40 text-xs">Batch</p>
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-[#c9a962]">5+</p>
                      <p className="text-white/40 text-xs">Roles</p>
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="text-left space-y-3 p-4 bg-white/5 rounded">
                    <div className="flex justify-between">
                      <span className="text-white/40 text-sm">Date of Birth</span>
                      <span className="text-white text-sm">28 September 2003</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40 text-sm">Location</span>
                      <span className="text-white text-sm">Bareilly, UP</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40 text-sm">Institute</span>
                      <span className="text-white text-sm">RGIPT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c9a962] -z-10" />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-[#e8e4dc]">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <p className="masthead text-2xl text-[#2d2d2d]">PETROVIEW</p>
              <p className="text-xs text-[#8b7355] mt-1">Magazine Portfolio</p>
            </div>

            <div className="text-center">
              <p className="text-xs text-[#8b7355] uppercase tracking-wider">
                Issue 01 • December 2024
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-[#8b7355]">
                Designed with passion
              </p>
              <p className="text-xs text-[#8b7355]">
                © 2024 Prabhat. All rights reserved.
              </p>
            </div>
          </div>

          {/* Back to Top */}
          <div className="mt-12 text-center">
            <a
              href="#cover"
              className="inline-flex items-center gap-2 text-[#8b7355] hover:text-[#c9a962] transition-colors text-sm"
            >
              <span className="rotate-180">↓</span>
              Back to Cover
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
