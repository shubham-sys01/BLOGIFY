"use client"
import React, { useEffect, useState } from "react";

export default function OnThisPage({ htmlContent }) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (!htmlContent){
        console.log("dsjlfkajsf");
        return;
    };

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    // Only select h1 and h2
    const headingElements = doc.querySelectorAll("h1, h2");
    console.log(doc);

    const extractedHeadings = Array.from(headingElements).map((el) => ({
      id: el.id || el.textContent.replace(/\s+/g, "-").toLowerCase(),
      text: el.textContent,
      level: parseInt(el.tagName.replace("H", ""), 10),
    }));

    setHeadings(extractedHeadings);
  }, [htmlContent]);

  if (!headings.length) return null;

  return (
    <aside className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
      <h2 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">
        On This Page
      </h2>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 2 ? "pl-1" : ""}
          >
            <a
              href={`#${heading.id}`}
              className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
