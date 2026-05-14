import Footer from "@/src/components/footer";
import LangSwitch from "@/src/components/LangSwitch";
import CardSection from "@/src/components/CardSection";

const cards = [
  {
    title: "Redefining Functional Aesthetics",
    image: "/images/card-aesthetics.png",
    titleTop: "30%",
    body: "At The Dentistry, we redefine functional aesthetics by creating smiles that balance beauty, function, and long-term oral health. Through precise technology and experienced dentists, we deliver personalized treatment that is efficient, predictable, and designed for lasting results.",
  },
  {
    title: "Peace Of Mind",
    image: "/images/card-peace.jpg",
    titleTop: "75%",
    body: "Because we believe that true peace of mind doesn't come from technology alone, but from having a team that is ready to listen, explain, and support you with understanding every step of the way.",
  },
  {
    title: "Technically Precise",
    image: "/images/card-precise.jpg",
    titleTop: "6%",
    body: "At The Dentistry, we use Intraoral Scanners, Digital Treatment Planning, and AI Smile Simulation to deliver more precise and accurate treatment planning, while helping you clearly visualize and better understand the treatment process before starting your treatment.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__logo-pin">
          <img src="/images/short-logo.png" className="logo-img-short" alt="The Dentistry" />
        </div>
        <div className="hero__topbar">
          <LangSwitch />
          <img src="/images/logo.png" className="logo-img-brand" alt="TheDentistry" />
        </div>
        <div className="hero__divider" />
        <h1 className="hero__title">
          A complete destination
          <br />
          for precision technology
          <br />
          and expert dental care
        </h1>
      </section>

      <CardSection cards={cards} />
      <Footer />
    </main>
  );
}
