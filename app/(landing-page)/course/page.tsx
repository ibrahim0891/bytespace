import React from "react";
import type { Metadata } from "next";
import CourseDetailsView, { defaultCourseData } from "./_component/CourseDetailsView";

export const metadata: Metadata = {
  title: "Course Details",
  description: "Explore in-depth course curriculum, previews, reviews, and start learning today on ByteSpace.",
};

export default function DefaultCoursePage() {
  return <CourseDetailsView course={defaultCourseData} />;
}
