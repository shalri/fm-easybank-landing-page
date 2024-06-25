"use client";
import { cn } from "@/lib/utils";
import { motion, LayoutGroup } from "framer-motion";

interface ButtonProps {
  text?: string;
  className?: string;
}

export default function Button({
  text = "Request Invite",
  className = "",
}: ButtonProps) {
  const hoverAnimation = {
    background: [
      "linear-gradient(to right, #30c667, #2aafc7)",
      "linear-gradient(to right, #2aafc7, #30c667)",
      "linear-gradient(to right, #30c667, #2aafc7)",
    ],
    textShadow: [
      "0 0 8px rgba(255, 255, 255, 0.6)",
      "0 0 16px rgba(255, 255, 255, 0.6)",
      "0 0 24px rgba(255, 255, 255, 0.6)",
      "0 0 32px rgba(255, 255, 255, 0.6)",
    ].join(", "),
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  };
  return (
    <motion.button>
      <motion.a
        href="#"
        initial={{ background: "linear-gradient(to right, #30c667, #2aafc7)" }}
        whileHover={hoverAnimation}
        className={cn(
          "hover:gradient-to-r duration-400 group-hover flex h-[40px] items-center justify-center rounded-l-full rounded-r-full bg-gradient-to-r from-[#30c667] to-[#2aafc7] px-8 text-sm font-semibold text-eb-white",
          `${className}`,
        )}
      >
        {text}
      </motion.a>
    </motion.button>
  );
}
