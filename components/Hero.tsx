import Image from "next/image";

import { heroCopy } from "@/lib/data";
import Button from "./Button";

export default function Hero() {
  const { heading, body } = heroCopy;
  return (
    // <section className="overflow-hidden bg-eb-very-light-gray pb-20 ">
    <section className="overflow-hidden bg-eb-very-light-gray pb-20 ">
      <div className="flex flex-col items-center justify-center sm:mx-auto sm:max-w-[1440px] sm:flex-row">
        <div className="hero-bg mb-6 h-full min-w-[50dvw] sm:absolute sm:right-0 sm:top-0">
          <div className="relative h-full w-full px-4">
            <Image
              src="/images/image-mockups.png"
              // width={500}
              // height={500}
              fill
              alt="Mockup design"
              className="-mt-[122px] object-cover "
            />
          </div>
        </div>
        <div className="order-first max-w-[50dvw] px-6 text-center sm:text-left">
          <h1 className="mb-4 text-[2.50rem] leading-tight text-eb-dark-blue">
            {heading}
          </h1>
          <p className="mb-8 text-[0.95rem] text-eb-grayish-blue">{body}</p>
          <Button text="Request Invite" />
        </div>
      </div>
    </section>
  );
}
