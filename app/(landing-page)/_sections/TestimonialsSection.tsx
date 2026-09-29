import React from "react";
import Image from "next/image";
import { H2, Paragraph } from "@/app/components/Typography";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "UX Design Student",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community.",
  },
  {
    name: "James Lawrence",
    role: "Full-Stack Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and depth of courses. The interactive approach makes it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex Rivera",
    role: "Course Creator & Mentor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "As a creator, ByteSpace has been a total game-changer. The course management tools are intuitive, monetization is seamless, and student engagement is significantly higher than other platforms.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-[#D4FB20]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003be2]/10 text-[#003be2] text-xs sm:text-sm font-semibold tracking-wide uppercase">
            Testimonials
          </div>
          <H2 className="text-zinc-950 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Discover What Our Community Is Saying
          </H2>
          <Paragraph className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            At ByteSpace, our vibrant community of learners and creators is at the heart of everything we build. Hear directly from those experiencing the platform every day.
          </Paragraph>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-300" />
                </div>

                {/* Quote */}
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-[#003be2]/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-950">
                    {t.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

