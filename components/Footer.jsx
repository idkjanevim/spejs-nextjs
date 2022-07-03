import React from "react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="border-t-[1px] mt-14 block sm:flex justify-around items-center text-white py-2">
      <div className="flex flex-col items-center">
        <Link href="/contact">
          <p className="cursor-pointer hover:text-gray-300 hover:scale-110 ease-out duration-500">
            Contact
          </p>
        </Link>
        <p>Email: ondrejhrzan@gmail.com</p>
      </div>

      <div className="flex md:flex-row justify-center md:m-auto my-6">
        <Link href="https://github.com/idkjanevim">
          <BsGithub className="text-3xl cursor-pointer hover:scale-110 ease-out duration-500 mx-2" />
        </Link>
        <Link href="https://www.linkedin.com/in/ondřej-hrzán-2aa002240/">
          <BsLinkedin className="text-3xl cursor-pointer hover:scale-110 ease-out duration-500 mx-2" />
        </Link>
      </div>

      <div className="text-center">
        <p className="text-xs italic">Copyright © 2022 - Hrzán Ondřej</p>
      </div>
    </div>
  );
}

export default Footer;
