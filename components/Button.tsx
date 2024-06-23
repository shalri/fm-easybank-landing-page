import { cn } from "@/lib/utils";

interface ButtonProps {
  text?: string;
  className?: string;
}

export default function Button({
  text = "Required Invite",
  className = "",
}: ButtonProps) {
  return (
    <button
      className={cn(
        "h-[40px] rounded-l-full rounded-r-full bg-gradient-to-r from-[#30c667] to-[#2aafc7] px-8 text-sm font-semibold text-eb-white",
        `${className}`,
      )}
    >
      {text}
    </button>
  );
}
