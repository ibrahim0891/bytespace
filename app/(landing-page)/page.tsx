import React from "react";
import HeroSection from "./_sections/HeroSection";
import BrandSection from "./_sections/BrandSection";
import DiscoverSection from "./_sections/DiscoverSection";
import FeaturedCoursesSection from "./_sections/FeaturedCoursesSection";
import LearningPathsSection from "./_sections/LearningPathsSection";
import CtaSection from "./_sections/CtaSection";
import TestimonialsSection from "./_sections/TestimonialsSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BrandSection />
      <DiscoverSection />
      <FeaturedCoursesSection />
       
      <Footer />
    </div>
  );
}