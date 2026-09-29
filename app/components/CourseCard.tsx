import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Signal, Star } from "lucide-react";

export interface CourseCardProps {
  id?: string | number;
  title: string;
  author?: string;
  image: string;
  rating?: number;
  lessonsCount?: string | number;
  duration?: string;
  commentsCount?: string | number;
  level?: string;
  studentAvatars?: string[];
  studentsBadge?: string;
  price?: string | number;
  pricePeriod?: string;
  href?: string;
  className?: string;
}

const defaultAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces",
];

export const CourseCard = ({
  title,
  author = "purepearl studio",
  image,
  rating = 4.5,
  lessonsCount = "17 Lessons",
  duration = "2 hours 16 mins",
  commentsCount = "59 Comments",
  level = "Beginner",
  studentAvatars = defaultAvatars,
  studentsBadge = "26+",
  price = "$25",
  pricePeriod = "/lifetime",
  href = "/course/1",
  className = "",
}: CourseCardProps) => {
  return (
    <div
      className={`group bg-white rounded-[28px] p-3.5 sm:p-4 border border-zinc-200 hover:border-zinc-300 transition-colors flex flex-col justify-between ${className}`.trim()}
    >
      {/* Thumbnail Container with Badges */}
      <div>
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />

          {/* Floating Frosted Metadata Pills */}
          <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-1.5 overflow-hidden">
            <span className="bg-white/85 backdrop-blur-md text-zinc-900 text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
              {lessonsCount}
            </span>
            <span className="bg-white/85 backdrop-blur-md text-zinc-900 text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
              {duration}
            </span>
            <span className="bg-white/85 backdrop-blur-md text-zinc-900 text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
              {commentsCount}
            </span>
          </div>
        </div>

        {/* Course Title & Rating Header */}
        <div className="mt-3.5 flex items-start justify-between gap-2">
          <Link href={href} className="block group-hover:text-blue-600 transition-colors">
            <h3 className="font-bold text-zinc-950 text-base sm:text-lg tracking-tight line-clamp-1">
              {title}
            </h3>
          </Link>
          <div className="flex items-center gap-1 shrink-0 text-xs sm:text-sm font-semibold text-zinc-600">
            <span>{rating}</span>
            <Star className="w-3.5 h-3.5 fill-zinc-400 text-zinc-400" />
          </div>
        </div>

        {/* Author Byline */}
        <p className="text-xs text-zinc-500 mt-1">
          by{" "}
          <span className="text-blue-600 font-medium hover:underline cursor-pointer">
            {author}
          </span>
        </p>
      </div>

      {/* Card Footer: Level, Avatars & Price */}
      <div className="mt-4 pt-3 border-t border-zinc-100 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          {/* Level Badge */}
          <div className="flex items-center gap-1.5 bg-zinc-100 text-zinc-700 text-xs font-medium px-3 py-1 rounded-full">
            <Signal className="w-3.5 h-3.5 text-zinc-600" />
            <span>{level}</span>
          </div>

          {/* Student Avatars Stack */}
          <div className="flex items-center -space-x-2">
            {studentAvatars.slice(0, 4).map((avatar, idx) => (
              <div
                key={idx}
                className="relative w-6 h-6 rounded-full ring-2 ring-white overflow-hidden"
              >
                <Image
                  src={avatar}
                  alt="Student"
                  fill
                  sizes="24px"
                  className="object-cover"
                />
              </div>
            ))}
            <div className="w-6 h-6 rounded-full ring-2 ring-white bg-[#D4FF00] text-zinc-950 text-[10px] font-bold flex items-center justify-center">
              {studentsBadge}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-lg sm:text-xl font-bold text-blue-600 tracking-tight">
            {typeof price === "number" ? `$${price}` : price}
          </span>
          <span className="text-xs text-zinc-500 font-normal">
            {pricePeriod}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
