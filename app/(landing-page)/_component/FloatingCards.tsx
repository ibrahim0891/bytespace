import React from "react";
import Image from "next/image";

export const UiUxCard = ({ className = "" }: { className?: string }) => (
  <div
    className={`bg-white rounded-2xl p-4 shadow-sm border border-zinc-200/80 text-left min-w-[200px] ${className}`.trim()}
  >
    <h4 className="text-sm font-bold text-zinc-900 tracking-tight">UI/UX Design</h4>
    <p className="text-[11px] text-zinc-500 font-medium mt-0.5">
      200 Courses &bull; 1000+ Students
    </p>
  </div>
);

export const ProgressCard = ({ className = "" }: { className?: string }) => (
  <div
    className={`bg-white rounded-2xl p-4 shadow-sm border border-zinc-200/80 text-left min-w-[190px] ${className}`.trim()}
  >
    <p className="text-[11px] font-semibold text-zinc-600">Learning Progress</p>
    <div className="text-3xl font-extrabold text-zinc-950 tracking-tight mt-0.5 mb-2">
      55%
    </div>
    <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
      <div className="h-full bg-[#D4FF00] rounded-full w-[55%]" />
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
  ];

  return (
    <div
      className={`bg-white rounded-2xl p-3.5 shadow-sm border border-zinc-200/80 text-left min-w-[210px] ${className}`.trim()}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-bold text-zinc-900">Happy Students</span>
        <span className="text-[11px] font-semibold text-zinc-700">
          4.5 <span className="text-amber-400">★</span> (240)
        </span>
      </div>

      <div className="flex items-center -space-x-2 mt-2.5">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="relative w-7 h-7 rounded-full ring-2 ring-white overflow-hidden"
          >
            <Image
              src={src}
              alt="Student"
              fill
              sizes="28px"
              className="object-cover"
            />
          </div>
        ))}
        <div className="w-7 h-7 rounded-full ring-2 ring-white bg-[#D4FF00] text-zinc-950 text-[10px] font-bold flex items-center justify-center">
          2K+
        </div>
      </div>
    </div>
  );
};
