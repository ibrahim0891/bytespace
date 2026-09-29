import React from "react";
import Image from "next/image";
import Link from "next/link";
import { H2, Paragraph } from "@/app/components/Typography";
import { ArrowRight, Sparkles } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0055FF] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle Background Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Decorative Glow Circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4FF00]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold text-[#D4FF00] tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Become an Instructor
              </div>

              <H2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
                Unlock Your Potential as a Course Creator
              </H2>

              <Paragraph className="text-white/85 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Join our thriving creator community. Share your expertise with thousands of eager students worldwide and earn continuous income.
              </Paragraph>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/auth/register?role=creator"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D4FF00] hover:bg-[#bce400] text-zinc-950 font-bold text-sm sm:text-base transition-all transform hover:scale-[1.02] shadow-lg cursor-pointer"
                >
                  Join as Creator
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/search"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base transition-colors border border-white/20 cursor-pointer"
                >
                  Explore Platform
                </Link>
              </div>
            </div>

            {/* Right Visual 3D Decoration & Stats */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
                {/* Floating 3D cone/cylinder images if available */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col justify-between shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#D4FF00] tracking-wider uppercase">Creator Earnings</span>
                    <span className="text-xs text-white/70">Monthly avg</span>
                  </div>

                  <div className="my-auto text-center py-4">
                    <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">$4,850+</div>
                    <p className="text-xs sm:text-sm text-white/80 mt-1">Average top creator payout</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs text-white/80">
                    <span>1,000+ Active Creators</span>
                    <span className="text-[#D4FF00] font-semibold">98% Satisfaction</span>
                  </div>
                </div>

                {/* Floating 3D Cone decorative image */}
                <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 pointer-events-none animate-bounce duration-1000">
                  <Image
                    src="/hero section/Cone.png"
                    alt="3D Decorative Cone"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
