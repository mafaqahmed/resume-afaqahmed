'use client';

import React, { useState } from "react";
import experienceData from "../../public/data/experience";
import ExperienceCard from "./ExperienceCard";




const Experience = () => {
  const [work, setWork] = useState('pasha')
  return (
    <div
      id="experience"
      className="max-w-5xl mx-auto px-10 font-mono sm:flex sm:justify-start sm:items-center mt-20"
    >
      <div className="w-full">
        <div>
          <p className="text-3xl md:text-5xl font-semibold text-gray-100 tracking-wide mb-8">
            Where I have worked
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full space-y-10">
          <div className="flex flex-row ">
            {['pasha', 'pel', 'pac'].map(item => (
            <button className={`border-b-2 ease-in-out duration-200 w-24 py-3 uppercase ${work === item ? 'border-white text-white':'border-gray-400 text-gray-400'}`} onClick={() => setWork(item)}>{item}</button>
            ))}
          </div>
          <div className="max-w-xl sm:h-96">
            {
              experienceData.map(item => {
                if(item.title === work){
                  return <>
                  <ExperienceCard item={item}/>
                  </>
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
