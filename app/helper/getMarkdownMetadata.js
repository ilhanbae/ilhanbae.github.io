import fs from "fs";
import matter from "gray-matter";

// Read markdown files metadata
const getMarkdownMetadata = (folder) => {
  // const folder = "projects";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Read gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      folder: folder,
    };
  });

  return posts;
};

export default getMarkdownMetadata;
