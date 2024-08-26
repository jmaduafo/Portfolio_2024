import React from "react";
import { spectralBridgeRegular } from "@/fonts/font";

function Closing() {
  return (
    <section className="my-[4vh] md:my-[8vh]">
      <h3
        className={`${spectralBridgeRegular.className} indent-[10%] text-[5.5vw] leading-[1]`}
      >
        Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam
        sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
        mauris sit amet nibh. Donec sodales sagittis magna.
      </h3>
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
