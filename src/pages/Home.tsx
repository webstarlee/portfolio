"use client";

import Link from "next/link";
import { interLight, interRegular } from "@/app/fonts/fonts";
import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="relative min-h-screen isolate">
      <div className="flex flex-col min-h-screen justify-between items-start mx-auto max-w-7xl px-6 lg:px-8 pb-10">
        <div className="flex flex-1 flex-col justify-center items-start mx-auto w-full py-20">
          <div className="mb-4 sm:mb-8 sm:flex sm:justify-start">
            <div className="relative text-sm/6 text-gray-60 hover:ring-gray-900/20">
              <span
                className={`${interLight.className} text-lg text-black dark:text-white`}
              >
                Hello, I&apos;m
              </span>
            </div>
          </div>
          <div className="text-start min-w-full">
            <h1
              className={`${interRegular.className} -ml-2 text-transparent bg-clip-text inline-block bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] mb-8 text-5xl lg:text-8xl`}
            >
              Daniel Lee
            </h1>
            <p
              className={`${interLight.className} mb-3 text-md lg:text-lg text-justify text-black dark:text-white`}
            >
              I am an accomplished senior frontend developer with over 8 years
              of experience building elegant, high-performing websites and web
              applications. With a strong foundation in HTML, CSS, and
              JavaScript, I am an expert in modern frontend frameworks like
              React, Next.js, Angular, and Vue.js, Nuxt.js. I excel at
              translating designs into pixel-perfect, responsive user interfaces
              that engage and delight users. In recent years, I have been at the
              forefront of the web3 revolution, leveraging his skills to create
              decentralized applications (dApps) on blockchain platforms like
              Ethereum and Polygon. I have worked on several groundbreaking
              projects that integrate web3 technologies, such as smart contracts
              and decentralized finance (DeFi) protocols, with intuitive,
              user-friendly interfaces.
            </p>
            <Link
              href="#"
              className={`${interLight.className} text-sm text-justify text-black dark:text-white`}
            >
              Read More <span aria-hidden="true" className="animate-bounce">→</span>
            </Link>
          </div>
        </div>

        <div className="text-start flex gap-x-4 min-w-full pb-14 relative">
          <button
            className={`${interLight.className} shadow-lg bg-gradient-to-tr p-0.5 from-[#10D7E2] transition duration-75 hover:from-[#9358F7] to-[#9358F7] hover:to-[#10D7E2] flex text-center rounded-full lg:rounded-md justify-center items-center h-12 w-12 lg:w-40 text-sm text-black dark:text-white`}
          >
            <span
              className={`${interRegular.className} flex w-full text-center items-center justify-center bg-white dark:bg-[#111111] dark:text-[#9358F7] text-black rounded-full lg:rounded-md h-full`}
            >
              <FaEnvelope size={"1.5em"} className="mr-0 lg:mr-2" />
              <label className="mt-1 cursor-pointer hidden lg:block">Send Email</label>
            </span>
          </button>
          <button
            className={`${interLight.className} shadow-lg bg-gradient-to-tr p-0.5 from-[#F4426C] transition duration-75 hover:from-[#dbd06c] to-[#dbd06c] hover:to-[#F4426C] flex text-center rounded-full lg:rounded-md justify-center items-center h-12 w-12 lg:w-40 text-sm text-black dark:text-white`}
          >
            <span
              className={`${interRegular.className} flex w-full text-center items-center justify-center bg-white dark:bg-[#111111] dark:text-[#10D7E2] text-black rounded-full lg:rounded-md h-full`}
            >
              <FaLinkedinIn size={"1.5em"} className="mr-0 lg:mr-2" />
              <label className="mt-1 cursor-pointer hidden lg:block">Linkedin</label>
            </span>
          </button>

          <button
            className={`${interLight.className} shadow-lg bg-gradient-to-tr p-0.5 from-[#D24074] transition duration-75 hover:from-[#6518B4] to-[#6518B4] hover:to-[#D24074] flex text-center rounded-full lg:rounded-md justify-center items-center h-12 w-12 lg:w-40 text-sm text-black dark:text-white`}
          >
            <span
              className={`${interRegular.className} flex w-full text-center items-center justify-center bg-white dark:bg-[#111111] dark:text-white text-black rounded-full lg:rounded-md h-full`}
            >
              <FaGithub size={"1.5em"} className="mr-0 lg:mr-2" />
              <label className="mt-1 cursor-pointer hidden lg:block">Github</label>
            </span>
          </button>

          <button
            className={`${interLight.className} shadow-lg bg-gradient-to-bl p-0.5 from-[#6964DE] transition duration-75 hover:from-[#FCA6E9] to-[#FCA6E9] hover:to-[#6964DE] flex text-center rounded-full lg:rounded-md justify-center items-center h-12 w-12 lg:w-40 text-sm text-black dark:text-white`}
          >
            <span
              className={`${interRegular.className} flex w-full text-center items-center justify-center bg-white dark:bg-[#111111] dark:text-[#FCA6E9] text-black rounded-full lg:rounded-md h-full`}
            >
              <FaDiscord size={"1.7em"} className="mr-0 lg:mr-1"  />
              <label className="cursor-pointer hidden lg:block">Discord</label>
            </span>
          </button>

          <button
            className={`${interLight.className} shadow-lg bg-gradient-to-tr p-0.5 from-[#1053e2] transition duration-75 hover:from-[#10D7E2] to-[#10D7E2] hover:to-[#1053e2] flex text-center rounded-full lg:rounded-md justify-center items-center h-12 w-12 lg:w-40 text-sm text-black dark:text-white`}
          >
            <span
              className={`${interRegular.className} flex w-full text-center items-center justify-center bg-white dark:bg-[#111111] dark:text-[#10D7E2] text-black rounded-full lg:rounded-md h-full`}
            >
              <FaTelegramPlane size={"1.7em"} className="mr-0 lg:mr-1"  />
              <label className="cursor-pointer hidden lg:block">Telegram</label>
            </span>
          </button>

          <button className="text-[#F4426C] dark:text-[#10D7E2] absolute right-0 top-3 animate-bounce">
          <HiOutlineArrowLongDown size={"2em"} />
          </button>
        </div>
      </div>
    </div>
  );
}