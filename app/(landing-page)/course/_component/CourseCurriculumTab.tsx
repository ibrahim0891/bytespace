"use client";

import React from "react";
import { motion } from "framer-motion";

export interface LessonModuleItem {
  title: string;
  description: string;
}

export const defaultLessonModules: LessonModuleItem[] = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

interface CourseCurriculumTabProps {
  modules?: any[];
  lessonModules?: LessonModuleItem[];
  exploreDescription?: string;
  lessonContentDescription?: string;
  progressTrackingDescription?: string;
  progressPercentage?: number;
  totalLessons?: number;
  totalHours?: number;
  onPreviewLesson?: () => void;
}

export const CourseCurriculumTab: React.FC<CourseCurriculumTabProps> = ({
  lessonModules = defaultLessonModules,
  exploreDescription = "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  lessonContentDescription = "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  progressTrackingDescription = "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
  progressPercentage = 55,
}) => {
  return (
    <motion.div
      key="tab-lessons"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-[723px] flex flex-col gap-6"
    >
      {/* 1. Explore the Modules */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#242528]">
          Explore the Modules
        </h3>
        <p className="font-normal text-[16px] leading-[160%] text-[#4B4C53]">
          {exploreDescription}
        </p>
      </div>

      {/* 2. Lesson List */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#242528]">
          Lesson List
        </h3>

        <div className="flex flex-col gap-[13px]">
          {lessonModules.map((module, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center gap-[13px] sm:gap-4"
            >
              {/* Icon Container */}
              <div className="w-[72px] h-[72px] rounded-[24px] bg-[#D4FB20] flex items-center justify-center shrink-0 p-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#242528"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-[#242528]"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" />
                  <rect x="2" y="6" width="14" height="12" rx="3" />
                </svg>
              </div>

              {/* Module Text Info */}
              <div className="flex flex-col justify-center gap-1 flex-1">
                <h4 className="font-medium text-[16px] leading-[120%] text-[#242528]">
                  {module.title}
                </h4>
                <p className="font-normal text-[16px] leading-[160%] text-[#4B4C53]">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Lesson Content */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#242528]">
          Lesson Content
        </h3>
        <p className="font-normal text-[16px] leading-[160%] text-[#4B4C53]">
          {lessonContentDescription}
        </p>
      </div>

      {/* 4. Lesson Progress Tracking */}
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#242528]">
          Lesson Progress Tracking
        </h3>
        <p className="font-normal text-[16px] leading-[160%] text-[#4B4C53]">
          {progressTrackingDescription}
        </p>
      </div>

      {/* 5. Learning Progress Card */}
      <div className="box-border w-full rounded-[16px] bg-white border border-[#CED0D3] p-4 flex flex-col gap-2 backdrop-blur-[10px]">
        <span className="font-medium text-[14px] leading-[120%] text-[#242528]">
          Learning Progress
        </span>
        <div className="font-semibold text-[36px] leading-[120%] tracking-[-0.01em] text-[#242528]">
          {progressPercentage}%
        </div>
        <div className="w-full h-2 bg-[#E5E6E8] rounded-[24px] overflow-hidden">
          <div
            className="h-full bg-[#D4FB20] rounded-[24px] transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCurriculumTab;
