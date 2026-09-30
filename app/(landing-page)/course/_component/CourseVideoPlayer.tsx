"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
          className="box-border flex flex-row justify-center items-center p-4 gap-2 w-[104px] h-[104px] rounded-[24px] bg-[rgba(61,61,61,0.24)] border border-[#4F4F4F] backdrop-blur-[20px] text-[#F5F2FF] shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[rgba(61,61,61,0.36)] active:scale-95 cursor-pointer"
        >
          {/* Frame: 72x72px */}
          <div className="relative w-[72px] h-[72px] flex-none order-0 flex-grow-0 flex items-center justify-center">
            {/* Vector: 60x60px */}
            <svg
              className="absolute w-[60px] h-[60px] left-[calc(50%-30px)] top-[calc(50%-30px)] text-[#F5F2FF] fill-[#F5F2FF]"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.5 27.4019C47.5 28.5566 47.5 31.4434 45.5 32.5981L23 45.5885C21 46.7432 18.5 45.2998 18.5 42.9904L18.5 17.0096C18.5 14.7002 21 13.2568 23 14.4115L45.5 27.4019Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default CourseVideoPlayer;
