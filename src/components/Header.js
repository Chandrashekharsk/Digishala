import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="flex justify-between items-center max-w-[1240px] pt-[16px] mx-auto">
        <div className="text-4xl drop-shadow-2xl hover:cursor-pointer ml-3 font-bold">Digi Shala</div>
        {
            toggle?
            <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
            />
            :
            <HiOutlineMenuAlt4
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
        }
        <ul className="hidden md:flex text-lg font-medium text-white gap-12">
          <li className="hover:drop-shadow-2xl hover:cursor-pointer">Home</li>
          <li className="hover:drop-shadow-2xl hover:cursor-pointer">Company</li>
          <li className="hover:drop-shadow-2xl hover:cursor-pointer">Resources</li>
          <li className="hover:drop-shadow-2xl hover:cursor-pointer">About</li>
          <li className="hover:drop-shadow-2xl hover:cursor-pointer">Contact</li>
          <li className="hover:drop-shadow-2xl hover:cursor-pointer">Login</li>
        </ul>
        {/* Responsive menu */}
        <ul className={` duration-200 md:hidden w-full h-screen text-white fixed bg-black ${toggle?"left-[0]":"left-[-100%]"} top-[92px]`}>
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
          <li className="p-5">Login</li>
        </ul>
      </div>
    </div>
  );
}
