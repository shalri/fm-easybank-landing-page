import Image from "next/image";

import { heroCopy } from "@/lib/data";
import Button from "./Button";

export default function Hero() {
  const { heading, body } = heroCopy;
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden pb-20">
      <div className="hero-bg mb-6 h-full min-w-[375px]">
        <div className="relative h-full w-full px-4">
          <Image
            src="/images/image-mockups.png"
            width={500}
            height={500}
            alt="Mockup design"
            className="-mt-[122px] object-contain"
          />
        </div>
      </div>
      <div className="px-6 text-center">
        <h1 className="mb-4 text-[2.50rem] leading-tight text-eb-dark-blue">
          {heading}
        </h1>
        <p className="mb-8 text-[0.95rem] text-eb-grayish-blue">{body}</p>
        <Button text="Request Invite" />
      </div>
    </section>
  );
}
