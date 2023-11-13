import fs from "fs";
import matter from "gray-matter";

// Read markdown file content
const getMarkdownContent = (folder, slug) => {
  const file = `${folder}/${slug}.md`;
  const text = fs.readFileSync(file, "utf8");
  const matterObject = matter(text);
  return matterObject;
};

export default getMarkdownContent;
