import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarSpin from "@/components/StarSpin";
import { spectralBridgeRegular } from "@/fonts/font";
import Header3 from "@/components/Header3";
import Next from "@/components/Next";
import Link from "next/link";

function NotFound() {
  const line1 = "Sorry, this page";
  const line2 = "doesn't exist.";

  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
        <section className="">
          <div className="w-[70%] mx-auto mt-[10vh]">
            <div className="flex justify-center items-center gap-[1vw]">
              <h1
                className={`${spectralBridgeRegular.className} text-[23vw] leading-[1] mb-[-.25em]`}
              >
                4
              </h1>
              <StarSpin classNameSize="w-[15vw]" />
              <h1
                className={`${spectralBridgeRegular.className} text-[23vw] leading-[1] mb-[-.25em]`}
              >
                4
              </h1>
            </div>
            <div className="mt-16">
              <Header3 phrase={line1} className="text-center" />
              <Header3 phrase={line2} className="text-center" />
            </div>
          </div>
          <div className="flex justify-center xs:justify-end my-[10vh]">
            <Link href={"/"}>
              <div className="flex items-center gap-6 hover:gap-8 duration-300 cursor-pointer">
                <h4 className="text-[3vw] tracking-tighter">GO TO HOME</h4>
                <Next className="w-[5vw]" />
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
