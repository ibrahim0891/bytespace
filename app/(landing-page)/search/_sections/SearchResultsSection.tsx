"use client";

import React, { useState } from "react";
import CourseCard, { CourseCardProps } from "@/app/components/CourseCard";
import {
  SlidersHorizontal,
  Signal,
  LayoutGrid,
  Menu,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const allCoursesData: CourseCardProps[] = [
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
  },
  {
    id: 4,
    title: "Balancing Productivity and Life",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
  },
  {
    id: 5,
    title: "Mastering Money Management",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
  },
  {
    id: 7,
    title: "Advanced Next.js & React Fullstack",
    author: "codelab studio",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "24 Lessons",
    duration: "4 hours 30 mins",
    commentsCount: "112 Comments",
    level: "Expert",
    price: "$39",
    pricePeriod: "/lifetime",
  },
  {
    id: 8,
    title: "Typography & Brand Identity",
    author: "studio aura",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    lessonsCount: "14 Lessons",
    duration: "1 hour 50 mins",
    commentsCount: "43 Comments",
    level: "Intermediate",
    price: "$22",
    pricePeriod: "/lifetime",
  },
  {
    id: 9,
    title: "Complete 3D Blender Animation",
    author: "renderverse",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    lessonsCount: "28 Lessons",
    duration: "5 hours 10 mins",
    commentsCount: "86 Comments",
    level: "Intermediate",
    price: "$35",
    pricePeriod: "/lifetime",
  },
  {
    id: 10,
    title: "Digital Illustration & Concept Art",
    author: "pixelcraft",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "20 Lessons",
    duration: "3 hours 15 mins",
    commentsCount: "78 Comments",
    level: "Beginner",
    price: "$28",
    pricePeriod: "/lifetime",
  },
  {
    id: 11,
    title: "Social Media Growth Masterclass",
    author: "viralmedia lab",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
    lessonsCount: "16 Lessons",
    duration: "2 hours 40 mins",
    commentsCount: "64 Comments",
    level: "Beginner",
    price: "$20",
    pricePeriod: "/lifetime",
  },
  {
    id: 12,
    title: "AI-Powered Product Design & UX",
    author: "neural design",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "19 Lessons",
    duration: "3 hours 00 mins",
    commentsCount: "95 Comments",
    level: "Intermediate",
    price: "$32",
    pricePeriod: "/lifetime",
  },
  {
    id: 13,
    title: "Gourmet Artisan Baking & Cooking",
    author: "chef table",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    lessonsCount: "15 Lessons",
    duration: "2 hours 20 mins",
    commentsCount: "52 Comments",
    level: "Beginner",
    price: "$19",
    pricePeriod: "/lifetime",
  },
  {
    id: 14,
    title: "Music Production in Ableton Live",
    author: "soundwave audio",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    lessonsCount: "22 Lessons",
    duration: "3 hours 45 mins",
    commentsCount: "68 Comments",
    level: "Intermediate",
    price: "$30",
    pricePeriod: "/lifetime",
  },
  {
    id: 15,
    title: "Data Science & Python Bootcamp",
    author: "byte analytics",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "32 Lessons",
    duration: "6 hours 10 mins",
    commentsCount: "140 Comments",
    level: "Expert",
    price: "$45",
    pricePeriod: "/lifetime",
  },
  {
    id: 16,
    title: "Creative Copywriting & Messaging",
    author: "wordcraft studio",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    lessonsCount: "12 Lessons",
    duration: "1 hour 45 mins",
    commentsCount: "39 Comments",
    level: "Beginner",
    price: "$18",
    pricePeriod: "/lifetime",
  },
  {
    id: 17,
    title: "Mobile App Design in iOS & Android",
    author: "appworks lab",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    lessonsCount: "21 Lessons",
    duration: "3 hours 30 mins",
    commentsCount: "83 Comments",
    level: "Intermediate",
    price: "$29",
    pricePeriod: "/lifetime",
  },
  {
    id: 18,
    title: "Cinematography & Video Editing",
    author: "lumen films",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "25 Lessons",
    duration: "4 hours 15 mins",
    commentsCount: "105 Comments",
    level: "Intermediate",
    price: "$34",
    pricePeriod: "/lifetime",
  },
  {
    id: 19,
    title: "Brand Strategy & Visual Identity",
    author: "origin agency",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    lessonsCount: "18 Lessons",
    duration: "2 hours 55 mins",
    commentsCount: "71 Comments",
    level: "Beginner",
    price: "$26",
    pricePeriod: "/lifetime",
  },
  {
    id: 20,
    title: "Webflow & No-Code Development",
    author: "nocodify",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    lessonsCount: "16 Lessons",
    duration: "2 hours 35 mins",
    commentsCount: "58 Comments",
    level: "Beginner",
    price: "$24",
    pricePeriod: "/lifetime",
  },
  {
    id: 21,
    title: "Modern Acrylic & Oil Painting",
    author: "atelier art",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "14 Lessons",
    duration: "2 hours 10 mins",
    commentsCount: "47 Comments",
    level: "Beginner",
    price: "$21",
    pricePeriod: "/lifetime",
  },
  {
    id: 22,
    title: "Financial Modeling & Investments",
    author: "capital insights",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    lessonsCount: "23 Lessons",
    duration: "3 hours 50 mins",
    commentsCount: "89 Comments",
    level: "Expert",
    price: "$38",
    pricePeriod: "/lifetime",
  },
  {
    id: 23,
    title: "Search Engine Optimization (SEO)",
    author: "rankpro lab",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=80",
    rating: 4.6,
    lessonsCount: "15 Lessons",
    duration: "2 hours 25 mins",
    commentsCount: "62 Comments",
    level: "Intermediate",
    price: "$23",
    pricePeriod: "/lifetime",
  },
  {
    id: 24,
    title: "Game Design & Unity 3D Engine",
    author: "polyforge games",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "30 Lessons",
    duration: "5 hours 40 mins",
    commentsCount: "128 Comments",
    level: "Expert",
    price: "$42",
    pricePeriod: "/lifetime",
  },
  {
    id: 25,
    title: "Cloud DevOps with AWS & Docker",
    author: "cloud architects",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "26 Lessons",
    duration: "4 hours 50 mins",
    commentsCount: "115 Comments",
    level: "Expert",
    price: "$40",
    pricePeriod: "/lifetime",
  },
  {
    id: 26,
    title: "Vocal Techniques & Songwriting",
    author: "melody house",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    lessonsCount: "13 Lessons",
    duration: "1 hour 55 mins",
    commentsCount: "41 Comments",
    level: "Beginner",
    price: "$20",
    pricePeriod: "/lifetime",
  },
  {
    id: 27,
    title: "Motion Graphics in After Effects",
    author: "kinetic visual",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    lessonsCount: "22 Lessons",
    duration: "3 hours 40 mins",
    commentsCount: "77 Comments",
    level: "Intermediate",
    price: "$31",
    pricePeriod: "/lifetime",
  },
  {
    id: 28,
    title: "Culinary Masterclass: Global Tastes",
    author: "epicurean hub",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    lessonsCount: "16 Lessons",
    duration: "2 hours 30 mins",
    commentsCount: "56 Comments",
    level: "Beginner",
    price: "$22",
    pricePeriod: "/lifetime",
  },
  {
    id: 29,
    title: "Growth Marketing & Ad Strategies",
    author: "scaleup studio",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    lessonsCount: "17 Lessons",
    duration: "2 hours 45 mins",
    commentsCount: "66 Comments",
    level: "Intermediate",
    price: "$27",
    pricePeriod: "/lifetime",
  },
  {
    id: 30,
    title: "Cybersecurity & Network Defense",
    author: "cyberguard academy",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "27 Lessons",
    duration: "4 hours 40 mins",
    commentsCount: "120 Comments",
    level: "Expert",
    price: "$39",
    pricePeriod: "/lifetime",
  },
  {
    id: 31,
    title: "Fullstack TypeScript & GraphQL API",
    author: "codelab studio",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "28 Lessons",
    duration: "5 hours 15 mins",
    commentsCount: "94 Comments",
    level: "Expert",
    price: "$44",
    pricePeriod: "/lifetime",
  },
  {
    id: 32,
    title: "Portrait Photography & Lighting",
    author: "shutter master",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    lessonsCount: "18 Lessons",
    duration: "2 hours 50 mins",
    commentsCount: "63 Comments",
    level: "Intermediate",
    price: "$28",
    pricePeriod: "/lifetime",
  },
  {
    id: 33,
    title: "Startup Pitch & Investor Deck",
    author: "venture craft",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    lessonsCount: "15 Lessons",
    duration: "2 hours 10 mins",
    commentsCount: "48 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
  },
  {
    id: 34,
    title: "Figma Design Systems at Scale",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "22 Lessons",
    duration: "3 hours 40 mins",
    commentsCount: "87 Comments",
    level: "Expert",
    price: "$36",
    pricePeriod: "/lifetime",
  },
  {
    id: 35,
    title: "Brand Voice & Microcopy Writing",
    author: "wordcraft studio",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    lessonsCount: "14 Lessons",
    duration: "2 hours 05 mins",
    commentsCount: "45 Comments",
    level: "Beginner",
    price: "$20",
    pricePeriod: "/lifetime",
  },
  {
    id: 36,
    title: "Generative AI Art with Midjourney",
    author: "pixelcraft",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    lessonsCount: "19 Lessons",
    duration: "3 hours 10 mins",
    commentsCount: "110 Comments",
    level: "Intermediate",
    price: "$29",
    pricePeriod: "/lifetime",
  },
];

