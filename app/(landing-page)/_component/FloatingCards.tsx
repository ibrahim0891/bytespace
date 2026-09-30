import React from "react";
import Image from "next/image";

export const UiUxCard = ({ className = "" }: { className?: string }) => (
  <div
    className={`bg-white/95 backdrop-blur-[10px] rounded-[16px] p-4 shadow-xl border border-white/40 text-left w-[208px] h-[70px] flex flex-col justify-between cursor-default ${className}`.trim()}
  >
    <h4 className="text-[16px] font-medium text-[#242528] leading-[1.2]">
      UI/UX Design
    </h4>
    <div className="flex items-center gap-1.5 text-[12px] leading-[1.4] text-[#82868E] font-normal whitespace-nowrap">
      <span>200 Courses</span>
      <span>•</span>
      <span>1000+ Students</span>
    </div>
  </div>
);

export const ProgressCard = ({ className = "" }: { className?: string }) => (
  <div
    className={`bg-white/95 backdrop-blur-[10px] rounded-[16px] p-4 shadow-xl border border-white/40 text-left w-[232px] h-[131px] flex flex-col justify-between cursor-default ${className}`.trim()}
  >
    <h4 className="text-[14px] font-medium text-[#242528] leading-[1.2]">
      Learning Progress
    </h4>
    <div className="text-[48px] font-semibold text-[#242528] leading-[1.2] tracking-[-0.01em]">
      55%
    </div>
    {/* Progress Bar (200px x 8px) */}
    <div className="w-[200px] h-2 bg-[#F6F6F6] rounded-[24px] overflow-hidden">
      <div className="h-full bg-[#D4FB20] rounded-[24px] w-[112px]" />
    </div>
  </div>
);

export const HappyStudentsCard = ({
  className = "",
}: {
  className?: string;
}) => {
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
      className={`bg-white/95 backdrop-blur-[10px] rounded-[16px] p-4 shadow-xl border border-white/40 text-left w-[258px] h-[121px] flex flex-col justify-between cursor-default ${className}`.trim()}
    >
      {/* Title */}
      <h4 className="text-[16px] font-medium text-[#242528] leading-[1.2]">
        Happy Students
      </h4>

      {/* Rating Line */}
      <div className="flex items-center gap-1 text-[12px] leading-[1.6] text-[#242528] font-normal">
        <span className="font-medium">4.5</span>
        <span className="text-[#82868E]">(240)</span>
        <span className="text-[#D4FB20] text-sm leading-none ml-0.5">★</span>
      </div>

      {/* Overlapping Avatars (40px with -14px overlap) */}
      <div className="flex items-center">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white overflow-hidden shrink-0 -ml-3.5 first:ml-0"
          >
            <Image
              src={src}
              alt="Student avatar"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
        ))}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full ring-2 ring-white bg-[#D4FB20] text-[#242528] text-[12px] font-bold flex items-center justify-center shrink-0 -ml-3.5">
          2K+
        </div>
      </div>
    </div>
  );
};

export default { UiUxCard, ProgressCard, HappyStudentsCard };
