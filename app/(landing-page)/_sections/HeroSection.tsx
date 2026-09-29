"use client";

import React from "react";
import { motion } from "framer-motion";
import GridBackground from "@/app/components/GridBackground";
import HeroSearch from "../_component/HeroSearch";
import HeroVisuals from "../_component/HeroVisuals";
import Navbar from "@/app/components/Navbar";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#003BE2] pb-0 overflow-hidden min-h-0 sm:min-h-[1024px]">
      {/* Navigation Bar */}
      <Navbar />

      {/* Reusable Grid Pattern Background (120px step, 12% opacity) */}
      <GridBackground gridSize="120px 120px" opacity={12} lineColor="#FFFFFF" />

      {/* Hero Content Container (Figma: width 1200px, top 169px, gap 60px) */}
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 text-center z-10 pt-4 sm:pt-8 flex flex-col items-center gap-10 sm:gap-14">
        {/* Frame 1: Title + Subtitle Block (width 935px, gap 32px) */}
        <div className="w-full max-w-[935px] mx-auto flex flex-col items-center gap-6 sm:gap-8">
          {/* Heading L: Poppins 600, 72px, 120%, -0.01em, #FFFFFF */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[935px] font-semibold text-3xl sm:text-5xl lg:text-[72px] leading-[1.2] tracking-[-0.01em] text-[#FFFFFF]"
          >
            Get Access to Hundreds <br className="hidden sm:inline" />
            Courses Available
          </motion.h1>

          {/* Body L: Satoshi 400, 18px, 160%, #E5E6E8 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[819px] font-normal text-base sm:text-[18px] leading-[1.6] text-[#E5E6E8]"
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </motion.p>
        </div>

        {/* Search Bar (Figma: 581px x 52px) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <HeroSearch />
        </motion.div>

        {/* Hero Visuals with 3D Shapes, Arch Ring, Center Figure and Floating Badges */}
        <HeroVisuals />
      </div>
    </section>
  );
};

export default HeroSection;
