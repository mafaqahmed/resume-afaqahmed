import React from "react";

interface prop {
    item:{
        title: string,
        heading: string,
        startingDate: string,
        endingDate: string,
        desc: string[]
    }
}

const ExperienceCard = (props:prop) => {
    const item = props.item;
  return (
    <>
      <p className="text-white font-bold text-xl">{item.heading}</p>
      <p className="text-gray-400 mt-1 mb-4">
        {item.startingDate} - {item.endingDate}
      </p>
      <ul className="list-square">
        {item.desc.map((el:string, ind) => (
          <li key={ind}>
            <p className="text-gray-400 mb-3">{el}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExperienceCard;
