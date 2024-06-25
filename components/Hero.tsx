"use client";
import Image from "next/image";

import { heroCopy } from "@/lib/data";
import Button from "./Button";
import useWindowSize from "@/hooks/useWindowSize";

export default function Hero() {
  const { heading, body } = heroCopy;
  const { width } = useWindowSize();
  return (
    <section className="bg-eb-very-light-gray pb-20 sm:relative sm:flex sm:min-h-[50dvh] sm:items-center sm:overflow-x-clip sm:overflow-y-visible sm:pb-0 lg:min-h-[70dvh]">
      <div className="flex flex-col items-center justify-center sm:mx-auto sm:grid sm:h-full sm:max-w-[1440px] sm:grid-cols-2">
        <div className="hero-bg mb-6 h-full px-4 sm:absolute sm:right-0 sm:top-0 sm:-mr-[100px] sm:mb-0 sm:h-[120%] sm:min-w-[60dvw] sm:px-0">
          <div className="relative h-full w-full sm:min-h-full">
            <Image
              src="/images/image-mockups.png"
              {...(width >= 900
                ? { layout: "fill" }
                : { width: 500, height: 500 })}
              alt="Mockup design"
              className="-mt-[122px] object-cover sm:mt-8 sm:object-contain"
            />
          </div>
        </div>
        <div className="px-6 text-center sm:order-first sm:max-w-[50dvw] sm:self-center sm:text-left">
          <h1 className="mb-4 text-[2.50rem] leading-tight text-eb-dark-blue sm:text-[3.25rem]">
            {heading}
          </h1>
          <p className="mb-8 text-[0.95rem] text-eb-grayish-blue sm:max-w-[450px] sm:text-base">
            {body}
          </p>
          <Button text="Request Invite" />
        </div>
      </div>
    </section>
  );
}
