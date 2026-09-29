"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CourseCard from "@/app/components/CourseCard";
import { allCoursesList } from "@/app/data/courses";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const displayedCourses = useMemo(() => {
    if (selectedCategory === "Featured") {
      return allCoursesList.slice(0, 6);
    }

    const matched = allCoursesList.filter(
      (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
    );

    if (matched.length > 0) {
      return matched.slice(0, 6);
    }

    // Fallback if very few matches: show courses with matching title/author or related
    return allCoursesList.slice(0, 6);
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    if (category === "+ More") {
      router.push("/search");
      return;
    }
    setSelectedCategory(category);
  };

  return (
    <section className="w-full bg-[#FFFFFF] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col items-center gap-10 sm:gap-12 lg:gap-[42px]">
        {/* Header Block */}
        <div className="w-full max-w-[917px] mx-auto flex flex-col items-center text-center gap-4">
          <h2 className="w-full max-w-[588px] font-semibold text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] tracking-[-0.01em] text-[#040819]">
            Discover Your Passion, Build Your Skills
          </h2>

          <p className="w-full font-normal text-base sm:text-[18px] leading-[1.6] text-[#82868E]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Pills Stack: 3 Distinct Rows */}
        <div className="w-full flex flex-col items-center gap-4 sm:gap-4">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-[1086px]">
            {row1.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  type="button"
                  className={`h-[43px] px-5 py-3 rounded-[24px] text-[16px] leading-[1.2] font-medium transition-all duration-200 cursor-pointer select-none flex items-center justify-center whitespace-nowrap ${
                    isSelected
                      ? "bg-[#D4FB20] text-[#242528] shadow-xs scale-102 font-semibold"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaebee]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-[952px]">
            {row2.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  type="button"
                  className={`h-[43px] px-5 py-3 rounded-[24px] text-[16px] leading-[1.2] font-medium transition-all duration-200 cursor-pointer select-none flex items-center justify-center whitespace-nowrap ${
                    isSelected
                      ? "bg-[#D4FB20] text-[#242528] shadow-xs scale-102 font-semibold"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaebee]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-[622px]">
            {row3.map((category) => {
              const isSelected = selectedCategory === category;
              const isMore = category === "+ More";

              if (isMore) {
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    type="button"
                    className="h-[43px] px-5 py-3 rounded-[24px] text-[16px] leading-[1.2] font-medium text-[#003BE2] hover:underline cursor-pointer select-none flex items-center justify-center whitespace-nowrap"
                  >
                    {category}
                  </button>
                );
              }

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  type="button"
                  className={`h-[43px] px-5 py-3 rounded-[24px] text-[16px] leading-[1.2] font-medium transition-all duration-200 cursor-pointer select-none flex items-center justify-center whitespace-nowrap ${
                    isSelected
                      ? "bg-[#D4FB20] text-[#242528] shadow-xs scale-102 font-semibold"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaebee]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Filtered Courses Grid */}
        <div className="w-full pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {displayedCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Action: Explore More Courses */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={
              selectedCategory !== "Featured"
                ? `/search?category=${encodeURIComponent(selectedCategory)}`
                : "/search"
            }
            className="inline-flex items-center gap-2 h-[48px] px-7 rounded-[24px] bg-[#003BE2] hover:bg-[#002fb8] text-white font-medium text-[16px] leading-[1.2] transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
          >
            <span>
              {selectedCategory !== "Featured"
                ? `Explore All ${selectedCategory} Courses`
                : "Explore All Courses"}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
