import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="w-full bg-[#FAF7F0]">
      <div className="bg-[#FAF7F0] md:w-[85%] mt-0 mb-0 ml-auto mr-auto px-3 text-[#4A4947]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
