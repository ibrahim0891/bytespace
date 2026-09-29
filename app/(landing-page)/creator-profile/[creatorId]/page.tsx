import React from "react";
import type { Metadata } from "next";
import CreatorHeroSection from "../_sections/CreatorHeroSection";
import CreatorCoursesSection from "../_sections/CreatorCoursesSection";
import Footer from "@/app/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ creatorId: string }>;
}): Promise<Metadata> {
  const { creatorId } = await params;
  return {
    title: "PurePearl Studio — Creator Profile",
    description: `Explore curated design and tech courses created by PurePearl Studio (${creatorId}) on ByteSpace.`,
  };
}

export default function CreatorProfileDynamicPage() {
  return (
    <main className="w-full min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      <CreatorHeroSection />
      <CreatorCoursesSection />
      <Footer />
    </main>
  );
}

