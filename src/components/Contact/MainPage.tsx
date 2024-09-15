"use client";
import React, { useState } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import { motion, easeInOut } from "framer-motion";
import MainButton from "../MainButton";
import Paragraph from "../Paragraph";

function MainPage() {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const EASING = [0.83, 0, 0.17, 1];

  const rise = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.5,
      },
    },
  };

  const scale = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.7,
      },
    },
  };

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.7,
      },
    },
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <section className="my-[8vh]">
        <div className="sm:w-[75%] md:w-[60%] mx-auto">
          <div className="overflow-hidden">
            <motion.h1
              variants={rise}
              initial="initial"
              animate="animate"
              className={`${spectralBridgeRegular.className} leading-[1] uppercase text-center text-[20vw] sm:text-[12vw]`}
            >
              Let's <span className="italic lowercase">get</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={rise}
              initial="initial"
              animate="animate"
              className={`${spectralBridgeRegular.className} leading-[1] uppercase text-center text-[20vw] sm:text-[12vw]`}
            >
              <span className="italic lowercase">in</span> touch
            </motion.h1>
          </div>
          <div className="flex justify-end">
            <div className="w-[70%] sm:w-[60%] md:w-[55%]">
              <Paragraph text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient" />
            </div>
          </div>
          <div className="mt-14">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col xs:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-y-2">
                  <motion.label
                    variants={appear}
                    initial="initial"
                    animate="animate"
                    className="text-[14px]"
                    htmlFor="name"
                  >
                    Name
                  </motion.label>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className="py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent"
                    id="name"
                    name="user_name"
                    type="text"
                    onChange={(e) =>
                      setValues({ ...values, user_name: e.target.value })
                    }
                    value={values.user_name}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-y-2">
                  <motion.label
                    variants={appear}
                    initial="initial"
                    animate="animate"
                    className="text-[14px]"
                    htmlFor="email"
                  >
                    Email
                  </motion.label>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className="py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent"
                    id="email"
                    name="user_email"
                    type="email"
                    onChange={(e) =>
                      setValues({ ...values, user_email: e.target.value })
                    }
                    value={values.user_email}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex-1 flex flex-col gap-y-2">
                  <motion.label
                    variants={appear}
                    initial="initial"
                    animate="animate"
                    className="text-[14px]"
                    htmlFor="email"
                  >
                    Message
                  </motion.label>
                  <motion.textarea
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className="py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent"
                    id="message"
                    name="user_message"
                    onChange={(e) =>
                      setValues({ ...values, user_message: e.target.value })
                    }
                    value={values.user_message}
                    rows={3}
                  ></motion.textarea>
                </div>
              </div>
              <div className="mt-6">
                <motion.button
                  variants={appear}
                  initial="initial"
                  animate="animate"
                  type="submit"
                  className="hover:bg-lightText hover:text-lightBg dark:hover:bg-darkText dark:hover:text-darkBg duration-300 text-[16px] 2xl:text-[26px] w-full sm:w-[45%] py-2 border-[1px] border-lightText dark:border-darkText rounded-full outline-none"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
