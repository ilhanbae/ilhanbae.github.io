import React from "react";
import getMarkdownMetadata from "@/app/helper/getMarkdownMetadata";
import PostPreview from "@/components/PostPreview";

const page = () => {
  const projectsMetadata = getMarkdownMetadata("projects");
  const projectsPreview = projectsMetadata.map((project) => (
    <PostPreview key={project.slug} {...project} />
  ));

  return (
    <div className="w-full min-h-full p-5 border">
      <div className="flex flex-col space-y-3">{projectsPreview}</div>
    </div>
  );
};

export default page;
