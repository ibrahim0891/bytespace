import React from "react";
import CourseCard, { CourseCardProps } from "@/app/components/CourseCard";

const coursesData: CourseCardProps[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    rating: 4.5,
    lessonsCount: "17 Lessons",
    duration: "2 hours 16 mins",
    commentsCount: "59 Comments",
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
  },
];

export const FeaturedCoursesSection = () => {
  return (
    <section className="w-full bg-white pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
