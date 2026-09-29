"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoUrl?: string;
  thumbnail?: string;
}

const getYouTubeEmbedUrl = (url?: string) => {
  if (!url) return "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
  
  if (url.includes("youtube.com/embed/")) {
    return url.includes("autoplay=") ? url : `${url}${url.includes("?") ? "&" : "?"}autoplay=1`;
  }
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : "dQw4w9WgXcQ";
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  videoUrl = "https://youtu.be/dQw4w9WgXcQ?si=RqfaMPkuGUN4wSAI",
}) => {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-zinc-900/80">
              <h3 className="text-white font-semibold text-sm sm:text-base truncate pr-4">
                Course Preview: {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close preview modal"
                className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={embedUrl}
                title={`Course Preview - ${title}`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
