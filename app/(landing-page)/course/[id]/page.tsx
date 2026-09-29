import React from "react";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Course Details #{id}</h1>
    </div>
  );
}
