"use client";

import React, { useState } from "react";
import experienceData from "../../public/data/experience";
import ExperienceCard from "./ExperienceCard";

const Contact = () => {
  const [work, setWork] = useState("pasha");
  return (
    <div
      id="contact"
      className="h-screen max-w-2xl mx-auto px-10 font-mono flex justify-start items-center sm:items-start sm:pt-24 sm:mt-20"
    >
      <div className="w-full">
        <div>
          <p className="text-3xl md:text-5xl font-semibold text-gray-100 tracking-wide mb-8 text-center">
            Get in Touch
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full space-y-10">
          <p className="text-gray-400 font-semibold text-lg text-center">
            Currently, looking for new opportunities. Whether you are hiring,
            have some questions or just wanna sa hi, my inbox is always open
          </p>
          <a href="mailto:mafaqahmed151@gmail.com">
            <button className="bg-transparent hover:bg-blue-300 hover:text-white text-gray-400 font-semibold py-3 px-4 border border-blue-400 hover:border-transparent ease-in-out duration-300 rounded">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
