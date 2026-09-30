"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Signal, Star, Users, Share2, CheckCircle2 } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import GridBackground from "@/app/components/GridBackground";
import CourseVideoPlayer from "../_component/CourseVideoPlayer";

interface CourseHeroSectionProps {
    title: string;
    subtitle: string;
    authorName: string;
    authorProfileUrl: string;
    level: string;
    rating: number;
    reviewCount: number;
    studentsCount: number;
    videoThumbnail: string;
    onPlayVideo: () => void;
    sidebarSlot?: React.ReactNode;
}

export const CourseHeroSection: React.FC<CourseHeroSectionProps> = ({
    title,
    subtitle,
    authorName,
    authorProfileUrl,
    level,
    rating,
    reviewCount,
    studentsCount,
    videoThumbnail,
    onPlayVideo,
    sidebarSlot,
}) => {
    const [showShareToast, setShowShareToast] = useState(false);

    const handleShare = () => {
        if (typeof window !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
            setShowShareToast(true);
            setTimeout(() => setShowShareToast(false), 3000);
        }
    };

    return (
        <section className="relative z-30 w-full bg-[#003be2] pt-1 pb-12 sm:pb-16">
            {/* Navigation Bar */}
            <Navbar />

            {/* Reusable Grid Pattern Background */}
            <GridBackground gridSize="120px 120px" opacity={12} lineColor="#FFFFFF" />

            {/* Hero Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4">
                {/* Title, Badges & Share Row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="max-w-4xl space-y-4">
                        <div className="space-y-2">
                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-[#F5F5F6] text-2xl sm:text-3xl md:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em]"
                            >
                                {title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-[#F5F5F6] text-base sm:text-lg md:text-[20px] font-semibold leading-[1.2] tracking-[-0.01em]"
                            >
                                {subtitle}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="text-[#F1F4FE] text-base sm:text-[18px] font-medium leading-[1.2]"
                        >
                            by{" "}
                            <Link
                                href={authorProfileUrl}
                                className="text-[#F1F4FE] hover:underline decoration-white/60 transition-colors"
                            >
                                {authorName}
                            </Link>
                        </motion.div>

                        {/* Metadata Badges & Mobile Share */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 pt-1 sm:pt-2"
                        >
                            <div className="h-9 sm:h-10 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-[#242528] text-xs sm:text-sm md:text-base font-medium inline-flex items-center gap-1.5 sm:gap-2 backdrop-blur-[20px] shadow-sm shrink-0">
                                <Signal className="w-4 h-4 sm:w-5 sm:h-5 text-[#003BE2]" />
                                <span>{level}</span>
                            </div>

                            <div className="h-9 sm:h-10 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-[#242528] text-xs sm:text-sm md:text-base font-medium inline-flex items-center gap-1.5 sm:gap-2 backdrop-blur-[20px] shadow-sm shrink-0">
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#003BE2] fill-[#003BE2]" />
                                <span>
                                    {rating} ({reviewCount} reviews)
                                </span>
                            </div>

                            <div className="h-9 sm:h-10 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-[#242528] text-xs sm:text-sm md:text-base font-medium inline-flex items-center gap-1.5 sm:gap-2 backdrop-blur-[20px] shadow-sm shrink-0">
                                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#003BE2]" />
                                <span>{studentsCount} Students</span>
                            </div>

                            {/* Mobile Share Button inline with badges */}
                            <button
                                type="button"
                                onClick={handleShare}
                                className="lg:hidden h-9 sm:h-10 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#D4FB20] hover:bg-[#c6f000] text-[#242528] text-xs sm:text-sm md:text-base font-medium inline-flex items-center gap-1.5 sm:gap-2 backdrop-blur-[20px] shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
                            >
                                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2] text-[#242528]" />
                                <span>Share</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Desktop Share Button (Top Right on lg+) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="hidden lg:block lg:self-start shrink-0"
                    >
                        <button
                            type="button"
                            onClick={handleShare}
                            className="h-10 px-6 py-2 rounded-[24px] bg-[#D4FB20] hover:bg-[#c6f000] text-[#242528] text-sm sm:text-base font-medium inline-flex items-center gap-2 backdrop-blur-[20px] shadow-sm transition-all active:scale-95 cursor-pointer"
                        >
                            <Share2 className="w-5 h-5 stroke-[2] text-[#242528]" />
                            <span>Share</span>
                        </button>
                    </motion.div>
                </div>

                {/* Video Preview Box and Sidebar with 7 cols (left), 1 col blank, 4 cols (right) */}
                <div className="mt-8 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                    {/* Left Column: Video Preview Player (7 Columns) */}
                    <div className="lg:col-span-8">
                        <CourseVideoPlayer
                            thumbnail={videoThumbnail}
                            title={title}
                            onPlay={onPlayVideo}
                        />
                    </div>

                    {/* Right Column: Sidebar slot (4 Columns starting at Column 9, leaving Column 8 blank) */}
                    <div className="hidden lg:block lg:col-span-5 lg:col-start-9 relative h-0">
                        <div className="absolute top-0 left-0 w-full z-30">
                            {sidebarSlot}
                        </div>
                    </div>
                </div>
            </div>

            {/* Share Toast Notification */}
            <AnimatePresence>
                {showShareToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        className="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5 border border-zinc-700"
                    >
                        <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
                        <span className="text-xs sm:text-sm font-medium">Link copied to clipboard!</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CourseHeroSection;
