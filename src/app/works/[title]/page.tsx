import React from "react";
import { allProjects } from "@/utils/works";
import MainPage from "@/components/WorkDetail/MainPage";

function WorkDetail({ params }: { params: { title: string } }) {
  const title: string[] = [];

  // Input => params: { title: 'oracle%20music' }; expected output => 'Oracle Music'
  params.title.split("%20").forEach((char) => {
    // converts lowercase to capitalized form
    title.push(char.charAt(0).toUpperCase() + char.slice(1));
  });

  // Find index where project title matches with the array outputs after
  // array is converted to string using 'join'
  let index = allProjects.findIndex((item) => item.title === title.join(" "));

  return (
    <div>
      <MainPage project={allProjects[index]} index={index}/>
    </div>
  );
}

export default WorkDetail;
