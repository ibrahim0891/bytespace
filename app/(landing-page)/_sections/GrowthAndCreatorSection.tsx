import React from "react";
import Image from "next/image";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorFeatures = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const GrowthAndCreatorSection = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-20 lg:py-[120px] overflow-hidden">
      {/* Figma Exact Radial Glow Backgrounds (Group 5) */}
      {/* Ellipse 11: Top-Left Lime Glow */}
      <div
        className="pointer-events-none absolute w-[1137px] h-[1137px] rounded-full blur-[20px] z-0"
        style={{
          left: "calc(50% - 872px)",
          top: "-466px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* Ellipse 10: Top-Right Soft Blue Glow */}
      <div
        className="pointer-events-none absolute w-[1137px] h-[1137px] rounded-full blur-[20px] z-0"
        style={{
          left: "calc(50% + 91px)",
          top: "-458px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.0184) 53%, rgba(0, 59, 226, 0.0048) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      {/* Ellipse 9: Middle-Left Soft Blue Glow */}
      <div
        className="pointer-events-none absolute w-[1137px] h-[1137px] rounded-full blur-[20px] z-0"
        style={{
          left: "calc(50% - 1228px)",
          top: "183px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.0368) 53%, rgba(0, 59, 226, 0.0096) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      {/* Ellipse 8: Bottom-Right Blue Glow */}
      <div
        className="pointer-events-none absolute w-[1137px] h-[1137px] rounded-full blur-[20px] z-0"
        style={{
          left: "calc(50% + 2px)",
          top: "788px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)",
        }}
      />

      {/* Ellipse 12: Bottom-Left Lime Glow */}
      <div
        className="pointer-events-none absolute w-[672px] h-[672px] rounded-full blur-[20px] z-0"
        style={{
          left: "calc(50% - 1007px)",
          top: "946px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* Frame 16: Main Content Container */}
      <div className="relative z-10 max-w-[1258px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col gap-16 lg:gap-[72px]">
        {/* Frame 13: Block 1 - Professional Growth */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[63px]">
          {/* Left Text Block */}
          <div className="w-full lg:w-[574px] flex flex-col items-start gap-8 lg:gap-10">
            {/* Heading M */}
            <h2 className="w-full lg:w-[577px] font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-[#242528]">
              Your Path to Professional Growth Starts Here!
            </h2>

            {/* Body L */}
            <p className="w-full lg:w-[477px] font-normal text-base sm:text-[18px] leading-[1.6] text-[#4B4C53]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Metrics Row */}
            <div className="flex flex-row items-end gap-10 sm:gap-[56px] pt-1">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <span className="font-medium text-3xl sm:text-[36px] leading-[44px] tracking-[-0.01em] text-[#003BE2]">
                    {stat.value}
                  </span>
                  <span className="font-normal text-base sm:text-[18px] leading-[1.6] text-[#4B4C53]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image (Frame 11) */}
          <div className="w-full lg:w-[621px] flex justify-center items-center">
            <div className="relative w-full max-w-[621px]">
              <Image
                src="/ByteSpace New Check website (Copy)/Frame 11.png"
                alt="Professional Growth"
                width={621}
                height={552}
                priority
                className="w-full h-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Frame 14: Block 2 - Create & Manage Courses */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[79px]">
          {/* Left Visual Image (Frame 12) */}
          <div className="w-full lg:w-[541px] flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[541px]">
              <Image
                src="/ByteSpace New Check website (Copy)/Frame 12.png"
                alt="Create & Manage Courses"
                width={541}
                height={596}
                priority
                className="w-full h-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>

          {/* Right Text Block */}
          <div className="w-full lg:w-[580px] flex flex-col items-start gap-8 lg:gap-10 order-1 lg:order-2">
            {/* Heading M */}
            <h2 className="w-full lg:w-[391px] font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-[#242528]">
              Create &amp; Manage Courses Easily.
            </h2>

            {/* Body L Bold */}
            <p className="w-full lg:w-[574px] font-bold text-base sm:text-[18px] leading-[1.56] text-[#242528]">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Features Checklist */}
            <div className="flex flex-col items-start gap-4">
              {creatorFeatures.map((feature, idx) => (
                <div key={idx} className="flex flex-row items-center gap-2">
                  {/* Style=Filled Vector Checkmark: 24x24 */}
                  <svg
                    className="w-6 h-6 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" fill="#003BE2" />
                    <path
                      d="M8.5 12.5L11 15L15.5 9.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-medium text-base sm:text-[18px] leading-[1.2] text-[#242528]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthAndCreatorSection;
