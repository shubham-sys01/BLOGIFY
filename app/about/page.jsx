import { Button } from "@/components/ui/button"
import React from 'react';

const features = [
  {
    title: "Latest Tech Insights",
    description: "Stay updated with in-depth articles on emerging technologies, software trends, and industry news.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Diverse Topics",
    description: "Explore a wide range of subjects beyond technology, including productivity, science, and more.",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Community Driven",
    description: "Engage with a vibrant community—comment, share, and contribute your own stories and tutorials.",
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700 ">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 md:px-0 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 transition-all duration-500 p-6">
          Welcome to Blogify
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-500">
          Blogify is your hub for the latest technology news, insightful articles, and diverse topics that spark curiosity. Dive into expertly crafted blogs and join a thriving community passionate about learning and sharing.
        </p>
        <Button className="transition-transform duration-300 hover:scale-105 hover:bg-blue-700 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
          Explore Blogs
        </Button>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0 py-12">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300 transition-colors duration-500">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center transition-colors duration-500">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* More Content Section */}
      <section className="max-w-3xl mx-auto px-4 md:px-0 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300 transition-colors duration-500">Our Mission</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-500">
          At Blogify, our mission is to empower readers with high-quality, practical content on technology and beyond. We believe in making knowledge accessible, fostering curiosity, and supporting continuous learning for everyone.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300 transition-colors duration-500">Get Involved</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-500">
          Join our community—comment on posts, share your experiences, and suggest topics you want to see. Blogify thrives on collaboration and the diverse voices of our readers.
        </p>
      
        
      </section>
      <footer class="bg-gray-900 text-white py-6">
  <div class="container mx-auto px-4 text-center">
    <p class="mb-2">
      Contact us:
      <a href="mailto:info@example.com" class="text-blue-400 hover:underline">info@example.com</a>
      |
      Phone: <a href="tel:1234567890" class="text-blue-400 hover:underline">(123) 456-7890</a>
    </p>
    <p class="text-sm text-gray-400">&copy; 2024 Your Company Name. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
};

export default About;