"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

interface HeroSearchProps {
  onSearch?: (query: string) => void;
  className?: string;
}

export const HeroSearch = ({ onSearch, className = "" }: HeroSearchProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-xl mx-auto bg-white rounded-full p-1.5 pl-5 flex items-center shadow-xl shadow-blue-900/10 transition-all focus-within:ring-4 focus-within:ring-white/20 ${className}`.trim()}
    >
      <Search className="w-5 h-5 text-zinc-400 shrink-0 mr-3" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Course, topic, creator"
        className="w-full bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none font-sans"
      />
      <button
        type="submit"
        className="shrink-0 bg-[#D4FF00] hover:bg-[#c2eb00] text-zinc-950 text-sm font-semibold px-6 py-2.5 rounded-full transition-transform active:scale-95 font-sans cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default HeroSearch;
