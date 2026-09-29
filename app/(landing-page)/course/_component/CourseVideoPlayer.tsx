"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";

interface CourseVideoPlayerProps {
  thumbnail: string;
  title: string;
  onPlay: () => void;
}

export const CourseVideoPlayer: React.FC<CourseVideoPlayerProps> = ({
  thumbnail,
  title,
  onPlay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[720/479] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/20 shadow-xl group cursor-pointer"
      onClick={onPlay}
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        priority
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

      {/* Figma Specified Translucent Squircle Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          aria-label="Play course preview"
          className="w-20 h-20 sm:w-[104px] sm:h-[104px] rounded-[24px] bg-[#3D3D3D]/24 border border-[#4F4F4F] backdrop-blur-[20px] flex items-center justify-center text-[#F5F2FF] shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[#3D3D3D]/40 active:scale-95"
        >
          <Play className="w-10 h-10 sm:w-[60px] sm:h-[60px] fill-[#F5F2FF] text-[#F5F2FF] translate-x-1" />
        </button>
      </div>

      {/* Floating Duration Pill */}
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
        <Clock className="w-3.5 h-3.5 text-[#D4FB20]" />
        <span>Preview Trailer</span>
      </div>
    </motion.div>
  );
};

export default CourseVideoPlayer;
