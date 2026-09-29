"use client";

import React, { useState } from "react";
import CourseHeroSection from "../_sections/CourseHeroSection";
import CourseContentSection from "../_sections/CourseContentSection";
import CourseSidebarCard from "../_component/CourseSidebarCard";
import VideoModal from "../_component/VideoModal";
import EnrollmentModal from "../_component/EnrollmentModal";
import Footer from "@/app/components/Footer";
import {
  CourseDetailData,
  defaultCourseData,
  resolveCourseData,
} from "../_data/mockCourseData";

export { defaultCourseData, resolveCourseData };
export type { CourseDetailData };

interface CourseDetailsViewProps {
  course?: CourseDetailData;
}

export const CourseDetailsView: React.FC<CourseDetailsViewProps> = ({
  course = defaultCourseData,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Resolved strictly typed course data with zero undefined values
  const resolved = resolveCourseData(course);

  return (
    <div className="w-full min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      {/* 1. Hero Section (Blue Zone with Grid Background, Title, Badges, Video Player, and Perfectly Aligned Sidebar Top) */}
      <CourseHeroSection
        title={resolved.title}
        subtitle={resolved.subtitle}
        authorName={resolved.author.name}
        authorProfileUrl={resolved.author.profileUrl}
        level={resolved.level}
        rating={resolved.rating}
        reviewCount={resolved.reviewCount}
        studentsCount={resolved.studentsCount}
        videoThumbnail={resolved.videoThumbnail}
        onPlayVideo={() => setIsVideoModalOpen(true)}
        sidebarSlot={
          <CourseSidebarCard
            totalLessons={resolved.totalLessons}
            totalHours={resolved.totalHours}
            price={resolved.price}
            pricePeriod={resolved.pricePeriod}
            isEnrolled={isEnrolled}
            onEnroll={() => setIsEnrolled(true)}
            authorName={resolved.author.name}
            authorRole={resolved.author.role}
            authorAvatar={resolved.author.avatar}
            authorProfileUrl={resolved.author.profileUrl}
            authorBio={resolved.author.bio}
          />
        }
      />

      {/* 2. Main Content Section (White Zone with Tabs, Curriculum, Reviews, and Responsive Layout Space) */}
      <CourseContentSection
        course={resolved}
        onEnroll={() => setIsEnrolled(true)}
        onPreviewLesson={() => setIsVideoModalOpen(true)}
        isEnrolled={isEnrolled}
      />

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title={resolved.title}
        thumbnail={resolved.videoThumbnail}
      />

      <EnrollmentModal
        isOpen={isEnrolled}
        onClose={() => setIsEnrolled(false)}
        title={resolved.title}
        totalLessons={resolved.totalLessons}
      />
    </div>
  );
};

export default CourseDetailsView;
