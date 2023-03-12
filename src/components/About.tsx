import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-5xl mx-auto px-10 font-mono sm:flex sm:justify-start sm:items-center"
    >
      <div className="">
        <div>
          <p className="text-3xl md:text-5xl font-semibold text-gray-100 tracking-wide mb-8">
            About me
          </p>
        </div>
        <div className="flex justify-center items-start space-y-10 flex-col md:flex-row md:space-x-6 md:space-y-0">
          <div>
            <p className="pb-4">
              This is Afaq Ahmed, graduated from UET Lahore in 2022
            </p>
            <p className="pb-4">
              MERN stack developer with over six months experience. Worked on
              various projects in this tenure. My ultimate focus is to learn new
              features and technlogies and try to match the pace of ever
              evolving technologies
            </p>
            <p className="pb-4">
              Certified by PASHA that is the only official association of all
              software houses in PAKISTAN. So, that enhances my credibility.
            </p>
            <p className="pb-4">
              Passionate about building highly scalable software that meets both
              the needs of end-users and am committed to delivering results that
              exceed expectations
            </p>
            <p className="pb-4">
              Here are the technologies that I have been recently working with:
            </p>
            <div className="flex justify-start font-light text-gray-300">
              <ul className="list-square ml-5">
                <li className="py-2">
                  <p>NextJS</p>
                </li>
                <li className="py-2">
                  <p>NodeJS</p>
                </li>
                <li className="py-2">
                  <p>Firebase</p>
                </li>
                <li className="py-2">
                  <p>ChakraUI</p>
                </li>
                <li className="py-2">
                  <p>TypeScript</p>
                </li>
              </ul>
              <ul className="list-square ml-24">
                <li className="py-2">
                  <p>JavaScript</p>
                </li>
                <li className="py-2">
                  <p>ReactJS</p>
                </li>
                <li className="py-2">
                  <p>ExpressJS</p>
                </li>
                <li className="py-2">
                  <p>Tailwind</p>
                </li>
                <li className="py-2">
                  <p>Bootstrap</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-2 border-white mt-5">
            <Image
              src="/myPic.jpg"
              alt="Afaq Ahmed"
              width={1400}
              height={100}
              className="rounded relative"
              style={{ top: "-20px", left: "-20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
