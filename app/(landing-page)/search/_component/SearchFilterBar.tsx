"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const filterOptions = [
  { label: "Courses", value: "courses" },
  { label: "Creators", value: "creators" },
  { label: "Topics", value: "topics" },
];

export const SearchFilterBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "courses";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (selectedCategory && selectedCategory !== "courses") {
      params.set("category", selectedCategory);
    }
    router.push(`/search${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const handleSelectCategory = (catValue: string) => {
    setSelectedCategory(catValue);
    setDropdownOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    if (catValue !== "courses") {
      params.set("category", catValue);
    } else {
      params.delete("category");
    }
    router.push(`/search${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const currentCategoryLabel =
    filterOptions.find((f) => f.value === selectedCategory)?.label || "Courses";

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
    >
      {/* Search Input Box */}
      <div className="w-full sm:flex-1 bg-white rounded-full px-6 py-3.5 flex items-center shadow-lg transition-all focus-within:ring-4 focus-within:ring-white/25">
        <Search className="w-5 h-5 text-zinc-400 shrink-0 mr-3" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none font-sans"
        />
      </div>

      {/* Filter Dropdown Pill Button */}
      <div className="relative w-full sm:w-auto" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full sm:w-auto shrink-0 bg-[#D4FF00] hover:bg-[#c6f000] text-zinc-950 text-sm sm:text-base font-semibold px-6 py-3.5 rounded-full transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg select-none"
        >
          <span>{currentCategoryLabel}</span>
          <ChevronDown
            className={`w-4 h-4 text-zinc-950 transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-zinc-100 py-2 z-50 overflow-hidden"
            >
              {filterOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelectCategory(opt.value)}
                  className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-zinc-50 transition-colors ${
                    selectedCategory === opt.value
                      ? "text-[#003be2] font-semibold bg-blue-50/50"
                      : "text-zinc-700 font-medium"
                  }`}
                >
                  <span>{opt.label}</span>
                  {selectedCategory === opt.value && (
                    <Check className="w-4 h-4 text-[#003be2]" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
};

export default SearchFilterBar;
