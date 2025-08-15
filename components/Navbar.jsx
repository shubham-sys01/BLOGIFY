"use client"
import Link from "next/link";
import Themebtn from "./theme-btn"
import { Button } from "@/components/ui/button";
import { useState , useEffect} from "react"; 
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Navbar = () => {
  const path = usePathname()
  const [progress, setprogress] = useState(0);
  useEffect(() => {
    setprogress(30);
    const timeouts = [
      setTimeout(() => setprogress(50), 100),
      setTimeout(() => setprogress(70), 100),
      setTimeout(() => setprogress(100), 100)
    ];
    return () => timeouts.forEach(clearTimeout);
}, [path]);
  
  return (
    <nav className="fixed top-1.5 w-full z-30 ">
      <LoadingBar
        color="#f11946"
        height={4}
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
      <div className="container   bg-background/50 p-4 rounded-2xl backdrop-blur mx-auto flex justify-between items-center  shadow-lg">
        {/* Right: Logo */}
        <div className=" text-2xl font-bold tracking-wide">Blogify</div>
        {/* Left: Navigation Links */}
        <div className="md:flex space-x-6 hidden items-center">
          <Link href="/" className=" hover:text-yellow-400 font-medium">
            Home
          </Link>
          <Link href="/about" className=" hover:text-yellow-400 font-medium">
            About
          </Link>
          <Link href="/blog" className=" hover:text-yellow-400 font-medium">
            Blog
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Link href="/">Login</Link>
            </Button>
            <Button variant="outline">
              <Link href="/">Signup</Link>
            </Button>
            <Themebtn/>
          </div>
        </div>
        <div className="hamburger md:hidden cursor-pointer flex items-center gap-2">
          <Themebtn/>
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-7 h-7 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <title>Open menu</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold text-2xl mb-4">BLOGIFY</SheetTitle>
                <SheetDescription>
                  <div className="  flex flex-col gap-5 justify-center items-center">
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <Link
                      href="/"
                      className=" hover:text-yellow-400  text-lg font-normal "
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className=" hover:text-yellow-400  text-lg font-normal "
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className=" hover:text-yellow-400  text-lg font-normal "
                    >
                      Contact Us
                    </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline">
                        <Link href="/">Login</Link>
                      </Button>
                      <Button variant="outline">
                        <Link href="/">Signup</Link>
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
