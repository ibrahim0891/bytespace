import React from "react";
import { H1, Lead } from "@/app/components/Typography";
import HeroSearch from "../_component/HeroSearch";
import HeroVisuals from "../_component/HeroVisuals";
import Navbar from "@/app/components/Navbar";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#0055FF]  pb-0 overflow-hidden">
      <Navbar/>
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto   text-center z-10">
        {/* Title */}
        <H1 className="text-white max-w-4xl mx-auto tracking-tight font-extrabold text-3xl sm:text-5xl lg:text-[56px] leading-[1.1]">
          Get Access to Hundreds <br className="hidden sm:block" /> Courses Available
        </H1>

        {/* Subtitle */}
        <Lead className="max-w-2xl mx-auto mt-4 text-white/90 text-sm sm:text-base md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </Lead>

        {/* Search Bar */}
        <div className="mt-8 sm:mt-10">
          <HeroSearch />
        </div>

        {/* Hero Visuals with 3D Shapes and Center Graphics */}
        <HeroVisuals />
      </div>
    </section>
  );
};

export default HeroSection;
