"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps {
  text?: string;
  className?: string;
}

export default function Button({
  text = "Required Invite",
  className = "",
}: ButtonProps) {
  const hoverAnimation = {
    background: [
      "linear-gradient(to right, #30c667, #2aafc7)",
      "linear-gradient(to right, #2aafc7, #30c667)",
      "linear-gradient(to right, #30c667, #2aafc7)",
    ],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  };
  const textGlowAnimation = {
    textShadow: [
      "0 0 8px rgba(255, 255, 255, 0.6)",
      "0 0 16px rgba(255, 255, 255, 0.6)",
      "0 0 24px rgba(255, 255, 255, 0.6)",
      "0 0 32px rgba(255, 255, 255, 0.6)",
    ].join(", "),
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };
  return (
    <motion.button
      initial={{ background: "linear-gradient(to right, #30c667, #2aafc7)" }}
      whileHover={hoverAnimation}
      className={cn(
        "hover:gradient-to-r duration-400 h-[40px] rounded-l-full rounded-r-full bg-gradient-to-r from-[#30c667] to-[#2aafc7] px-8 text-sm font-semibold text-eb-white",
        `${className}`,
      )}
    >
      <motion.span
        initial={{ textShadow: "none" }}
        whileHover={textGlowAnimation}
      >
        {text}
      </motion.span>
    </motion.button>
  );
}
