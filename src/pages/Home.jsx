import { RiArrowUpDoubleLine } from "react-icons/ri";
import About from "../components/About";
import Hero from "../components/Hero";
import OurMemories from "./OurMemories";

export default function Home() {

  return (
    <>
      <Hero />
      <About />
      <OurMemories />
      <div className="fixed bottom-4 right-4">
        <a href="#home">
          <RiArrowUpDoubleLine size={30} className="cursor-pointer" />
        </a>
      </div>
    </>
  );
}
