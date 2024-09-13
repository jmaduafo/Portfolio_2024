import React from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import Header3 from "../Header3";

function Closing() {
  const line1 = "When I'm not busy coding, I enjoy"
  const line2 = "going on solo dates, from restaurants"
  const line3 = "to the movies, watching anime as a"
  const line4 = "longtime enthusiast, and listening to"
  const line5 = "music. Here's some music that I listen to"
  const line6 = "that helps me get into the zone."
  return (
    <section className="my-[4vh] md:my-[8vh]">
      {/* <h3
        className={`${spectralBridgeRegular.className} indent-[10%] text-[5.5vw] leading-[1]`}
      >
        When I'm not busy coding, I enjoy going on{" "}
        <span className="italic">solo dates</span>, from restaurants to the
        movies, watching <span className="italic">anime</span> as a longtime
        enthusiast, and listening to <span className="italic">music</span>.
        Here's some music that I listen to that helps me get into the zone.
      </h3> */}
      <Header3 phrase={line1} className="indent-[10%]"/>
      <Header3 phrase={line2}/>
      <Header3 phrase={line3}/>
      <Header3 phrase={line4}/>
      <Header3 phrase={line5}/>
      <Header3 phrase={line6}/>

      <div className="flex mt-10">
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-[2]">
          <iframe
            title="Jasmine's Playlist"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/34nezoDEAzvnCSREPqaurN?utm_source=generator"
            width="100%"
            height="152"
            // frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Closing;
