"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import GridBackground from "@/app/components/GridBackground";

interface CreatorHeroSectionProps {
  name?: string;
  role?: string;
  avatar?: string;
  bio?: string;
  productsCount?: number;
  followersCount?: number;
}

export const CreatorHeroSection: React.FC<CreatorHeroSectionProps> = ({
  name = "PurePearl Studio",
  role = "Passionate UI/UX, Web designer",
  avatar = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=240&h=240&fit=crop&crop=faces",
  bio = "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!\nDive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  productsCount = 3,
  followersCount = 12,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentFollowers, setCurrentFollowers] = useState(followersCount);

  const handleToggleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setCurrentFollowers((prev) => Math.max(0, prev - 1));
    } else {
      setIsFollowing(true);
      setCurrentFollowers((prev) => prev + 1);
    }
  };

  return (
    <section className="relative z-30 w-full bg-[#003BE2] pt-1 pb-14 sm:pb-16 min-h-[592px] overflow-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Reusable Grid Pattern Background with Figma 120px step & 12% opacity */}
      <GridBackground gridSize="120px 120px" opacity={12} lineColor="#FFFFFF" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 mt-4 sm:mt-6 flex flex-col gap-8 sm:gap-10">
        {/* Creator Info Block (Avatar + Name + Badge + Role) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Avatar 96x96 with 24px border-radius */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-24 h-24 rounded-[24px] overflow-hidden bg-white/20 border-2 border-white/30 shrink-0 relative shadow-md"
          >
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Name, Creator Badge & Subtitle */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#F5F5F6] text-2xl sm:text-3xl md:text-[36px] font-semibold leading-[1.2] tracking-[-0.01em]"
              >
                {name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="h-[35px] px-6 rounded-[24px] bg-[#D4FB20] text-[#242528] text-[16px] font-medium leading-[1.2] flex items-center justify-center backdrop-blur-[20px] shadow-xs"
              >
                Creator
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[#F5F5F6] text-base sm:text-[18px] font-normal leading-[1.6]"
            >
              {role}
            </motion.p>
          </div>
        </div>

        {/* Bio Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#F5F5F6] text-base sm:text-[18px] font-normal leading-[1.6] max-w-[1198px] whitespace-pre-line"
        >
          {bio}
        </motion.div>

        {/* Stats Row & Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-1"
        >
          {/* Stats Badges */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="h-[46px] px-6 rounded-[24px] bg-white text-[18px] font-medium leading-[1.2] inline-flex items-center gap-2 backdrop-blur-[20px] shadow-sm">
              <span className="text-[#003BE2] font-semibold">{productsCount}</span>
              <span className="text-[#242528]">Products</span>
            </div>

            <div className="h-[46px] px-6 rounded-[24px] bg-white text-[18px] font-medium leading-[1.2] inline-flex items-center gap-2 backdrop-blur-[20px] shadow-sm">
              <span className="text-[#003BE2] font-semibold">{currentFollowers}</span>
              <span className="text-[#242528]">Followers</span>
            </div>
          </div>

          {/* Follow Button */}
          <button
            type="button"
            onClick={handleToggleFollow}
            className={`h-[46px] px-8 rounded-[24px] text-[18px] font-medium leading-[1.2] transition-all active:scale-95 cursor-pointer shadow-sm flex items-center justify-center ${
              isFollowing
                ? "bg-white/90 text-zinc-900 hover:bg-white"
                : "bg-[#D4FB20] hover:bg-[#c6f000] text-[#040819]"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorHeroSection;
