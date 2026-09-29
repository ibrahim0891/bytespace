import React from "react";
import Image from "next/image";

export const UiUxCard = ({ className = "" }: { className?: string }) => (
  <div
    className={`bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-zinc-100/90 text-left min-w-[200px] pointer-events-none select-none ${className}`.trim()}
  >
    <h4 className="text-base sm:text-lg font-medium text-zinc-900 leading-snug">
      UI/UX Design
    </h4>
    <p className="text-xs sm:text-sm text-zinc-500 font-normal mt-1">
      200 Courses &bull; 1000+ Students
    </p>
  </div>
);

export const ProgressCard = ({ className = "" }: { className?: string }) => (
  <div
    className={`bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-zinc-100/90 text-left min-w-[230px] sm:min-w-[260px] pointer-events-none select-none ${className}`.trim()}
  >
    <h4 className="text-base sm:text-lg md:text-xl font-normal text-zinc-800 leading-tight">
      Learning Progress
    </h4>
    <div className="text-4xl sm:text-5xl font-semibold text-zinc-900 tracking-tight mt-1.5 mb-4">
      55%
    </div>
    <div className="w-full h-2.5 sm:h-3 bg-zinc-100 rounded-full overflow-hidden">
      <div className="h-full bg-[#D4FB20] rounded-full w-[55%]" />
    </div>
  </div>
);

export const HappyStudentsCard = ({ className = "" }: { className?: string }) => {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=64&h=64&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces",
  ];

  return (
    <div
      className={`bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-zinc-100/90 text-left min-w-[240px] pointer-events-none select-none ${className}`.trim()}
    >
      {/* Title */}
      <h4 className="text-base sm:text-lg font-medium text-zinc-900 leading-tight">
        Happy Students
      </h4>

      {/* Rating Line */}
      <div className="flex items-center gap-1 text-sm sm:text-base font-normal text-zinc-800 mt-1">
        <span>4.5</span>
        <span className="text-zinc-500">(240)</span>
        <span className="text-[#D4FB20] text-sm leading-none ml-0.5">★</span>
      </div>

      {/* Overlapping Avatars Row */}
      <div className="flex items-center -space-x-2 mt-3.5">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-white overflow-hidden shrink-0"
          >
            <Image
              src={src}
              alt="Student avatar"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
        ))}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-white bg-[#D4FB20] text-zinc-950 text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0">
          2K+
        </div>
      </div>
    </div>
  );
};

export default { UiUxCard, ProgressCard, HappyStudentsCard };
