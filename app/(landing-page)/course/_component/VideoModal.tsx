"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  thumbnail: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  thumbnail,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="relative w-full max-w-3xl bg-zinc-900 rounded-2xl overflow-hidden shadow-xl border border-white/10"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <h3 className="text-white font-bold text-sm sm:text-base">
                Course Preview: {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <Image
                src={thumbnail}
                alt="Preview"
                fill
                className="object-cover opacity-60"
              />
              <div className="relative z-10 text-center space-y-3 p-6">
                <div className="w-14 h-14 rounded-full bg-[#D4FF00] text-zinc-950 flex items-center justify-center mx-auto shadow-md">
                  <Play className="w-6 h-6 fill-zinc-950 translate-x-0.5" />
                </div>
                <p className="text-white font-semibold text-sm">
                  Interactive Video Trailer Simulation
                </p>
                <p className="text-white/60 text-xs max-w-md mx-auto">
                  Full video stream plays when user enrolls. Start with Module 1 Preview Lessons!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
