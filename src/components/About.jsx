import { img } from "../assets/about-img";
import { motion } from "motion/react";

const images = img;
export default function About() {
  return (
    <div
      id="about"
      className="h-[100vh] flex flex-col items-center justify-evenly"
    >
      <h2 className="text-xl sm:text-2xl font-medium">ABOUT US</h2>
      <div className="wrapper">
        {images.map((img) => (
          <div key={img.name} className={`item item${img.name}`}>
            <motion.img
              src={`/src/assets/${img.src}`}
              alt=""
              className="rounded-2xl w-2xs"
            />
          </div>
        ))}
      </div>

      <p className="font-light text-center italic max-w-[50ch] text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-12 md:leading-16 text-balance">
        &quot;Our story began in 2022 when we were colleagues. She was a shy and
        beautiful girl with glazing eyes. And I was a confident and talkative
        dude. The first time I saw her in person, I knew she was the one.&quot;
      </p>
    </div>
  );
}
