"use client";

import { interLight } from "@/app/fonts/fonts";

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