const sortOptions = [
  "Most relevant",
  "Highest rated",
  "Newest courses",
  "Price: Low to High",
  "Price: High to Low",
];

const levelOptions = ["All Levels", "Beginner", "Intermediate", "Expert"];

const ITEMS_PER_PAGE = 18;

export const SearchResultsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [selectedSort, setSelectedSort] = useState("Most relevant");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [currentPage, setCurrentPage] = useState(1);

  const [sortOpen, setSortOpen] = useState(false);
  const [levelOpen, setLevelOpen] = useState(false);

  // Filter courses based on selected Level
  const filteredCourses = allCoursesData.filter((course) => {
    if (selectedLevel === "All Levels") return true;
    return course.level?.toLowerCase() === selectedLevel.toLowerCase();
  });

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE) || 1;
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Filter & Sort Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Left Action Buttons: Filter, Level, Category */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Button */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-800 hover:bg-zinc-50 transition-colors shadow-sm cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-zinc-600" />
              <span>Filter</span>
            </button>

            {/* Level Filter with Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setLevelOpen(!levelOpen);
                  setSortOpen(false);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-800 hover:bg-zinc-50 transition-colors shadow-sm cursor-pointer ${
                  selectedLevel !== "All Levels" ? "border-blue-500 text-blue-600 bg-blue-50/40" : ""
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
                    className="absolute left-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-zinc-100 py-1.5 z-40"
                  >
                    {levelOptions.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setLevelOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-zinc-50 ${
                          selectedLevel === lvl ? "text-blue-600 font-semibold" : "text-zinc-700"
                        }`}
                      >
                        <span>{lvl}</span>
                        {selectedLevel === lvl && <Check className="w-3.5 h-3.5 text-blue-600" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Category Button */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-800 hover:bg-zinc-50 transition-colors shadow-sm cursor-pointer"
            >
              <LayoutGrid className="w-4 h-4 text-zinc-600" />
              <span>Category</span>
            </button>
          </div>

          {/* Right Sort Dropdown */}
          <div className="relative self-end sm:self-auto">
            <button
              type="button"
              onClick={() => {
                setSortOpen(!sortOpen);
                setLevelOpen(false);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-800 hover:bg-zinc-50 transition-colors shadow-sm cursor-pointer"
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
                  className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-zinc-100 py-1.5 z-40"
                >
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSelectedSort(opt);
                        setSortOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-zinc-50 ${
                        selectedSort === opt ? "text-blue-600 font-semibold" : "text-zinc-700"
                      }`}
                    >
                      <span>{opt}</span>
                      {selectedSort === opt && <Check className="w-3.5 h-3.5 text-blue-600" />}
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
                  setCurrentPage(1);
                }}
                className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#D4FF00] text-zinc-950 font-bold shadow-sm"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 font-medium"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid (6 per page from 30 total courses) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {paginatedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* Dynamic Pagination */}
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
                  ? "font-bold text-zinc-950 bg-zinc-100"
                  : "font-medium text-zinc-500 hover:text-zinc-900"
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
      </div>
    </section>
  );
};

export default SearchResultsSection;
