import React from "react";
import getMarkdownContent from "@/app/helper/getMarkdownContent";
import getMarkdownMetadata from "@/app/helper/getMarkdownMetadata";
import Markdown from "markdown-to-jsx";

const page = (props) => {
  // slug is the url param /project/[slug]
  const slug = props.params.slug;
  const post = getMarkdownContent("projects", slug);
  return (
    <div className="min-h-full p-5 bg-red-50">
      <div className="flex flex-col border-b-2 my-3">
        <h1 className="text-3xl">{post.data.title}</h1>
        <p>{post.data.date}</p>
      </div>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export const generateStaticParams = async () => {
  const posts = getMarkdownMetadata("projects");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default page;
