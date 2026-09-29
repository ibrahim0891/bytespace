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
      className={`w-full max-w-xl mx-auto flex items-center justify-center gap-3 sm:gap-4 ${className}`.trim()}
    >
      {/* Separate Search Input Bar */}
      <div className="flex-1 bg-white rounded-full px-5 py-3 flex items-center shadow-lg transition-all focus-within:ring-4 focus-within:ring-white/20">
        <Search className="w-5 h-5 text-zinc-400 shrink-0 mr-3" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-sm sm:text-base text-zinc-800 placeholder:text-zinc-400 focus:outline-none font-sans"
        />
      </div>

      {/* Separate Search Button */}
      <button
        type="submit"
        className="shrink-0 bg-[#D4FF00] hover:bg-[#c2eb00] text-zinc-950 text-sm sm:text-base font-semibold px-7 py-3 rounded-full transition-transform active:scale-95 font-sans cursor-pointer shadow-lg"
      >
        Search
      </button>
    </form>
  );
};

export default HeroSearch;
