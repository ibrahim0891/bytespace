import React from "react";
import CourseDetailsView, { defaultCourseData } from "../_component/CourseDetailsView";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // You can extend or customize course data according to the ID parameter
  const courseData = {
    ...defaultCourseData,
    id: id || "1",
  };

  return <CourseDetailsView course={courseData} />;
}
