"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import GridBackground from "@/app/components/GridBackground";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans">
      {/* Top 404 Hero Container (Persian Blue with Grid and 404 Visual) */}
      <section className="relative w-full bg-[#003BE2] overflow-hidden min-h-[850px] lg:min-h-[957px] flex flex-col justify-between">
        {/* Navigation Bar */}
        <Navbar />

        {/* 120px Grid Background */}
        <GridBackground gridSize="120px 120px" opacity={12} lineColor="#FFFFFF" />

        {/* Centered 404 Hero Content Area */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center justify-center my-auto pt-6 sm:pt-10 pb-16">
          {/* Giant Gradient 404 Text in Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="select-none pointer-events-none z-0"
          >
            <span
              className="font-semibold text-[220px] sm:text-[340px] md:text-[420px] lg:text-[480px] leading-[0.85] tracking-[-0.01em] block text-center"
              style={{
                background:
                  "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              404
            </span>
          </motion.div>

          {/* Foreground Frame: Heading, Subtitle & Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center gap-6 sm:gap-8 max-w-[935px] -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-20"
          >
            {/* Heading */}
            <h1 className="font-semibold text-3xl sm:text-5xl lg:text-[72px] leading-[1.2] tracking-[-0.01em] text-white">
              The page you are looking for doesn’t exist
            </h1>

            {/* Subtitle */}
            <p className="font-normal text-base sm:text-[18px] leading-[1.6] text-[#E5E6E8] max-w-[486px]">
              Try to use a correct url or go back to homepage to start again
            </p>

            {/* Back to Home Button */}
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center h-[46px] px-6 rounded-[24px] bg-[#D4FB20] hover:bg-[#c6f000] text-[#242528] font-medium text-[18px] leading-[1.2] transition-all duration-200 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Empty placeholder spacer to balance flex distribution */}
        <div className="h-8 pointer-events-none" />
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}