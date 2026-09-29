"use client";

import React, { useState } from "react";
import CourseCard, { CourseCardProps } from "@/app/components/CourseCard";
import { SlidersHorizontal, Signal, LayoutGrid, ArrowUpDown, Check } from "lucide-react";

const allCreatorCourses: CourseCardProps[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    href: "/course/1",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    href: "/course/1",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    href: "/course/1",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    href: "/course/1",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    href: "/course/1",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    href: "/course/1",
  },
];

export const CreatorCoursesSection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string>("Most relevant");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const filteredCourses = allCreatorCourses.filter((course) => {
    if (selectedLevel === "All") return true;
    return course.level?.toLowerCase() === selectedLevel.toLowerCase();
  });

  return (
    <section className="w-full bg-[#FFFFFF] py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Top Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Left Action Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Pill */}
            <button
              type="button"
              className="h-10 px-5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-medium inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-zinc-600" />
              <span>Filter</span>
            </button>

            {/* Level Pill with dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowLevelMenu(!showLevelMenu)}
                className={`h-10 px-5 rounded-full border text-sm font-medium inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer ${
                  selectedLevel !== "All"
                    ? "border-blue-600 bg-blue-50/50 text-blue-700"
                    : "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800"
                }`}
              >
                <Signal className="w-4 h-4 text-zinc-600" />
                <span>{selectedLevel !== "All" ? selectedLevel : "Level"}</span>
              </button>

              {showLevelMenu && (
                <div className="absolute left-0 mt-2 w-44 bg-white border border-zinc-200 rounded-2xl shadow-lg py-1 z-30">
                  {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => {
                        setSelectedLevel(level);
                        setShowLevelMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-50 flex items-center justify-between text-zinc-800"
                    >
                      <span>{level}</span>
                      {selectedLevel === level && (
                        <Check className="w-4 h-4 text-blue-600" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Pill */}
            <button
              type="button"
              className="h-10 px-5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-medium inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <LayoutGrid className="w-4 h-4 text-zinc-600" />
              <span>Category</span>
            </button>
          </div>

          {/* Right Sort Pill */}
          <div className="relative self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="h-10 px-5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-medium inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <ArrowUpDown className="w-4 h-4 text-zinc-600" />
              <span>{selectedSort}</span>
            </button>

            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-2xl shadow-lg py-1 z-30">
                {["Most relevant", "Highest rated", "Newest", "Price: Low to High"].map(
                  (sortOpt) => (
                    <button
                      key={sortOpt}
                      type="button"
                      onClick={() => {
                        setSelectedSort(sortOpt);
                        setShowSortMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-50 flex items-center justify-between text-zinc-800"
                    >
                      <span>{sortOpt}</span>
                      {selectedSort === sortOpt && (
                        <Check className="w-4 h-4 text-blue-600" />
                      )}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        {/* 3-Column Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorCoursesSection;
