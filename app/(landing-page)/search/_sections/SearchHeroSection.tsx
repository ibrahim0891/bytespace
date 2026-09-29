"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import GridBackground from "@/app/components/GridBackground";
import { H1 } from "@/app/components/Typography";
import SearchFilterBar from "../_component/SearchFilterBar";

export const SearchHeroSection = () => {
    return (
        <section className="relative w-full bg-[#003be2] pb-20 sm:pb-28 overflow-hidden">
            <Navbar />

            {/* Reusable Grid Pattern Background */}
            <GridBackground />

            <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-8 sm:space-y-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <H1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold  ">
                        Find Your Next Course
                    </H1>
                </motion.div>

                {/* Search Bar + Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Suspense
                        fallback={
                            <div className="w-full max-w-2xl mx-auto h-14 bg-white/20 rounded-full animate-pulse" />
                        }
                    >
                        <SearchFilterBar />
                    </Suspense>
                </motion.div>
            </div>
        </section>
    );
};

export default SearchHeroSection;
