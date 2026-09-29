"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CourseCard from "@/app/components/CourseCard";
import { allCoursesList } from "@/app/data/courses";
import {
  SlidersHorizontal,
  Signal,
  LayoutGrid,
  Menu,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Featured",
  "UI/UX Design",
  "Web Development",
  "Marketing",
  "Animation",
  "Digital Illustration",
  "Music",
  "Drawing & Painting",
  "Social Media",
  "Data Science",
  "Creative Marketing",
  "Cooking",
  "Photography",
  "Film & Video",
  "Freelance & Entrepreneurship",
  "Crafts",
  "Productivity",
];

const sortOptions = [
  "Most relevant",
  "Highest rated",
  "Newest courses",
  "Price: Low to High",
  "Price: High to Low",
];

const levelOptions = ["All Levels", "Beginner", "Intermediate", "Expert"];
const priceRangeOptions = ["All Prices", "Under $25", "$25 to $35", "$35+"];

const ITEMS_PER_PAGE = 12;

export const SearchResultsSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryParam = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || "";

  const [activeCategory, setActiveCategory] = useState<string>("Featured");
  const [selectedSort, setSelectedSort] = useState<string>("Most relevant");
  const [selectedLevel, setSelectedLevel] = useState<string>("All Levels");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("All Prices");
  const [minRating, setMinRating] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Dropdown states
  const [sortOpen, setSortOpen] = useState<boolean>(false);
  const [levelOpen, setLevelOpen] = useState<boolean>(false);
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  // Sync category param from URL if present
  useEffect(() => {
    if (categoryParam) {
      const match = categories.find(
        (c) => c.toLowerCase() === categoryParam.toLowerCase()
      );
      if (match) {
        setActiveCategory(match);
      }
    } else {
      setActiveCategory("Featured");
    }
  }, [categoryParam]);

  // Reset pagination when any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, selectedSort, selectedLevel, selectedPriceRange, minRating, queryParam]);

  // Comprehensive filtering
  const filteredCourses = useMemo(() => {
    return allCoursesList.filter((course) => {
      // 1. Search query filter
      if (queryParam.trim()) {
        const q = queryParam.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesAuthor = course.author?.toLowerCase().includes(q);
        const matchesCategory = course.category?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesAuthor && !matchesCategory) {
          return false;
        }
      }

      // 2. Category filter
      if (activeCategory !== "Featured" && activeCategory !== "All") {
        if (course.category.toLowerCase() !== activeCategory.toLowerCase()) {
          return false;
        }
      }

      // 3. Level filter
      if (selectedLevel !== "All Levels") {
        if (course.level?.toLowerCase() !== selectedLevel.toLowerCase()) {
          return false;
        }
      }

      // 4. Price range filter
      if (selectedPriceRange !== "All Prices") {
        const numericPrice =
          typeof course.price === "number"
            ? course.price
            : parseFloat(String(course.price).replace(/[^0-9.]/g, "")) || 0;

        if (selectedPriceRange === "Under $25" && numericPrice >= 25) return false;
        if (selectedPriceRange === "$25 to $35" && (numericPrice < 25 || numericPrice > 35))
          return false;
        if (selectedPriceRange === "$35+" && numericPrice < 35) return false;
      }

      // 5. Rating filter
      if (minRating > 0) {
        if ((course.rating || 0) < minRating) return false;
      }

      return true;
    });
  }, [queryParam, activeCategory, selectedLevel, selectedPriceRange, minRating]);

  // Sorting
  const sortedCourses = useMemo(() => {
    const list = [...filteredCourses];

    switch (selectedSort) {
      case "Highest rated":
        return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "Newest courses":
        return list.sort((a, b) => Number(b.id || 0) - Number(a.id || 0));
      case "Price: Low to High":
        return list.sort((a, b) => {
          const pA = parseFloat(String(a.price).replace(/[^0-9.]/g, "")) || 0;
          const pB = parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0;
          return pA - pB;
        });
      case "Price: High to Low":
        return list.sort((a, b) => {
          const pA = parseFloat(String(a.price).replace(/[^0-9.]/g, "")) || 0;
          const pB = parseFloat(String(b.price).replace(/[^0-9.]/g, "")) || 0;
          return pB - pA;
        });
      case "Most relevant":
      default:
        return list;
    }
  }, [filteredCourses, selectedSort]);

  const totalPages = Math.ceil(sortedCourses.length / ITEMS_PER_PAGE) || 1;
  const paginatedCourses = sortedCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const activeFiltersCount =
    (selectedLevel !== "All Levels" ? 1 : 0) +
    (selectedPriceRange !== "All Prices" ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (activeCategory !== "Featured" ? 1 : 0);

  const resetAllFilters = () => {
    setActiveCategory("Featured");
    setSelectedLevel("All Levels");
    setSelectedPriceRange("All Prices");
    setMinRating(0);
    setSelectedSort("Most relevant");
    if (queryParam) {
      router.push("/search");
    }
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Filter & Sort Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left Action Buttons: Filter, Level, Category */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setFilterModalOpen(!filterModalOpen);
                  setLevelOpen(false);
                  setCategoryOpen(false);
                  setSortOpen(false);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all shadow-xs cursor-pointer select-none ${
                  activeFiltersCount > 0
                    ? "border-[#003be2] bg-blue-50 text-[#003be2]"
                    : "border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filter</span>
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#003be2] text-white text-xs flex items-center justify-center font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Filter Popover Dialog */}
              <AnimatePresence>
                {filterModalOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-zinc-200 p-6 z-50"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                      <div className="flex items-center gap-2">
                        <SlidersHorizontal className="w-4 h-4 text-[#003be2]" />
                        <h4 className="font-semibold text-zinc-900 text-base">Filter Courses</h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFilterModalOpen(false)}
                        className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="py-4 space-y-5">
                      {/* Level */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                          Skill Level
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {levelOptions.map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => setSelectedLevel(lvl)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                selectedLevel === lvl
                                  ? "bg-[#003be2] text-white shadow-xs"
                                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                              }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price Range */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                          Price Range
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {priceRangeOptions.map((pr) => (
                            <button
                              key={pr}
                              type="button"
                              onClick={() => setSelectedPriceRange(pr)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                selectedPriceRange === pr
                                  ? "bg-[#003be2] text-white shadow-xs"
                                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                              }`}
                            >
                              {pr}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Minimum Rating */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                          Minimum Rating
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { label: "All Ratings", val: 0 },
                            { label: "4.5+ Stars", val: 4.5 },
                            { label: "4.8+ Stars", val: 4.8 },
                          ].map((item) => (
                            <button
                              key={item.label}
                              type="button"
                              onClick={() => setMinRating(item.val)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                minRating === item.val
                                  ? "bg-[#003be2] text-white shadow-xs"
                                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                      <button
                        type="button"
                        onClick={resetAllFilters}
                        className="text-xs font-medium text-zinc-500 hover:text-zinc-900 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset All</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFilterModalOpen(false)}
                        className="px-5 py-2 rounded-full bg-[#D4FB20] hover:bg-[#c6f000] text-zinc-950 font-semibold text-xs transition-colors cursor-pointer shadow-sm"
                      >
                        Apply Filters ({filteredCourses.length})
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Level Quick Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setLevelOpen(!levelOpen);
                  setCategoryOpen(false);
                  setSortOpen(false);
                  setFilterModalOpen(false);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors shadow-xs cursor-pointer select-none ${
                  selectedLevel !== "All Levels"
                    ? "border-[#003be2] text-[#003be2] bg-blue-50/50"
                    : "border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                <Signal className="w-4 h-4 text-zinc-600" />
                <span>{selectedLevel === "All Levels" ? "Level" : selectedLevel}</span>
              </button>

              <AnimatePresence>
                {levelOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-zinc-100 py-1.5 z-40"
                  >
                    {levelOptions.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setLevelOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-zinc-50 transition-colors ${
                          selectedLevel === lvl ? "text-[#003be2] font-semibold bg-blue-50/40" : "text-zinc-700"
                        }`}
                      >
                        <span>{lvl}</span>
                        {selectedLevel === lvl && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setCategoryOpen(!categoryOpen);
                  setLevelOpen(false);
                  setSortOpen(false);
                  setFilterModalOpen(false);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors shadow-xs cursor-pointer select-none ${
                  activeCategory !== "Featured"
                    ? "border-[#003be2] text-[#003be2] bg-blue-50/50"
                    : "border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                <LayoutGrid className="w-4 h-4 text-zinc-600" />
                <span>{activeCategory === "Featured" ? "Category" : activeCategory}</span>
              </button>

              <AnimatePresence>
                {categoryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-56 max-h-80 overflow-y-auto bg-white rounded-2xl shadow-xl border border-zinc-100 py-1.5 z-40"
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setActiveCategory(cat);
                          setCategoryOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-zinc-50 transition-colors ${
                          activeCategory === cat ? "text-[#003be2] font-semibold bg-blue-50/40" : "text-zinc-700"
                        }`}
                      >
                        <span>{cat}</span>
                        {activeCategory === cat && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Sort Dropdown */}
          <div className="relative self-end sm:self-auto">
            <button
              type="button"
              onClick={() => {
                setSortOpen(!sortOpen);
                setLevelOpen(false);
                setCategoryOpen(false);
                setFilterModalOpen(false);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-800 hover:bg-zinc-50 transition-colors shadow-xs cursor-pointer select-none"
            >
              <Menu className="w-4 h-4 text-zinc-600" />
              <span>{selectedSort}</span>
            </button>

            <AnimatePresence>
              {sortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-zinc-100 py-1.5 z-40"
                >
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSelectedSort(opt);
                        setSortOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-zinc-50 transition-colors ${
                        selectedSort === opt ? "text-[#003be2] font-semibold bg-blue-50/40" : "text-zinc-700"
                      }`}
                    >
                      <span>{opt}</span>
                      {selectedSort === opt && <Check className="w-3.5 h-3.5 text-[#003be2]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Category Pills Row */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                }}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-150 cursor-pointer select-none ${
                  isActive
                    ? "bg-[#D4FB20] text-zinc-950 font-bold shadow-xs scale-102"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 font-medium"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Active Filter Tags Summary */}
        {(activeCategory !== "Featured" || selectedLevel !== "All Levels" || selectedPriceRange !== "All Prices" || minRating > 0 || queryParam) && (
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-zinc-500 font-medium">Active filters:</span>
            {queryParam && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                Search: &ldquo;{queryParam}&rdquo;
                <button
                  type="button"
                  onClick={() => router.push("/search")}
                  className="hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {activeCategory !== "Featured" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#003be2] font-medium">
                {activeCategory}
                <button
                  type="button"
                  onClick={() => setActiveCategory("Featured")}
                  className="hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedLevel !== "All Levels" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                Level: {selectedLevel}
                <button
                  type="button"
                  onClick={() => setSelectedLevel("All Levels")}
                  className="hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedPriceRange !== "All Prices" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                Price: {selectedPriceRange}
                <button
                  type="button"
                  onClick={() => setSelectedPriceRange("All Prices")}
                  className="hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {minRating > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 font-medium">
                Rating: {minRating}+ Stars
                <button
                  type="button"
                  onClick={() => setMinRating(0)}
                  className="hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-[#003be2] hover:underline font-semibold ml-2 cursor-pointer"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Course Cards Grid */}
        {paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {paginatedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="w-full py-16 px-4 text-center flex flex-col items-center justify-center gap-4 bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-[#003be2] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">No courses found</h3>
            <p className="text-sm text-zinc-500 max-w-md">
              We couldn&apos;t find any courses matching your selected filters. Try broadening your
              search criteria or reset your filters.
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#003be2] text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Dynamic Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 pt-12 sm:pt-16">
            {/* Previous Page */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-full text-sm transition-colors cursor-pointer ${
                  currentPage === page
                    ? "font-bold text-zinc-950 bg-[#D4FB20] shadow-xs"
                    : "font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Page */}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResultsSection;
