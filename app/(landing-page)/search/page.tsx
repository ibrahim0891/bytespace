import React from "react";
import SearchHeroSection from "./_sections/SearchHeroSection";
import SearchResultsSection from "./_sections/SearchResultsSection";
import Footer from "@/app/components/Footer";

export default function SearchPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <SearchHeroSection />
      <SearchResultsSection />
      <Footer />
    </div>
  );
}
