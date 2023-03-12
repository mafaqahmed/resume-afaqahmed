import React from "react";
import { FiFolder, FiLink } from "react-icons/fi";

interface prop {
  item: {
    image: string;
    title: string;
    date: string;
    tools: string[];
    link?: string;
    desc: string[];
  };
}

const ProjectCard = (props: prop) => {
  const item = props.item;
  return (
    <div className=" bg-myLightBlue rounded-lg p-5">
      <a href={item.link} target="_blank">
        <div className="hover:scale-105 ease-in-out duration-300">
          <div className="flex justify-between items-center">
            <FiFolder className="text-2xl" />
            <FiLink className="text-2xl" />
          </div>
          <p className="font-semibold text-xl my-5 text-gray-100">
            {item.title.slice(0, 30)}...
          </p>
          <div className="text-gray-400 text-sm">
            {item.desc.map((el: string) => (
              <p className="text-gray-400 mb-3">{el.slice(0, 80)}...</p>
            ))}
          </div>
          <p className="whitespace-nowrap">
            {item.tools.map((el) => (
              <span className="inline-block px-2 text-sm font-semibold text-blue-400 mt-2">
                #{el}
              </span>
            ))}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
