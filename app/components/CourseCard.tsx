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
            className={`group bg-white rounded-[24px] p-4 border border-[#CED0D3] hover:border-zinc-400 transition-all flex flex-col justify-between shadow-xs hover:shadow-md ${className}`.trim()}
        >
            {/* Thumbnail Container with Figma 12px Radius & Frosted Pills */}
            <div>
                <div className="relative w-full aspect-[341/195] rounded-[12px] overflow-hidden bg-zinc-100">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Floating Frosted Metadata Pills (Figma: rgba(246, 246, 246, 0.6), blur 4px, rounded 24px) */}
                    <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 sm:gap-3 overflow-hidden">
                        <span className="h-[26px] px-3 py-1 rounded-[24px] bg-[#F6F6F6]/60 backdrop-blur-[4px] text-[#4F4F4F] text-[12px] font-medium flex items-center justify-center whitespace-nowrap shadow-xs">
                            {lessonsCount}
                        </span>
                        <span className="h-[26px] px-3 py-1 rounded-[24px] bg-[#F6F6F6]/60 backdrop-blur-[4px] text-[#4F4F4F] text-[12px] font-medium flex items-center justify-center whitespace-nowrap shadow-xs">
                            {duration}
                        </span>
                        <span className="h-[26px] px-3 py-1 rounded-[24px] bg-[#F6F6F6]/60 backdrop-blur-[4px] text-[#4F4F4F] text-[12px] font-medium flex items-center justify-center whitespace-nowrap shadow-xs">
                            {commentsCount}
                        </span>
                    </div>
                </div>

                {/* Course Title & Rating Header (Figma: Poppins 600 20px, Star in #CED0D3) */}
                <div className="mt-4 flex items-start justify-between gap-2">
                    <Link
                        href={href}
                        className="block group-hover:text-[#003BE2] transition-colors flex-1"
                    >
                        <h3 className="font-semibold text-[#000000] text-[20px] leading-[1.2] tracking-[-0.01em] line-clamp-1">
                            {title}
                        </h3>
                    </Link>
                    <div className="flex items-center gap-1 shrink-0 text-[18px] font-medium text-[#4F4F4F] leading-[28px]">
                        <span>{rating}</span>
                        <Star className="w-5 h-5 fill-[#CED0D3] text-[#CED0D3]" />
                    </div>
                </div>

                {/* Author Byline (Figma: Satoshi 400 12px #4F4F4F) */}
                <p className="text-[12px] leading-[1.6] text-[#4F4F4F] mt-1">
                    by{" "}
                    <span className="text-[#003BE2] font-medium hover:underline cursor-pointer">
                        {author}
                    </span>
                </p>
            </div>

            {/* Card Footer: Level, 32px Avatars & Price */}
            <div className="mt-4 pt-3 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                    {/* Level Badge (Figma: #F5F5F6, #4B4C53 text, height 32px, radius 24px) */}
                    <div className="h-8 px-3 py-1.5 rounded-[24px] bg-[#F5F5F6] text-[#4B4C53] text-[12px] font-medium inline-flex items-center gap-1">
                        <Signal className="w-4 h-4 text-[#4B4C53]" />
                        <span>{level}</span>
                    </div>

                    {/* Student Avatars Stack (Figma: 32px diameter, #D4FB20 badge) */}
                    <div className="flex items-center">
                        {studentAvatars.slice(0, 4).map((avatar, idx) => (
                            <div
                                key={idx}
                                className="relative w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0 overflow-hidden shadow-xs"
                            >
                                <Image
                                    src={avatar}
                                    alt="Student"
                                    fill
                                    sizes="32px"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-[#D4FB20] text-[#242528] text-[12px] font-medium -ml-2 flex items-center justify-center shadow-xs">
                            {studentsBadge}
                        </div>
                    </div>
                </div>

                {/* Price (Figma: Poppins 600 20px in #003BE2, /lifetime in 12px #4F4F4F) */}
                <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-[20px] font-semibold text-[#003BE2] leading-[1.2] tracking-[-0.01em]">
                        {typeof price === "number" ? `$${price}` : price}
                    </span>
                    <span className="text-[12px] leading-[1.6] text-[#4F4F4F] font-normal">
                        {pricePeriod}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
