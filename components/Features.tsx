import { features, featureIntroCopy } from "@/lib/data";
import Image from "next/image";
export default function Features() {
  const { heading, body } = featureIntroCopy;
  return (
    <section className="bg-eb-light-grayish-blue pb-8 pt-16">
      <div className=" mx-auto  sm:max-w-[1440px]">
        <div className="mb-14 px-6 text-center sm:text-left">
          <h2 className="text-[2rem] leading-tight text-eb-dark-blue sm:text-[2.525rem]">
            {heading}
          </h2>
          <p className="mt-4 text-[0.95rem] text-eb-grayish-blue sm:max-w-[50%] sm:text-base">
            {body}
          </p>
        </div>
        <div className="gap-x-8 sm:grid sm:grid-cols-4 sm:px-6">
          {features.map((feature) => (
            <div
              className="mb-8 flex flex-col items-center justify-center px-6 sm:items-start sm:justify-start sm:px-0"
              key={feature.title}
            >
              <div className="relative h-[72px] w-[72px] rounded-full">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-4 mt-5 text-[1.30rem] text-eb-dark-blue sm:mb-6 sm:mt-10 sm:text-2xl">
                {feature.title}
              </h3>
              <p className="text-center text-[0.95rem] text-eb-grayish-blue sm:text-left sm:text-[0.985rem]">
                {feature.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
