import React from "react";
import CourseDetailsView, { defaultCourseData } from "./_component/CourseDetailsView";

export default function DefaultCoursePage() {
  return <CourseDetailsView course={defaultCourseData} />;
}
