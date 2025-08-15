"use client"
import { Table } from "@/components/ui/table";
import React from 'react';
import Typed from 'typed.js';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
     strings: [
  '<span style="font-weight: bold;">JAVASCRIPT</span>',
  '<span style="font-weight: bold;">PYTHON</span>',
  '<span style="font-weight: bold;">JAVA</span>',
  '<span style="font-weight: bold;">RUBY</span>',
  '<span style="font-weight: bold;">GO</span>',
  '<span style="font-weight: bold;">SWIFT</span>'
],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="mt-12">
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              A <span className="font-bold">FREE REPOSITORY</span> for community
              <br className="hidden lg:block" />
              components using{" "}
              <span className="font-semibold underline  decoration-[#000000]">
                <span ref={el} />
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source Tailwind UI components and templates to
              <br className="hidden lg:block" />
              bootstrap your new apps, projects or landing sites!
            </p>
            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
              <form
                action="https://www.creative-tim.com/twcomponents/search"
                className="flex flex-wrap justify-between md:flex-row"
              >
                <input
                  type="search"
                  name="query"
                  placeholder="Search Components"
                  required
                  className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <img
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="tailwind css components"
              className="w-full h-full max-w-md mx-auto"
            />
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Features &amp; Pricing
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Starter
              </h3>
              <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>✔️ Basic Components</li>
                <li>✔️ Community Support</li>
                <li>✔️ Regular Updates</li>
              </ul>
              <div className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                $0
              </div>
              <div className="text-gray-500 mb-4">Free Forever</div>
              <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                Get Started
              </button>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">Pro</h3>
              <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>✔️ All Starter Features</li>
                <li>✔️ Premium Components</li>
                <li>✔️ Email Support</li>
              </ul>
              <div className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                $19
              </div>
              <div className="text-gray-500 mb-4">per month</div>
              <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                Upgrade Now
              </button>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Enterprise
              </h3>
              <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>✔️ All Pro Features</li>
                <li>✔️ Custom Solutions</li>
                <li>✔️ Priority Support</li>
              </ul>
              <div className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                $99
              </div>
              <div className="text-gray-500 mb-4">per month</div>
              <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-br from-background via-gray-100 to-background dark:from-background dark:via-gray-900 dark:to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
              What Our Customers Say
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-all duration-200 ease-out hover:-translate-y-2 hover:shadow-2xl opacity-100 translate-y-0">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Jane Doe"
                  className="w-20 h-20 rounded-full border-4 border-primary shadow-lg mb-4 object-cover"
                  loading="lazy"
                />
                <blockquote className="text-gray-700 dark:text-gray-200 text-center italic mb-4">
                  “This platform is a game-changer! The UI is clean, fast, and
                  the support is fantastic.”
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-primary">Jane Doe</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Product Manager
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-all duration-200 ease-out hover:-translate-y-2 hover:shadow-2xl opacity-100 translate-y-0">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Smith"
                  className="w-20 h-20 rounded-full border-4 border-primary shadow-lg mb-4 object-cover"
                  loading="lazy"
                />
                <blockquote className="text-gray-700 dark:text-gray-200 text-center italic mb-4">
                  “I love the markdown support and responsive design. Sharing my
                  thoughts has never been easier.”
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-primary">John Smith</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Full Stack Developer
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-all duration-200 ease-out hover:-translate-y-2 hover:shadow-2xl opacity-100 translate-y-0">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Emily Chen"
                  className="w-20 h-20 rounded-full border-4 border-primary shadow-lg mb-4 object-cover"
                  loading="lazy"
                />
                <blockquote className="text-gray-700 dark:text-gray-200 text-center italic mb-4">
                  “The animations and attention to detail make this site stand
                  out. Highly recommended!”
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-primary">Emily Chen</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Designer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-br from-background via-gray-100 to-background dark:from-background dark:via-gray-900 dark:to-background px-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
            Top Blog
          </h2>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="container mx-auto px-4 py-4">
                  <div className="flex justify-center">
                    <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                        alt="Top Blog"
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-6 flex flex-col">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                          How to Build a Modern Web App with React & Tailwind
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          Discover the best practices and tools for building
                          fast, responsive, and beautiful web applications using
                          React and Tailwind CSS. This guide covers setup,
                          component design, and deployment tips for modern
                          developers.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="/blog/how-to-build-modern-web-app"
                            className="inline-block px-5 py-2 rounded bg-primary text-white font-medium transition-colors duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="container mx-auto px-4 py-4">
                  <div className="flex justify-center">
                    <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                        alt="Top Blog"
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-6 flex flex-col">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                          How to Build a Modern Web App with React & Tailwind
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          Discover the best practices and tools for building
                          fast, responsive, and beautiful web applications using
                          React and Tailwind CSS. This guide covers setup,
                          component design, and deployment tips for modern
                          developers.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="/blog/how-to-build-modern-web-app"
                            className="inline-block px-5 py-2 rounded bg-primary text-white font-medium transition-colors duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="container mx-auto px-4 py-4">
                  <div className="flex justify-center">
                    <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                        alt="Top Blog"
                        className="w-full h-56 object-cover"
                      />
                      <div className="p-6 flex flex-col">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                          How to Build a Modern Web App with React & Tailwind
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          Discover the best practices and tools for building
                          fast, responsive, and beautiful web applications using
                          React and Tailwind CSS. This guide covers setup,
                          component design, and deployment tips for modern
                          developers.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="/blog/how-to-build-modern-web-app"
                            className="inline-block px-5 py-2 rounded bg-primary text-white font-medium transition-colors duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
    </>
  );
}
