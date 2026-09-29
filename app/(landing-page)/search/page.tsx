import React, { Suspense } from "react";
import type { Metadata } from "next";
import SearchHeroSection from "./_sections/SearchHeroSection";
import SearchResultsSection from "./_sections/SearchResultsSection";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Search & Filter Courses",
  description: "Browse, search, and filter all online courses available on ByteSpace.",
};

export default function SearchPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <SearchHeroSection />
      <Suspense
        fallback={
          <div className="w-full py-20 text-center">
            <div className="w-10 h-10 border-4 border-[#003be2] border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        }
      >
        <SearchResultsSection />
      </Suspense>
      <Footer />
    </div>
  );
}
