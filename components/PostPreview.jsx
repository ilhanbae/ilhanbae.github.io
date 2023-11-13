import React from "react";
import Link from "next/link";

const PostPreview = (props) => {
  return (
    <div
      className="flex flex-col border border-slate-300 p-4 rounded-md shadow-sm
    bg-slate-100"
    >
      <p className="text-sm text-slate-400">{props.date}</p>
      <Link href={`${props.folder}/${props.slug}`} className="w-fit">
        <h2 className="text-blue-600 hover:bg-slate-200">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
