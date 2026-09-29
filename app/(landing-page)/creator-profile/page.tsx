import React from "react";
import CreatorHeroSection from "./_sections/CreatorHeroSection";
import CreatorCoursesSection from "./_sections/CreatorCoursesSection";
import Footer from "@/app/components/Footer";

export default function CreatorProfilePage() {
  return (
    <main className="w-full min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      {/* Creator Hero Section (Figma Spec) */}
      <CreatorHeroSection />

      {/* Creator Courses & Portfolio Listing */}
      <CreatorCoursesSection />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
