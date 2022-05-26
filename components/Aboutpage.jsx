import React from "react";
import Link from "next/link";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

function Aboutpage() {
  return (
    <div className="flex-col text-center mt-20 pl-14 pb-14">
      <h1 className="text-white text-5xl mb-24">
        What is <span className="font-bold">Spejs</span>?
      </h1>
      <div className="text-center">
        <div>
          <span className="font-bold">Spejs</span> is website that shows you
          images with explanation of it, all images are somehow related to Nasa
          and Space.
          <br /> Website is built with next.js and tailwindcss. All images and
          descriptions to them are from oficial{" "}
          <Link href="https://api.nasa.gov">
            <span className="bold underline cursor-pointer">Nasa API</span>
          </Link>
          {"."}
        </div>
        <div className="text-9xl flex justify-center">
          <SiNextdotjs className="m-14 mx-20 hover:scale-110 ease-in duration-700" />
          <SiTailwindcss className="m-14 mx-20 hover:scale-110 ease-in duration-700" />
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
