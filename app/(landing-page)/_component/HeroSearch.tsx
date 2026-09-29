"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

interface HeroSearchProps {
  onSearch?: (query: string) => void;
  className?: string;
}

export const HeroSearch = ({ onSearch, className = "" }: HeroSearchProps) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);

    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-[581px] mx-auto flex flex-row items-center gap-3 sm:gap-4 ${className}`.trim()}
    >
      {/* Search Input Box (Figma: 461px x 52px, rounded 24px, #FFFFFF) */}
      <div className="flex-1 h-[52px] bg-white rounded-[24px] px-6 flex items-center gap-2 shadow-md transition-all focus-within:ring-2 focus-within:ring-[#D4FB20]">
        <Search className="w-6 h-6 text-[#82868E] shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-[18px] leading-[1.6] text-[#242528] placeholder:text-[#82868E] focus:outline-none font-normal"
        />
      </div>

      {/* Search Button (Figma: 104px x 46px/52px, rounded 24px, #D4FB20, text #242528, Satoshi 500 18px) */}
      <button
        type="submit"
        className="shrink-0 h-[52px] px-6 rounded-[24px] bg-[#D4FB20] hover:bg-[#c4eb1a] text-[#242528] text-[18px] leading-[1.2] font-medium transition-all active:scale-95 cursor-pointer shadow-md flex items-center justify-center"
      >
        Search
      </button>
    </form>
  );
};

export default HeroSearch;
