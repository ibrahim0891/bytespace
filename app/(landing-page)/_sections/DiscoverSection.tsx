"use client";

import React, { useState } from "react";
import { H2, Paragraph } from "@/app/components/Typography";

const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
   
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
    "+ More",
  ],
];

export const DiscoverSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <H2 className="text-zinc-950 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
          Discover Your Passion, <br />
          Build Your Skills
        </H2>

        {/* Subtitle */}
        <Paragraph className="text-gray-900 text-sm sm:text-base max-w-5xl mx-auto mt-4 leading-relaxed font-normal">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </Paragraph>

        {/* Category Pills Stack */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3 sm:gap-3.5">
          {categoryRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-5 sm:gap-6"
            >
              {row.map((category) => {
                const isSelected = selectedCategory === category;
                const isMore = category === "+ More";

                return (
                  <button
                    key={category}
                    onClick={() => {
                      if (!isMore) setSelectedCategory(category);
                    }}
                    type="button"
                    className={`rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm transition-colors duration-150 cursor-pointer select-none font-medium ${
                      isSelected
                        ? "bg-[#D4FF00] text-zinc-950 font-semibold"
                        : isMore
                        ? "bg-transparent text-blue-600 hover:text-blue-700 font-semibold px-3"
                        : "bg-[#F4F4F6] hover:bg-zinc-200 text-zinc-700"
                    }`.trim()}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
