import React from "react";
import { Link } from "react-scroll";

const MobileMenu = () => {
  return (
    <div>
      <ul className="flex flex-col space-y-7 items-center">
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-myBlue">
          <Link
            to="about"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            about
          </Link>
        </li>
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-myBlue">
          <Link
            to="experience"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Experience
          </Link>
        </li>
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-myBlue">
          <Link
            to="work"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Work
          </Link>
        </li>
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-myBlue">
          <Link
            to="contact"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Contact
          </Link>
        </li>
        <li className="w-40 text-center py-3 text-sm cursor-pointer border-2 border-red-700 rounded-full text-white bg-myBlue">
          <Link
            to="blog"
            activeClass="text-red-400"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            Blog
          </Link>
        </li>
        <li>
          <button class="bg-yellow-500 hover:bg-white text-black w-40 text-center py-3 rounded-full text-xs uppercase ease-in-out duration-300">
            Resume
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
