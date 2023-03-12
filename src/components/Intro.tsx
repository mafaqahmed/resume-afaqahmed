import React from "react";

const Intro = () => {
  return (
    <div
      id="intro"
      className="h-screen max-w-5xl mx-auto px-10 font-mono sm:flex sm:justify-start sm:items-center"
    >
      <div className="flex flex-col justify-center items-start space-y-6 mt-40 sm:mt-0">
      <p className="text-md md:text-lg">Hi, I am</p>
      <p className="text-3xl md:text-6xl font-bold text-gray-100 tracking-wide">
        Afaq Ahmed
      </p>
      <p className="text-xl md:text-5xl font-bold text-gray-400 tracking-widest">
        MERN Stack Developer
      </p>
      <p className="max-w-xl text-blue-100 text-lg md:text-xl tracking-wide">
        A tecky with keen interest in blockchain, web 3.0 and metaverse. An
        aspirant full stack developer with a focus on building scalable,
        efficient, and user-friendly applications
      </p>
      <a href="mailto:mafaqahmed151@gmail.com">
      <button className="bg-transparent hover:bg-blue-500 text-white font-semibold py-3 px-4 border border-white hover:border-transparent ease-in-out duration-300 rounded">
        Get in Touch
      </button>
      </a>
      </div>
    </div>
  );
};

export default Intro;
