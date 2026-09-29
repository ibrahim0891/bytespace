import React from "react";
import HeroSection from "./_sections/HeroSection";
import BrandSection from "./_sections/BrandSection";
import DiscoverSection from "./_sections/DiscoverSection";
import FeaturedCoursesSection from "./_sections/FeaturedCoursesSection";
import LearningPathsSection from "./_sections/LearningPathsSection";
import GrowthAndCreatorSection from "./_sections/GrowthAndCreatorSection";
import TestimonialsSection from "./_sections/TestimonialsSection";
import CtaSection from "./_sections/CtaSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BrandSection />
      <DiscoverSection />
      <FeaturedCoursesSection />
      <LearningPathsSection />
      <GrowthAndCreatorSection />
      <CtaSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}