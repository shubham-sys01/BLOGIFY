import React from 'react'
import matter from 'gray-matter';
import fs from "fs"


const currdir = fs.readdirSync("content","utf-8")





const page = () => {
  const blogs = currdir.map((files)=>{
    const filecontent = fs.readFileSync(`content/${files}`,"utf-8");
    const { data } = matter(filecontent);
    return data;
  })
  console.log(blogs)
  return (
    <div className="min-h-screen py-8 px-15 mt-20 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Page</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {blogs.map((blog , index) => (
          <div
            key={index}
            className="rounded-lg shadow-md p-6 bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-103 hover:shadow-xl flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover rounded-md mb-4 "
            />
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="">By {blog.author}</p>
            <p className="text-gray-500 text-sm mb-2">Uploaded on: {`${new Date(blog.date).toLocaleDateString()}`}</p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{blog.description}</p>
            <a
              href={`/blogpost/${blog.slug}`}
              className="mt-auto px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-200 text-white text-center"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page