"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface CourseAboutTabProps {
  descriptionParagraphs: string[];
  sneakPeakImages?: string[];
  keyPoints?: string[];
}

export const CourseAboutTab: React.FC<CourseAboutTabProps> = ({
  descriptionParagraphs,
  sneakPeakImages = [
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=80",
  ],
  keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
}) => {
  return (
    <motion.div
      key="tab-about"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-[725px] flex flex-col gap-6"
    >
      {/* 1. Description Header & Paragraphs */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-[#242528]">
          Description
        </h3>

        <div className="flex flex-col gap-4 text-[16px] leading-[1.6] text-[#4B4C53]">
          {descriptionParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      {/* 2. Sneak Peak Gallery */}
      <div className="flex flex-col gap-6 pt-2">
        <h3 className="font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-[#242528]">
          Sneak Peak
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {sneakPeakImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-[#D9D9D9] border border-zinc-200/50 shadow-xs"
            >
              <Image
                src={imgSrc}
                alt={`Sneak Peak ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3. Key Points List */}
      <div className="flex flex-col gap-4 pt-2">
        <h3 className="font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-[#242528]">
          Key Points
        </h3>

        <div className="flex flex-col gap-3">
          {keyPoints.map((point, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#003BE2] fill-[#003BE2] stroke-white shrink-0" />
              <span className="font-normal text-[16px] leading-[1.6] text-[#4B4C53]">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseAboutTab;
