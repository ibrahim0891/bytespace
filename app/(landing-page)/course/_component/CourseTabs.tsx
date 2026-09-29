"use client";

import React from "react";

export type TabType = "about" | "lessons" | "reviews";

interface CourseTabsProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const CourseTabs: React.FC<CourseTabsProps> = ({
  activeTab,
  onSelectTab,
}) => {
  return (
    <div className="flex items-center gap-4 h-[43px]">
      {/* About Tab */}
      <button
        type="button"
        onClick={() => onSelectTab("about")}
        className={`h-[43px] px-4 py-3 rounded-[24px] flex items-center justify-center font-medium text-[16px] leading-[120%] transition-colors cursor-pointer ${
          activeTab === "about"
            ? "bg-[#D4FB20] text-[#242528]"
            : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaeaea] hover:text-[#242528]"
        }`}
      >
        About
      </button>

      {/* Lesson Tab */}
      <button
        type="button"
        onClick={() => onSelectTab("lessons")}
        className={`h-[43px] px-4 py-3 rounded-[24px] flex items-center justify-center font-medium text-[16px] leading-[120%] transition-colors cursor-pointer ${
          activeTab === "lessons"
            ? "bg-[#D4FB20] text-[#242528]"
            : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaeaea] hover:text-[#242528]"
        }`}
      >
        Lesson
      </button>

      {/* Reviews Tab */}
      <button
        type="button"
        onClick={() => onSelectTab("reviews")}
        className={`h-[43px] px-4 py-3 rounded-[24px] flex items-center justify-center font-medium text-[16px] leading-[120%] transition-colors cursor-pointer ${
          activeTab === "reviews"
            ? "bg-[#D4FB20] text-[#242528]"
            : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#eaeaea] hover:text-[#242528]"
        }`}
      >
        Reviews
      </button>
    </div>
  );
};

export default CourseTabs;

