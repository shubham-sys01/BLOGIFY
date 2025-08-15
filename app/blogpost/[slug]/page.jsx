import React from "react";
import matter from "gray-matter";
import OnThisPage from "@/components/onthispage";
import fs from "fs";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { unified } from "unified";
import { notFound } from "next/navigation";
import { transformerCopyButton } from "@rehype-pretty/transformers";

export default async function Page({ params }) {
  // Example blog data (replace with real data as needed)
  const filepath = `content/${(await params).slug}.md`;

  //to see if the fileexists
  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const filecontent = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(filecontent);
  const blog = data;
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeStringify);

  const htmlcontent = (await processor.process(content)).toString();
  return (
    <div className="min-h-screen  py-10 px-4 mt-6 ">
      <article className=" w-3/4 mx-auto p-8 ">
        <h1 className="text-5xl font-bold ">{blog.title}</h1>
        <p className="border-l-4 border-gray-800 pl-4 text-[16px] text-gray-600 my-4">
          {blog.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-semibold italic text-gray-700 mb-8">
          <span>
            By{" "}
            <span className="font-semibold text-gray-700">{blog.author}</span>
          </span>
          <span>|</span>
          <time dateTime={blog.date}>
            {new Date(blog.date).toLocaleDateString()}
          </time>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: htmlcontent }}
          className="prose dark:prose-invert text-lg"
        />
        <div className="fixed top-25  right-1/4">
          <OnThisPage htmlContent={htmlcontent} />
        </div>
      </article>
    </div>
  );
}
