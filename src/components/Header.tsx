"use client";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-scroll";
import NextLink from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className="border-red-700 shadow-sm z-40 rounded-full text-white border-2 w-headerW fixed top-3 right-0 left-0  uppercase bg-myBlue"
      style={{ left: "50%", transform: "translate(-50%, 0)" }}
    >
      <div className="flex justify-between items-center px-9 py-4">
        <div>
          <div>
            <p className="self-center text-xl font-semibold whitespace-nowrap cursor-pointer">
              Afaq Ahmed
            </p>
          </div>
        </div>
        <div className="hidden md:block tracking-widest">
          <ul className="flex space-x-7 items-center">
            <li className="px-2 text-xs cursor-pointer  text-gray-300 hover:text-white ease-in-out duration-200">
              <Link
                to="about"
                activeClass="border-b-2 border-orange-400 py-2 text-white"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
              >
                about
              </Link>
            </li>
            <li className="px-2 text-xs cursor-pointer text-gray-300 hover:text-white ease-in-out duration-200">
              <Link
                to="experience"
                activeClass="border-b-2 border-orange-400 py-2 text-white"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
              >
                experience
              </Link>
            </li>
            <li className="px-2 text-xs cursor-pointer text-gray-300 hover:text-white ease-in-out duration-200">
              <Link
                to="work"
                activeClass="border-b-2 border-orange-400 py-2 text-white"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
              >
                work
              </Link>
            </li>
            <li className="px-2 text-xs cursor-pointer text-gray-300 hover:text-white ease-in-out duration-200">
              <Link
                to="contact"
                activeClass="border-b-2 border-orange-400 py-2 text-white"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
              >
                contact
              </Link>
            </li>
            <li className="px-2 text-xs cursor-pointer text-gray-300 hover:text-white ease-in-out duration-200">
              <Link
                to="blog"
                activeClass="border-b-2 border-orange-400 py-2 text-white"
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
              >
                Blog
              </Link>
            </li>
            <li>
              <NextLink href='/files/afaqahmedCV.pdf' className="bg-yellow-500 hover:bg-white text-black py-3 px-12 rounded-full text-xs uppercase ease-in-out duration-300">
                Resume
              </NextLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden py-3 text-2xl">
          <span className="sr-only">Open menu</span>
          <BiMenu
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          />
        </div>
      </div>
      <div className="fixed top-24 right-10 block md:hidden">
        {mobileMenu && <MobileMenu />}
      </div>
    </header>
  );
}
