"use client";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const hamburgerClick = () => {
    setIsMobileNavActive((prev) => !prev);
  };

  useEffect(() => {
    const handClickOutsideNav = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileNavActive(false);
      }
    };
    const updateBodyClas = () => {
      if (isMobileNavActive) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    document.addEventListener("click", handClickOutsideNav);
    updateBodyClas();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      document.removeEventListener("click", handClickOutsideNav);
      document.body.classList.remove("no-scroll}");
    };
  }, [isMobileNavActive]);

  const animateNavWrapper = (children: ReactNode) => (
    <AnimatePresence>
      {isMobileNavActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed left-6 right-6 z-10 mt-12 rounded-md bg-eb-white"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );

  const navContent = (
    <ul
      className={cn(
        "hidden sm:flex sm:gap-x-8 sm:text-[0.95rem]",
        isMobileNavActive && "flex w-full flex-col items-center gap-y-4 py-8",
      )}
    >
      {navLinks.map((page) => (
        <li className="" key={page.title}>
          <a
            href={page.url}
            className="underline-hover text-semibold transition-color text-eb-dark-blue duration-300 sm:text-eb-grayish-blue sm:hover:text-eb-dark-blue"
          >
            {page.title}
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="">
      <AnimatePresence>
        {isMobileNavActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{ opacity: 0 }}
            className="min-w-screen fixed inset-0 top-[60px] z-10 min-h-screen bg-black/10 backdrop-blur-md"
          />
        )}
      </AnimatePresence>
      <header className="flex bg-eb-white">
        <div className="mx-auto flex w-full items-center justify-between px-6 sm:h-20 sm:max-w-[1440px]">
          <div className="relative h-[50px] w-[150px]">
            <a href="#" className="relative block h-[50px] w-[150px]">
              <Image
                src="./images/logo.svg"
                alt="logo"
                fill
                className="object-contain"
              ></Image>
            </a>
          </div>
          <nav ref={navRef}>
            {isSmallScreen ? animateNavWrapper(navContent) : navContent}
          </nav>
          <button
            className={cn(
              "hamburger hamburger--emphatic z-20 sm:hidden",
              isMobileNavActive ? "is-active" : "",
            )}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            aria-expanded={isMobileNavActive}
            onClick={hamburgerClick}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <Button className="hidden sm:block" />
        </div>
      </header>
    </div>
  );
}
