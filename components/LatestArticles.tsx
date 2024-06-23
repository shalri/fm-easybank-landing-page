import { latestArticles } from "@/lib/data";
import Image from "next/image";

export default function LatestArticles() {
  return (
    <section className="bg-eb-very-light-gray pb-16 pt-20">
      <h2 className="mb-8 px-6 text-center text-[2rem] leading-tight text-eb-dark-blue">
        Lastest Articles
      </h2>
      <div className="">
        {latestArticles.map((article, i) => (
          <div
            className="mx-6 mb-6 overflow-hidden rounded-md bg-eb-white pb-10"
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
                {article.title}
              </h3>
              <p className="text-[0.825rem] text-eb-grayish-blue">
                {article.intro}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
