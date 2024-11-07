"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { lilita } from "@/app/fonts/fonts";
import { useRoot } from "@/app/hooks/RootContext";

const navigation = [
  { name: "Projects", href: "#" },
  { name: "Resume", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const { theme, themeToggle } = useRoot();

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleTheme = () => {
    if (theme == "dark") {
      themeToggle("light");
    } else {
      themeToggle("dark");
    }
  };

  return (
    <header className="fixed backdrop-blur dark:border-slate-50/[0.06] lg:border-b inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center max-w-7xl mx-auto justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className={`${lilita.className} -m-1.5 p-1.5 text-xl text-black dark:text-white`}
          >
            DLee.
          </Link>
        </div>
        <div className="flex lg:hidden gap-x-4 items-center">
          <button
            onClick={toggleTheme}
            className="text-sm/6 align-middle font-semibold text-black dark:text-white"
          >
            {theme == "dark" ? (
              <SunIcon aria-hidden="true" className="h-6 w-6" />
            ) : (
              <MoonIcon aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex items-center lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-black dark:text-white"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="text-sm/6 align-middle font-semibold text-black dark:text-white"
          >
            {theme == "dark" ? (
              <SunIcon aria-hidden="true" className="h-6 w-6" />
            ) : (
              <MoonIcon aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-[#111111] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span
                className={`${lilita.className} -m-1.5 p-1.5 text-xl text-black dark:text-white`}
              >
                DLee.
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-white hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
