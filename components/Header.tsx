import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      className={`fixed flex top-0 items-center justify-between z-50 px-4 py-4 w-full transition-all lg:px-10 lg:py-10 ${
        isScrolled && "bg-black/90"
      }`}
    >
      <div className="flex space-x-4 md:space-x-6 items-center">
        <div className="bg-[#fe921f]/50 text-[#ffffff] inline-block font-bold text-sm leading-3 tracking-wider mx-0 my-30 px-4 py-4 uppercase rounded-tr-lg cursor-pointer hover:text-[#141414] transition-all duration-700 ">
          <p className="opacity-[0.8]">Night Movies</p>
        </div>
        <ul className="hidden space-x-4 md:flex md:space-x-6">
          <li className="headerlink">Home</li>
          <li className="headerlink">TV Shows</li>
          <li className="headerlink">Movies</li>
          <li className="headerlink">New & Popular</li>
          <li className="headerlink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 font-light text-sm ">
        <SearchIcon className="hidden sm:inline h-6 w-6 cursor-pointer" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt="Hello"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
