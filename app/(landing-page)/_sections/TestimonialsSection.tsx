import React from "react";
import Image from "next/image";
import Container from "@/app/components/Container";

interface TestimonialItem {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-16 lg:py-[74px] overflow-hidden">
      {/* Figma Radial Glow Backgrounds */}
      {/* Ellipse 11: Top Right Lime Glow */}
      <div
        className="pointer-events-none absolute w-[1137px] h-[1137px] rounded-full blur-[20px] z-0"
        style={{
          left: "calc(50% + 122px)",
          top: "-241px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* Ellipse 12: Top Center-Right Lime Glow */}
      <div
        className="pointer-events-none absolute w-[672px] h-[672px] rounded-full blur-[20px] z-0"
        style={{
          left: "calc(50% - 325px)",
          top: "-138px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* Ellipse 8: Bottom Left Blue Glow */}
      <div
        className="pointer-events-none absolute w-[1137px] h-[1137px] rounded-full blur-[20px] z-0"
        style={{
          left: "calc(50% - 1162px)",
          top: "149px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      {/* Content Container */}
      <Container className="relative z-10 flex flex-col gap-12 lg:gap-[72px]">
        {/* Header Text Block (Figma: width 1200px, height 145px, gap 43px, items-end) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-[43px]">
          {/* Discover What Our Community Is Saying (Figma: 577px, Poppins 600, 44px, 120%, -0.01em, #000000) */}
          <h2 className="lg:w-[577px] shrink-0 font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-[#000000]">
            Discover What Our Community Is Saying
          </h2>

          {/* Subtitle / Description (Figma: 580px, Satoshi/Sans 400, 18px, 160%, #4F4F4F) */}
          <p className="lg:w-[580px] shrink-0 font-normal text-base sm:text-[18px] leading-[1.6] text-[#4F4F4F]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial Cards Grid (Figma: width 1204px, gap 41px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[41px]">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="w-full lg:w-[374px] bg-[#FFFFFF] rounded-[24px] p-6 flex flex-col items-start gap-6 shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              {/* Ellipse Avatar: 80x80 */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 bg-zinc-100">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              {/* Name & Role (Vertical Auto Layout: gap 0, height 53px-57px) */}
              <div className="flex flex-col items-start">
                {/* Name: Poppins 600, 20px, 120%, #000000 */}
                <h3 className="font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-[#000000]">
                  {t.name}
                </h3>
                {/* Role: Satoshi 400, 18px, 160%, #003BE2 */}
                <span className="font-normal text-[18px] leading-[1.6] text-[#003BE2]">
                  {t.role}
                </span>
              </div>

              {/* Quote Body: Satoshi 400, 18px, 160%, #4F4F4F */}
              <p className="font-normal text-base sm:text-[18px] leading-[1.6] text-[#4F4F4F]">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
