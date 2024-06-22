"use client";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const hamburgerClick = () => {
    setIsMobileNavActive((prev) => !prev);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isMobileNavActive]);

  const animateNavWrapper = (children: ReactNode) => (
    <AnimatePresence>
      {isMobileNavActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-6 right-6 z-10 mt-16 rounded-md bg-eb-white"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );

  const navContent = (
    <ul
      className={cn(
        "",
        isMobileNavActive && "flex w-full flex-col items-center",
      )}
    >
      {navLinks.map((page) => (
        <li className="" key={page.title}>
          <a href={page.url} className="">
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
      <header className="flex justify-between bg-eb-white">
        <div className="mx-6 flex w-full items-center justify-between">
          {/* <div className="relative h-[50px] w-[150px]"> */}
          <div className="">
            <a href="/" className="relative block h-[50px] w-[150px]">
              <Image
                src="./images/logo.svg"
                alt="logo"
                fill
                className="object-contain"
              ></Image>
            </a>
          </div>
          <nav>
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
        </div>
      </header>
    </div>
  );
}
