import { latestArticles } from "@/lib/data";

export default function LatestArticles() {
  return (
    <section className="">
      <h2 className="">Lastest Articles</h2>
      <div className="">
        {latestArticles.map((article, i) => (
          <div className="" key={i}>
            <div className="h-[250px] w-[375px] bg-gray-500" />
            <p>by {article.author}</p>
            <h3 className="">{article.title}</h3>
            <p className="">{article.intro}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
