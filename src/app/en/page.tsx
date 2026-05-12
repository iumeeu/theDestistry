import Footer from "@/src/components/footer";
import LangSwitch from "@/src/components/LangSwitch";
import CardSection from "@/src/components/CardSection";

const cards = [
  {
    title: "Redefining Functional Aesthetics",
    image: "/images/card-aesthetics.png",
    titleTop: "30%",
    body: "We believe beauty should go hand in hand with optimal oral health. Our personalized smile design approach considers both function and phonetics, so you can live confidently every day.",
  },
  {
    title: "Peace Of Mind",
    image: "/images/card-peace2.jpg",
    titleTop: "75%",
    body: "We provide treatment plans guided by clear clinical rationale and measurable outcomes. Patients are fully informed at every stage and can confidently participate in choosing the most suitable treatment options.",
  },
  {
    title: "Technically Precise",
    image: "/images/card-precise.jpg",
    titleTop: "6%",
    body: "A new standard in dental care for aesthetics and oral health, featuring world-class dental technologies combined with the expertise of continuously trained dentists to deliver precise, refined, and exceptional results in every dimension.",
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
