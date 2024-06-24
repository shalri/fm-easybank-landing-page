import { latestArticles } from "@/lib/data";
import Image from "next/image";

export default function LatestArticles() {
  return (
    <section className="bg-eb-very-light-gray pb-16 pt-20">
      <div className="sm:px-6 sm:mx-auto sm:max-w-[1440px]">
        <h2 className="mb-8 px-6 text-center text-[2rem]  leading-tight text-eb-dark-blue sm:mb-12 sm:text-left sm:text-[2.525rem]">
          Lastest Articles
        </h2>
        <div className="sm:grid sm:grid-cols-4 sm:gap-x-8">
          {latestArticles.map((article, i) => (
            <div
              className="mx-6 mb-6 overflow-hidden rounded-md bg-eb-white pb-10 sm:mx-0"
              key={i}
            >
              <div className="relative h-[200px] w-auto">
                <Image
                  src={article.image}
                  alt="article image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-7 px-[30px]">
                <p className="text-[0.65rem] text-eb-grayish-blue">
                  by {article.author}
                </p>
                <h3 className="my-2 text-[1.1rem] leading-tight text-eb-dark-blue">
                  <a
                    href="#"
                    className="transition-color duration-300 hover:text-eb-lime-green"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-[0.825rem] text-eb-grayish-blue">
                  {article.intro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
