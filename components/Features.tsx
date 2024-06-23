import { features, featureIntroCopy } from "@/lib/data";
import Image from "next/image";
export default function Features() {
  const { heading, body } = featureIntroCopy;
  return (
    <section className="bg-eb-very-light-gray pb-8 pt-16">
      <div className="mb-14 px-6 text-center">
        <h2 className="text-[2rem] text-eb-dark-blue">{heading}</h2>
        <p className="mt-3 text-[0.95rem] text-eb-grayish-blue">{body}</p>
      </div>
      <div className="">
        {features.map((feature) => (
          <div
            className="mb-8 flex flex-col items-center justify-center px-6"
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
            <h3 className="mb-4 mt-5 text-[1.30rem] text-eb-dark-blue">
              {feature.title}
            </h3>
            <p className="text-center text-[0.95rem] text-eb-grayish-blue">
              {feature.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
