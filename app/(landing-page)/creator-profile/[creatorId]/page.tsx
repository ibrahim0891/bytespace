import React from "react";
import CreatorHeroSection from "../_sections/CreatorHeroSection";
import CreatorCoursesSection from "../_sections/CreatorCoursesSection";
import Footer from "@/app/components/Footer";

export default function CreatorProfileDynamicPage() {
  return (
    <main className="w-full min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      <CreatorHeroSection />
      <CreatorCoursesSection />
      <Footer />
    </main>
  );
}

