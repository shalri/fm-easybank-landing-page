import Image from "next/image";

import { heroCopy } from "@/lib/data";

export default function Hero() {
  const { heading, body } = heroCopy;
  return (
    //    {/* <section className="overflow-hidden bg-eb-white bg-[url(/images/bg-intro-mobile.svg)] bg-cover bg-right-top bg-no-repeat"> */}
    <section className="flex flex-col items-center justify-center overflow-hidden  bg-[url(/images/bg-intro-mobile.svg)] bg-cover bg-right-top bg-no-repeat">
      <div className="min-w-[375px]bg-eb-white h-full">
        <div className="h-full w-full px-4">
          <Image
            src="/images/image-mockups.png"
            width={500}
            height={500}
            alt="Mockup design"
            // className="-mt-[122px] object-contain"
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <h1 className="">{heading}</h1>
        <p className="">{body}</p>
      </div>
      <button>request invite</button>
    </section>
  );
}
