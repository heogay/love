import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { RiHeart2Line, RiMenu3Fill } from "react-icons/ri";
import { TfiThought } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <nav
        id="home"
        className="h-[5vh] flex pt-4 bg-[#FAF7F0 text-[#4A4947] justify-between items-center"
      >
        <div>
          <NavLink
            className="font-bold text-2xl font-hero-italic italic"
            to="/"
          >
            <p>
              Kiet <RiHeart2Line className="inline" /> Ngoc
            </p>
          </NavLink>
        </div>
        <div className="hidden md:flex text-sm md:basis-md font-medium md:justify-evenly">
          <a
            className="hover:text-[#B17457] transition-colors duration-300"
            href="#memories"
          >
            <TfiThought className="inline pb-0.5" size={20} /> <span> </span>{" "}
            OUR MEMORIES
          </a>
          {/* <NavLink
            className="hover:text-[#B17457] transition-colors duration-300"
            to="/contact"
          >
            <IoShareSocialOutline className="inline pb-0.5" size={20} />{" "}
            <span> </span>
            OUR SOCIALS
          </NavLink> */}
        </div>
        <RiMenu3Fill
          onClick={() => setIsHidden(true)}
          size={20}
          className="cursor-pointer md:hidden"
        />
        <div
          className={`${
            isHidden ? "w-full" : "w-0"
          } absolute top-0 right-0 bottom-0 z-10 overflow-hidden duration-500 bg-[#FAF7F0] transition-all`}
        >
          <div className="flex flex-col whitespace-nowrap">
            <div className="flex items-center justify-center gap-2 p-3">
              <LiaTimesSolid
                onClick={() => setIsHidden(false)}
                size={20}
                className="cursor-pointer"
              />
              <label
                className="cursor-pointer"
                onClick={() => setIsHidden(false)}
              >
                BACK
              </label>
            </div>
            <a
              onClick={() => setIsHidden(false)}
              className="py-2 pl-6 cursor-pointer"
              href="#memories"
            >
              <TfiThought className="inline pb-0.5" size={20} /> <span> </span>{" "}
              OUR MEMORIES
            </a>
            {/* <NavLink
              onClick={() => setIsHidden(false)}
              className="py-2 pl-6 cursor-pointer"
              to="/contact"
            >
              <IoShareSocialOutline className="inline pb-0.5" size={20} />{" "}
              <span> </span>
              OUR SOCIALS
            </NavLink> */}
          </div>
        </div>
      </nav>
    </>
  );
}
