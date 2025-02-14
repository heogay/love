import { imgs } from "../assets/memories";
import { motion } from "motion/react";

const image = imgs;

export default function OurMemories() {
  return (
    <div
      id="memories"
      className="flex flex-col justify-between items-center pt-8"
    >
      <h2 className="mb-8 autoShow text-xl sm:text-2xl font-medium text-center">
        OUR MEMORIES
      </h2>
      <div className="columns-2xs py-4">
        {image.map((img) => (
          <div key={img.name}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="mb-4 autoShow w-full shadow-xs"
              src={`/src/assets/${img.src}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
