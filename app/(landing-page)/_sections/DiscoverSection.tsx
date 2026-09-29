"use client";

import React, { useState } from "react";

const row1 = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

const row2 = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];

const row3 = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

export const DiscoverSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col items-center gap-10 sm:gap-12 lg:gap-[42px]">
        {/* Frame 3: Header Block (width: 917px, gap: 16px) */}
        <div className="w-full max-w-[917px] mx-auto flex flex-col items-center text-center gap-4">
          {/* Heading M: Poppins 600, 44px, 120%, -0.01em, #040819 */}
          <h2 className="w-full max-w-[588px] font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-[#040819]">
            Discover Your Passion, Build Your Skills
          </h2>

          {/* Body L: Satoshi 400, 18px, 160%, #82868E */}
          <p className="w-full font-normal text-base sm:text-[18px] leading-[1.6] text-[#82868E]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Pills Stack: 3 Distinct Rows with 16px gaps */}
        <div className="w-full flex flex-col items-center gap-4 sm:gap-4">
          {/* Row 1: Tab_Categories (max-w 1086px) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-[1086px]">
            {row1.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  type="button"
                  className={`h-[43px] px-4 py-3 rounded-[24px] text-[16px] leading-[1.2] font-medium transition-all duration-200 cursor-pointer select-none flex items-center justify-center whitespace-nowrap ${
                    isSelected
                      ? "bg-[#D4FB20] text-[#242528] shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaebee]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Row 2: Frame 6 (max-w 952px) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-[952px]">
            {row2.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  type="button"
                  className={`h-[43px] px-4 py-3 rounded-[24px] text-[16px] leading-[1.2] font-medium transition-all duration-200 cursor-pointer select-none flex items-center justify-center whitespace-nowrap ${
                    isSelected
                      ? "bg-[#D4FB20] text-[#242528] shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaebee]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Row 3: Frame 7 (max-w 622px) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-[622px]">
            {row3.map((category) => {
              const isSelected = selectedCategory === category;
              const isMore = category === "+ More";

              if (isMore) {
                return (
                  <button
                    key={category}
                    type="button"
                    className="h-[43px] px-4 py-3 rounded-[24px] text-[16px] leading-[1.2] font-medium text-[#003BE2] hover:underline cursor-pointer select-none flex items-center justify-center whitespace-nowrap"
                  >
                    {category}
                  </button>
                );
              }

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  type="button"
                  className={`h-[43px] px-4 py-3 rounded-[24px] text-[16px] leading-[1.2] font-medium transition-all duration-200 cursor-pointer select-none flex items-center justify-center whitespace-nowrap ${
                    isSelected
                      ? "bg-[#D4FB20] text-[#242528] shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaebee]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
