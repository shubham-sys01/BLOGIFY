# Blogify

**Blogify** is a modern, responsive blog platform built with [Next.js](https://nextjs.org/) that serves blog posts about technology and programming languages.  
It uses `rehype` and `remark` to parse Markdown files and display them beautifully — without the need for a backend.  
All blog content is stored as `.md` files in the `content/` folder.

---

## ✨ Features

- 📝 **Markdown-based blogs** — Write and manage posts using `.md` files.
- ⚡ **Next.js powered** — Fast, SEO-friendly static site generation.
- 📄 **rehype & remark** — Parse and render Markdown with custom components.
- 🔍 **Slug-based routing** — Each blog post URL is generated from its file slug.
- 🎨 **Responsive design** — Works seamlessly across devices.
- 🚫 **No backend required** — All content is statically generated at build time.

---

## 📂 Project Structure
```
├── content/ # All blog posts as Markdown (.md) files
│ ├── my-first-post.md
│ └── another-post.md
├── pages/ # Next.js pages and routing
├── components/ # Reusable UI components
├── styles/ # Global and module CSS
└── README.md

```

Each Markdown file in `content/` must contain **front matter** at the top:

```yaml
---
title: My First Blog
date: 2025-08-15
description: A short summary of my first blog post.
slug: my-first-blog
image: /images/blog-cover.png
---
```

### 🛠️ Built With
    Next.js — React framework for production-grade apps.
    rehype — HTML processor for rendering.
    remark — Markdown processor.
    Tailwind CSS (if used) — Utility-first CSS framework.

### 📌 How It Works
    Markdown Storage: All posts are stored in the content/ directory as .md files.

    Parsing: remark processes the Markdown into HTML, and rehype transforms it for rendering in React.

    Static Generation: Next.js reads the slug from each file’s front matter and generates a static route.

    Display: The blog page renders the parsed HTML with styling and optional components.