import { features, featureIntroCopy } from "@/lib/data";
export default function Features() {
  const { heading, body } = featureIntroCopy;
  return (
    <section className="">
      <div className="">
        <h2 className="">{heading}</h2>
        <p>{body}</p>
      </div>
      <div className="">
        {features.map((feature) => (
          <div className="" key={feature.title}>
            <div className="h-16 w-16 rounded-full bg-green-400" />
            <h3 className="">{feature.title}</h3>
            <p className="">{feature.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
