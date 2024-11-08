"use client";

import Link from "next/link";
import { interLight, interRegular } from "@/app/fonts/fonts";
import { FaLink } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import projects from "@/data/projects.json";
import { descriptionCut } from "@/libs/format";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="relative min-h-screen isolate bg-transparent dark:bg-black dark:border-slate-50/[0.06] lg:border-t">
      <div className="flex flex-col min-h-screen justify-start items-start mx-auto max-w-7xl py-20 px-6 lg:px-8">
        <h1
          className={`text-black dark:text-white ${interLight.className} underline underline-offset-8 decoration-1 text-3xl uppercase`}
        >
          Recent projects
        </h1>

        <div className="grid w-full pt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {projects.map((project, i) => (
            <div
              className="shadow-xl rounded-lg border dark:border-slate-900 p-3"
              key={i}
            >
              <div className={`h-48 rounded-md`}>
                <Image
                  className="rounded-md object-cover w-full h-full"
                  src={`/${project.images[0]}`}
                  alt="Next.js logo"
                  width={300}
                  height={200}
                />
              </div>
              <div className="h-48 mt-2 flex flex-col pb-2">
                <h1
                  className={`${interRegular.className} text-xl text-black dark:text-white`}
                >
                  {project.title}
                  <span className={`${interLight.className} ml-2 text-xs text-black dark:text-white`}> ( {project.company} )</span>
                </h1>
                <p
                  className={`${interLight.className} flex-1 py-3 text-sm text-black dark:text-white`}
                >
                  {descriptionCut(project.description)}
                </p>
                <div
                  className={`${interLight.className} text-xs text-[#3e66ff] dark:text-[#3e66ff]`}
                >
                  {project.skills.map((skill, i) => (
                    <span key={i}>
                      {i > 0 ? "" : ""} {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center gap-3">
                <button
                  className={`${interLight.className} flex-1 shadow-lg bg-gradient-to-tr p-px from-[#D24074] hover:from-[#6518B4] to-[#6518B4] hover:to-[#D24074] flex text-center rounded-full lg:rounded-md justify-center items-center h-10 text-sm text-black dark:text-white`}
                >
                  <span
                    className={`${interLight.className} flex w-full text-center items-center justify-center bg-white dark:bg-[#000] dark:text-[#fff] text-black rounded-full lg:rounded-md h-full`}
                  >
                    <CgDetailsMore size={"1em"} className="mr-0 lg:mr-2" />
                    <label className="cursor-pointer hidden lg:block">
                      Detail
                    </label>
                  </span>
                </button>

                <Link
                  href={project.url}
                  target="_blink"
                  className={`${interLight.className} flex-1 shadow-lg bg-gradient-to-tr p-px from-[#10D7E2] hover:from-[#9358F7] to-[#9358F7] hover:to-[#10D7E2] flex text-center rounded-full lg:rounded-md justify-center items-center h-10 text-sm text-black dark:text-white`}
                >
                  <span
                    className={`${interLight.className} flex w-full text-center items-center justify-center bg-white dark:bg-[#000] dark:text-[#fff] text-black rounded-full lg:rounded-md h-full`}
                  >
                    <FaLink size={"1em"} className="mr-0 lg:mr-2" />
                    <label className="cursor-pointer hidden lg:block">
                      Website
                    </label>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
