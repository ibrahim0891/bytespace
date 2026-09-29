"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Folder, Video, Award, Headset } from "lucide-react";

interface CourseSidebarCardProps {
  totalLessons?: number;
  totalHours?: number;
  price?: string | number;
  pricePeriod?: string;
  isEnrolled: boolean;
  onEnroll: () => void;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  authorProfileUrl: string;
  authorBio: string;
}

export const CourseSidebarCard: React.FC<CourseSidebarCardProps> = ({
  totalLessons = 112,
  totalHours = 24,
  price = "$25",
  pricePeriod = "/lifetime",
  isEnrolled,
  onEnroll,
  authorName = "PurePearl Studio",
  authorRole = "Professional Creator",
  authorAvatar = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=faces",
  authorProfileUrl = "/creator-profile",
  authorBio = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
}) => {
  const displayLessons = totalLessons && totalLessons > 0 ? totalLessons : 112;
  const displayHours = totalHours && totalHours > 0 ? totalHours : 24;

  return (
    <div className="w-full bg-white border border-[#CED0D3] rounded-[24px] p-6 sm:p-10 flex flex-col gap-6 shadow-sm">
      {/* 1. Header & Lessons List Block */}
      <div className="flex flex-col gap-6">
        {/* Header Title: 112 Lessons (24 hours) */}
        <h3 className="font-semibold text-[20px] leading-[1.2]  text-[#242528]">
          {displayLessons} Lessons ({displayHours} hours)
        </h3>

        {/* Lessons List */}
        <div className="flex flex-col gap-3">
          {/* Lesson 01 */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2">
              <span className="font-medium text-[16px] leading-[1.2] text-[#242528] shrink-0">
                01
              </span>
              <span className="font-medium text-[16px] leading-[1.2] text-[#242528]">
                Introduction to Digital Assets
              </span>
            </div>
            <span className="font-normal text-[16px] leading-[1.6] text-[#003BE2] shrink-0 whitespace-nowrap">
              12 mins
            </span>
          </div>

          {/* Lesson 02 */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2">
              <span className="font-medium text-[16px] leading-[1.2] text-[#242528] shrink-0">
                02
              </span>
              <span className="font-medium text-[16px] leading-[1.2] text-[#242528]">
                Design Principles for Impacts
              </span>
            </div>
            <span className="font-normal text-[16px] leading-[1.6] text-[#003BE2] shrink-0 whitespace-nowrap">
              21 mins
            </span>
          </div>

          {/* Lesson 03 */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2">
              <span className="font-medium text-[16px] leading-[1.2] text-[#242528] shrink-0">
                03
              </span>
              <span className="font-medium text-[16px] leading-[1.2] text-[#242528]">
                Advanced Techniques in Digital Creation
              </span>
            </div>
            <span className="font-normal text-[16px] leading-[1.6] text-[#003BE2] shrink-0 whitespace-nowrap">
              16 mins
            </span>
          </div>

          {/* 99 more videos */}
          <p className="font-normal text-[16px] leading-[1.6] text-[#4B4C53] pt-0.5">
            99 more videos
          </p>
        </div>
      </div>

      {/* 2. Callout Subtitle, Price & Enroll Button Block */}
      <div className="flex flex-col gap-6">
        <p className="font-normal text-[16px] leading-[1.6] text-[#4B4C53]">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        {/* Price Row */}
        <div className="flex items-baseline">
          <span className="font-semibold text-[36px] leading-[1.2] tracking-[-0.01em] text-[#003BE2]">
            {typeof price === "number" ? `$${price}` : price}
          </span>
          <span className="font-normal text-[16px] leading-[1.6] text-[#4B4C53] ml-1">
            {pricePeriod}
          </span>
        </div>

        {/* Enroll Now Button */}
        <button
          type="button"
          onClick={onEnroll}
          className="w-full h-[46px] bg-[#D4FB20] hover:bg-[#c6ec18] rounded-[24px] px-6 py-3 flex items-center justify-center font-medium text-[18px] leading-[1.2] text-[#242528] transition-all active:scale-[0.98] cursor-pointer shadow-xs"
        >
          {isEnrolled ? "Enrolled ✓" : "Enroll Now"}
        </button>
      </div>

      {/* 3. This course include Section */}
      <div className="flex flex-col gap-3 pt-1">
        <h4 className="font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-[#242528]">
          This course include
        </h4>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Folder className="w-6 h-6 text-[#003BE2] shrink-0 stroke-[1.75]" />
            <span className="font-normal text-[16px] leading-[1.6] text-[#4B4C53]">
              Learning Resources
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Video className="w-6 h-6 text-[#003BE2] shrink-0 stroke-[1.75]" />
            <span className="font-normal text-[16px] leading-[1.6] text-[#4B4C53]">
              Quality Lesson Videos
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-[#003BE2] shrink-0 stroke-[1.75]" />
            <span className="font-normal text-[16px] leading-[1.6] text-[#4B4C53]">
              Certificate of Completion
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Headset className="w-6 h-6 text-[#003BE2] shrink-0 stroke-[1.75]" />
            <span className="font-normal text-[16px] leading-[1.6] text-[#4B4C53]">
              Private Consultation
            </span>
          </div>
        </div>
      </div>

      {/* 4. Divider Line */}
      <div className="w-full border-t border-[#D1D1D1]" />

      {/* 5. Creator Profile Block */}
      <div className="flex flex-col gap-6">
        {/* Creator Info Header */}
        <div className="flex items-start gap-3">
          <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden shrink-0 bg-[#D9D9D9]">
            <Image
              src={authorAvatar}
              alt={authorName}
              fill
              sizes="52px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h5 className="font-medium text-[18px] leading-[1.2] text-[#242528]">
              {authorName}
            </h5>
            <p className="font-normal text-[16px] leading-[1.6] text-[#4B4C53]">
              {authorRole}
            </p>
          </div>
        </div>

        {/* Creator Bio */}
        <p className="font-normal text-[16px] leading-[1.6] text-[#4B4C53]">
          {authorBio}
        </p>

        {/* See Full Profile Button */}
        <div>
          <Link
            href={authorProfileUrl}
            className="inline-flex items-center justify-center px-4 py-2 border border-[#CED0D3] hover:border-zinc-400 rounded-[24px] font-medium text-[16px] leading-[1.2] text-[#4B4C53] hover:text-[#242528] hover:bg-zinc-50 transition-colors"
          >
            See Full Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebarCard;
