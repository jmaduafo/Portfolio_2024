import React from "react";
import Header2 from "../Header2";
import { allProjects } from "@/utils/works";
import IndividualWork from "./IndividualWork";

function Works() {
  return (
    <section className="py-[10vh]" id='works'>
      <div>
        <div>
          <Header2 text="Selected" />
          <div className="flex justify-center">
            <Header2 text="Projects" />
          </div>
        </div>
        {
          allProjects?.map(work => {
            return (
              <div key={work.title}>
                <IndividualWork work={work}/>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Works;
