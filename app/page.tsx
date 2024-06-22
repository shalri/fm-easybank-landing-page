import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LatestArticles from "@/components/LatestArticles";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <LatestArticles />
      {/* <main className="flex flex-grow flex-col items-center justify-center bg-yellow-500 p-24"> */}
      {/* <SandBox /> */}
      {/* </main> */}
      <Footer />
    </>
  );
}
