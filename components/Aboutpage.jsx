import React from "react";
import Link from "next/link";
//import { SiNextdotjs, SiTailwindcss } from "react-icons/Si";

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
          {/*
          <SiNextdotjs className="m-14 mx-20 hover:scale-110 ease-in duration-700" /> 
          <SiTailwindcss className="m-14 mx-20 hover:scale-110 ease-in duration-700" />
           */}
          <svg
            className="m-14 mx-20 hover:scale-110 ease-in duration-700"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-nextjs"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <desc>
              Download more icon variants from
              https://tabler-icons.io/i/brand-nextjs
            </desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
            <path d="M15 12v-3"></path>
          </svg>
          <svg
            className="m-14 mx-20 hover:scale-110 ease-in duration-700"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-tailwind"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <desc>
              Download more icon variants from
              https://tabler-icons.io/i/brand-tailwind
            </desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
