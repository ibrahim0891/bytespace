"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface ReviewItem {
  name: string;
  role?: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface RatingBreakdownItem {
  stars: number;
  count: number;
  percentage: number;
}

export const defaultReviewsList: ReviewItem[] = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=faces",
    rating: 5,
    date: "a year ago",
    comment:
      '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces",
    rating: 5,
    date: "a year ago",
    comment:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
    rating: 5,
    date: "a year ago",
    comment:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces",
    rating: 5,
    date: "a year ago",
    comment:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export const defaultRatingBreakdown: RatingBreakdownItem[] = [
  { stars: 5, count: 720, percentage: 92.3 },
  { stars: 4, count: 120, percentage: 36.5 },
  { stars: 3, count: 21, percentage: 9.5 },
  { stars: 2, count: 12, percentage: 3.5 },
  { stars: 1, count: 16, percentage: 5.3 },
];

interface CourseReviewsTabProps {
  rating?: number;
  reviewCount?: number;
  reviewsList?: ReviewItem[];
  ratingBreakdown?: RatingBreakdownItem[];
  title?: string;
  description?: string;
}

// Figma Star Icon
const StarIcon = ({ filled = true, className = "w-6 h-6" }: { filled?: boolean; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${className} ${filled ? "text-[#4B4C53]" : "text-[#D9D9D9]"}`}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const CourseReviewsTab: React.FC<CourseReviewsTabProps> = ({
  rating = 4.7,
  reviewsList = defaultReviewsList,
  ratingBreakdown = defaultRatingBreakdown,
  title = "What Learners Are Saying",
  description = "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
}) => {
  const [selectedFilter, setSelectedFilter] = useState<number | "all">("all");

  const effectiveReviews = reviewsList.length > 0 ? reviewsList : defaultReviewsList;

  const filteredReviews =
    selectedFilter === "all"
      ? effectiveReviews
      : effectiveReviews.filter((r) => Math.round(r.rating) === selectedFilter);

  return (
    <motion.div
      key="tab-reviews"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-[723px] flex flex-col gap-6"
    >
      {/* 1. Section Header */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#242528]">
          {title}
        </h3>
        <p className="font-normal text-[16px] leading-[160%] text-[#4B4C53]">
          {description}
        </p>
      </div>

      {/* 2. Ratings Overview Card */}
      <div className="box-border w-full rounded-[16px] bg-white border border-[#CED0D3] p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 backdrop-blur-[10px]">
        {/* Left Rating Box */}
        <div className="w-[129px] h-[140px] bg-[#D4FB20] rounded-[8px] flex flex-col justify-center items-center p-6 shrink-0 backdrop-blur-[20px]">
          <span className="font-medium text-[14px] leading-[120%] text-[#242528]">
            Ratings
          </span>
          <span className="font-semibold text-[36px] leading-[120%] tracking-[-0.01em] text-[#242528]">
            {rating}
          </span>
        </div>

        {/* Right Rating Breakdown Bars */}
        <div className="flex flex-col gap-1 flex-1 w-full">
          {ratingBreakdown.map((row) => (
            <div
              key={row.stars}
              className="flex items-center gap-4 h-[26px] w-full"
            >
              {/* Progress Bar Track */}
              <div className="h-2 bg-[#E5E6E8] rounded-[24px] flex-1 overflow-hidden relative min-w-[120px]">
                <div
                  className="h-full bg-[#D4FB20] rounded-[24px] transition-all duration-500"
                  style={{ width: `${row.percentage}%` }}
                />
              </div>

              {/* Stars Display (decreases with row.stars: 5, 4, 3, 2, 1) */}
              <div className="flex items-center gap-1 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" filled={i < row.stars} />
                ))}
              </div>

              {/* Review Count */}
              <span className="w-10 text-right font-normal text-[16px] leading-[160%] text-[#4B4C53] shrink-0">
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Individual Reviews Filter Header */}
      <div className="flex flex-col gap-4 pt-2">
        <h3 className="font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#242528]">
          Individual Reviews:
        </h3>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-4">
          {/* All rating */}
          <button
            type="button"
            onClick={() => setSelectedFilter("all")}
            className={`h-[43px] px-4 py-3 rounded-[24px] flex items-center justify-center font-medium text-[16px] leading-[120%] transition-colors cursor-pointer ${
              selectedFilter === "all"
                ? "bg-[#D4FB20] text-[#242528]"
                : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaeaea] hover:text-[#242528]"
            }`}
          >
            All rating
          </button>

          {/* Star Filter Buttons [5, 4, 3, 2, 1] */}
          {[5, 4, 3, 2, 1].map((stars) => (
            <button
              key={stars}
              type="button"
              onClick={() => setSelectedFilter(stars)}
              className={`h-[43px] px-4 py-3 rounded-[24px] flex items-center justify-center gap-1 font-medium text-[16px] leading-[120%] transition-colors cursor-pointer ${
                selectedFilter === stars
                  ? "bg-[#D4FB20] text-[#242528]"
                  : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaeaea] hover:text-[#242528]"
              }`}
            >
              <StarIcon
                className="w-5 h-5"
                filled={true}
              />
              <span>{stars}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Reviews List */}
      <div className="flex flex-col gap-6">
        {filteredReviews.length === 0 ? (
          <div className="p-8 text-center bg-[#F5F5F6] rounded-[24px] text-[#4B4C53] font-normal text-[16px]">
            No reviews found for this rating filter.
          </div>
        ) : (
          filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="box-border w-full rounded-[24px] border border-[#CED0D3] bg-white p-6 sm:p-10 flex flex-col gap-6 shadow-xs"
            >
              {/* Header Row: User Info & Date */}
              <div className="flex flex-row items-start justify-between gap-4 w-full">
                {/* User Info (Avatar + Name & Role) */}
                <div className="flex items-center gap-3">
                  <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden bg-zinc-100 shrink-0 border border-zinc-200">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      sizes="52px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-medium text-[18px] leading-[120%] text-[#242528]">
                      {rev.name}
                    </h4>
                    <span className="font-normal text-[16px] leading-[150%] text-[#4B4C53]">
                      {rev.role || "UI/UX Designer"}
                    </span>
                  </div>
                </div>

                {/* Date */}
                <span className="font-normal text-[16px] leading-[150%] text-[#4B4C53] shrink-0 pt-0.5">
                  {rev.date}
                </span>
              </div>

              {/* Star Rating Icons */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5"
                    filled={i < Math.floor(rev.rating)}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-normal text-[16px] leading-[160%] text-[#4B4C53]">
                {rev.comment}
              </p>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default CourseReviewsTab;
