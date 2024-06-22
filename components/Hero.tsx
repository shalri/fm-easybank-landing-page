import { heroCopy } from "@/lib/data";

export default function Hero() {
  const { heading, body } = heroCopy;
  return (
    <section className="bg-eb-white bg-[url(/images/bg-intro-mobile.svg)] bg-cover bg-right-top bg-no-repeat">
      <div className="h-"></div>
      <div>
        <h1 className="">{heading}</h1>
        <p className="">{body}</p>
      </div>
      <button>request invite</button>
    </section>
  );
}
