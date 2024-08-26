import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  let data = useSelector((state) => state.UserData.value);

  return (
    <div className="flex flex-col gap-4 text-2xl font-semibold">
      <h1>Batch name :{data}</h1>
      <h2>Class time :{data} </h2>
    </div>
  );
};

export default About;
