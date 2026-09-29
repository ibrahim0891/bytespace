"use client";

import React, { useState, useMemo } from "react";
import CourseCard, { CourseCardProps } from "@/app/components/CourseCard";
import { SlidersHorizontal, Signal, LayoutGrid, ArrowUpDown, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const allCreatorCourses: (CourseCardProps & { category: string })[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
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
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
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
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
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
    title: "Balancing Productivity and Life",
    author: "purepearl studio",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
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
    title: "Mastering Money Management",
    author: "purepearl studio",
    category: "Freelance & Entrepreneurship",
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
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    category: "Freelance & Entrepreneurship",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    href: "/course/1",
  },
  {
    id: 34,
    title: "Figma Design Systems at Scale",
    author: "purepearl studio",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "22 Lessons",
    duration: "3 hours 40 mins",
    commentsCount: "87 Comments",
    level: "Intermediate",
    price: "$36",
    pricePeriod: "/lifetime",
    href: "/course/1",
  },
];

const creatorCategories = [
  "All",
  "UI/UX Design",
  "Data Science",
  "Productivity",
  "Freelance & Entrepreneurship",
];

export const CreatorCoursesSection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string>("Most relevant");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const filteredAndSortedCourses = useMemo(() => {
    let list = allCreatorCourses.filter((course) => {
      if (selectedLevel !== "All" && course.level?.toLowerCase() !== selectedLevel.toLowerCase()) {
        return false;
      }
      if (selectedCategory !== "All" && course.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      return true;
    });

    switch (selectedSort) {
      case "Highest rated":
        return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "Newest":
        return list.sort((a, b) => Number(b.id || 0) - Number(a.id || 0));
      case "Price: Low to High":
        return list.sort((a, b) => {
          const pA = parseFloat(String(a.price).replace(/[^0-9.]/g, "")) || 0;
          const pB = parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0;
          return pA - pB;
        });
      case "Most relevant":
      default:
        return list;
    }
  }, [selectedLevel, selectedCategory, selectedSort]);

  return (
    <section className="w-full bg-[#FFFFFF] py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Top Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Left Action Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Level Pill with dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setShowLevelMenu(!showLevelMenu);
                  setShowCategoryMenu(false);
                  setShowSortMenu(false);
                }}
                className={`h-10 px-5 rounded-full border text-sm font-medium inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer select-none ${
                  selectedLevel !== "All"
                    ? "border-blue-600 bg-blue-50/50 text-blue-700"
                    : "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800"
                }`}
              >
                <Signal className="w-4 h-4 text-zinc-600" />
                <span>{selectedLevel !== "All" ? selectedLevel : "Level"}</span>
              </button>

              <AnimatePresence>
                {showLevelMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-44 bg-white border border-zinc-200 rounded-2xl shadow-xl py-1.5 z-40"
                  >
                    {["All", "Beginner", "Intermediate"].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(level);
                          setShowLevelMenu(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm hover:bg-zinc-50 flex items-center justify-between transition-colors ${
                          selectedLevel === level ? "text-blue-600 font-semibold bg-blue-50/30" : "text-zinc-800"
                        }`}
                      >
                        <span>{level}</span>
                        {selectedLevel === level && (
                          <Check className="w-4 h-4 text-blue-600" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Category Pill with dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setShowCategoryMenu(!showCategoryMenu);
                  setShowLevelMenu(false);
                  setShowSortMenu(false);
                }}
                className={`h-10 px-5 rounded-full border text-sm font-medium inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer select-none ${
                  selectedCategory !== "All"
                    ? "border-blue-600 bg-blue-50/50 text-blue-700"
                    : "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800"
                }`}
              >
                <LayoutGrid className="w-4 h-4 text-zinc-600" />
                <span>{selectedCategory !== "All" ? selectedCategory : "Category"}</span>
              </button>

              <AnimatePresence>
                {showCategoryMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-56 bg-white border border-zinc-200 rounded-2xl shadow-xl py-1.5 z-40"
                  >
                    {creatorCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setShowCategoryMenu(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm hover:bg-zinc-50 flex items-center justify-between transition-colors ${
                          selectedCategory === cat ? "text-blue-600 font-semibold bg-blue-50/30" : "text-zinc-800"
                        }`}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && (
                          <Check className="w-4 h-4 text-blue-600" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Reset Filters button if any active */}
            {(selectedLevel !== "All" || selectedCategory !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedLevel("All");
                  setSelectedCategory("All");
                }}
                className="h-10 px-4 text-xs font-semibold text-zinc-500 hover:text-zinc-900 inline-flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Right Sort Pill */}
          <div className="relative self-start sm:self-auto">
            <button
              type="button"
              onClick={() => {
                setShowSortMenu(!showSortMenu);
                setShowLevelMenu(false);
                setShowCategoryMenu(false);
              }}
              className="h-10 px-5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-medium inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer select-none"
            >
              <ArrowUpDown className="w-4 h-4 text-zinc-600" />
              <span>{selectedSort}</span>
            </button>

            <AnimatePresence>
              {showSortMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-2xl shadow-xl py-1.5 z-40"
                >
                  {["Most relevant", "Highest rated", "Newest", "Price: Low to High"].map(
                    (sortOpt) => (
                      <button
                        key={sortOpt}
                        type="button"
                        onClick={() => {
                          setSelectedSort(sortOpt);
                          setShowSortMenu(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm hover:bg-zinc-50 flex items-center justify-between transition-colors ${
                          selectedSort === sortOpt ? "text-blue-600 font-semibold bg-blue-50/30" : "text-zinc-800"
                        }`}
                      >
                        <span>{sortOpt}</span>
                        {selectedSort === sortOpt && (
                          <Check className="w-4 h-4 text-blue-600" />
                        )}
                      </button>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 3-Column Course Grid */}
        {filteredAndSortedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredAndSortedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="w-full py-12 text-center text-zinc-500 bg-zinc-50 rounded-2xl">
            No courses found for the selected filters.
          </div>
        )}
      </div>
    </section>
  );
};

export default CreatorCoursesSection;
