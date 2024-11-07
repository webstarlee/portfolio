"use client";

import Link from "next/link";
import { interLight, interRegular } from "@/app/fonts/fonts";
import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

export default function Projects() {
  return (
    <div className="relative min-h-screen isolate bg-black">
      <div className="flex flex-col min-h-screen justify-start items-start mx-auto max-w-7xl py-20 px-6 lg:px-8">
        <h1
          className={`text-black dark:text-white ${interLight.className} underline underline-offset-8 decoration-1 text-3xl uppercase`}
        >
          Featured projects
        </h1>

        <div className="grid w-full pt-20 grid-cols-3 gap-4">
          <div className="bg-white">01</div>
          <div className="bg-white">02</div>
          <div className="bg-white">03</div>
          <div className="bg-white">05</div>
          <div className="bg-white">06</div>
          <div className="bg-white">07</div>
          <div className="bg-white">05</div>
          <div className="bg-white">06</div>
          <div className="bg-white">07</div>
        </div>
      </div>
    </div>
  );
}
