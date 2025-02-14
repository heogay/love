import { motion } from "motion/react";
export default function Hero() {
  return (
    <div className="autoHide flex flex-col justify-evenly items-center md:grid sm:gap-8 grid-cols-1 md:grid-cols-2 h-[95vh] md:place-items-center text-[#4A4947]">
      <div className="flex flex-col justify-between gap-4 sm:gap-8 items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="font-light text-2xl leading-10 sm:text-3xl sm:leading-12 md:text-4xl md:leading-16 lg:text-5xl lg:leading-20 text-balance text-center"
        >
          A place we keep our{" "}
          <span className="italic font-hero-italic font-extrabold">
            memories
          </span>{" "}
          and share them to everyone
        </motion.h1>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          className="font-medium underline p-2"
        >
          {" "}
          <a href="#about">Read our litty story</a>
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100, transition: { duration: 2 } }}
        whileHover={{ scale: 1.1 }}
        className="flex justify-center items-center"
      >
        <img
          src="/src/assets/hero.jpg"
          alt=""
          className="rounded-2xl w-[22rem] sm:w-[24rem] md:w-md shadow-xl"
        />
      </motion.div>
    </div>
  );
}
