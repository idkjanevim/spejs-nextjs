import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="text-white bg-black top-0 max-w-screen flex justify-end items-center h-14 pr-[100px] border-b-[1px]">
      <Link href="/">
        <p className="px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300 select-none">
          Home
        </p>
      </Link>
      <Link href="/about">
        <p className="px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300 select-none">
          About
        </p>
      </Link>
      <Link href="/contact">
        <p className="px-5 text-xl h-full hover:bg-gray-800 flex items-center cursor-pointer duration-300 select-none">
          Contact
        </p>
      </Link>
    </div>
  );
}

export default Navbar;
