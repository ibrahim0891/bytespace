import React from "react";
import type { Metadata } from "next";
import CourseDetailsView, { defaultCourseData } from "../_component/CourseDetailsView";
import { allCoursesList } from "@/app/data/courses";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const course = allCoursesList.find((c) => String(c.id) === String(id));
  const courseTitle = course ? course.title : defaultCourseData.title;

  return {
    title: courseTitle,
    description: `Master ${courseTitle} with comprehensive curriculum and real-world projects on ByteSpace.`,
  };
}

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
