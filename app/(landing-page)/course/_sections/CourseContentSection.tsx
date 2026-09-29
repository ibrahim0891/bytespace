"use client";

import React, { useState } from "react";
import CourseTabs, { TabType } from "../_component/CourseTabs";
import CourseAboutTab from "../_component/CourseAboutTab";
import CourseCurriculumTab from "../_component/CourseCurriculumTab";
import CourseReviewsTab from "../_component/CourseReviewsTab";
import CourseSidebarCard from "../_component/CourseSidebarCard";
import { CourseDetailData } from "../_data/mockCourseData";

interface CourseContentSectionProps {
  course: CourseDetailData;
  onEnroll: () => void;
  onPreviewLesson: () => void;
  isEnrolled: boolean;
}

export const CourseContentSection: React.FC<CourseContentSectionProps> = ({
  course,
  onEnroll,
  onPreviewLesson,
  isEnrolled,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  const authorName =
    typeof course.author === "object" && course.author?.name
      ? course.author.name
      : typeof course.author === "string"
      ? course.author
      : "purepearl studio";

  const authorRole =
    typeof course.author === "object" && course.author?.role
      ? course.author.role
      : "Professional Creator";

  const authorAvatar =
    typeof course.author === "object" && course.author?.avatar
      ? course.author.avatar
      : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=faces";

  const authorProfileUrl =
    typeof course.author === "object" && course.author?.profileUrl
      ? course.author.profileUrl
      : "/creator-profile";

  const authorBio =
    typeof course.author === "object" && course.author?.bio
      ? course.author.bio
      : "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

  return (
    <section className="relative z-10 w-full bg-white pb-24 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
          {/* Left Main Content: Tabs & Details (8 Columns) */}
          <div className="lg:col-span-7 xl:col-span-8 pt-7 space-y-7">
            {/* Tab Navigation */}
            <CourseTabs activeTab={activeTab} onSelectTab={setActiveTab} />

            {/* Tab Panels */}
            <div>
              {activeTab === "about" && (
                <CourseAboutTab
                  descriptionParagraphs={course.descriptionParagraphs || []}
                  sneakPeakImages={course.sneakPeakImages}
                  keyPoints={course.keyPoints}
                />
              )}

              {activeTab === "lessons" && (
                <CourseCurriculumTab
                  modules={course.modules || []}
                  lessonModules={course.lessonModules}
                  progressPercentage={course.progressPercentage}
                  totalLessons={course.totalLessons || 112}
                  totalHours={course.totalHours || 24}
                  onPreviewLesson={onPreviewLesson}
                />
              )}

              {activeTab === "reviews" && (
                <CourseReviewsTab
                  rating={course.rating || 4.8}
                  reviewCount={course.reviewCount || 172}
                  reviewsList={course.reviewsList || []}
                />
              )}
            </div>
          </div>

          {/* Right Column: Mobile Sidebar placement OR Desktop Reserved Space */}
          <div className="lg:col-span-5 xl:col-span-4 block lg:hidden pt-6">
            <CourseSidebarCard
              totalLessons={course.totalLessons || 112}
              totalHours={course.totalHours || 24}
              price={course.price || "$25"}
              pricePeriod={course.pricePeriod || "/lifetime"}
              isEnrolled={isEnrolled}
              onEnroll={onEnroll}
              authorName={authorName}
              authorRole={authorRole}
              authorAvatar={authorAvatar}
              authorProfileUrl={authorProfileUrl}
              authorBio={authorBio}
            />
          </div>

          {/* Desktop Reserved Space to ensure bottom footer clearance for tall card */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4 min-h-[750px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;
