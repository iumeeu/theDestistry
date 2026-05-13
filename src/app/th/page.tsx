import Footer from "@/src/components/footer";
import LangSwitch from "@/src/components/LangSwitch";
import CardSection from "@/src/components/CardSection";

const cards = [
  {
    title: "Redefining Functional Aesthetics",
    image: "/images/card-aesthetics.png",
    titleTop: "30%",
    body: "The Dentistry พร้อมมอบทั้งรอยยิ้มที่สวยงามและการใช้งานที่ดี ผ่านกระบวนการรักษาที่รวดเร็ว คาดการณ์ได้ และใส่ใจในทุกขั้นตอน ด้วยความรับผิดชอบต่อคุณภาพงานรักษาในระยะยาว เราเชื่อว่ารอยยิ้มที่ดี จะถูกออกแบบมาเพื่อแต่ละบุคคลด้วยเทคโนโลยีที่แม่นยำและทีมทันตแพทย์ผู้มีประสบการณ์",
  },
  {
    title: "Peace Of Mind",
    image: "/images/card-peace2.jpg",
    titleTop: "75%",
    body: "เพราะเราเชื่อว่า “ความสบายใจ” ไม่ได้เกิดจาก technology เพียงอย่างเดียวแต่เกิดจากการมีทีมที่พร้อมรับฟัง อธิบาย และดูแลคุณด้วยความเข้าใจในทุกขั้นตอน",
  },
  {
    title: "Technically Precise",
    image: "/images/999506_0_0-2.jpg",
    titleTop: "6%",
    body: "ที่ The Dentistry เราใช้ Intraoral Scanner, Digital Treatment Planning และAI Smile Simulation เพื่อช่วยให้คุณเห็นภาพ และเข้าใจกระบวนการรักษาได้ชัดเจนมากขึ้นก่อนเริ่มการดูแล",
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
        {/* <p className="hero__paragraph">
          เทคโนโลยีที่แม่นยำ
          <br />
          ผสานการรักษาที่เชี่ยวชาญ
        </p> */}
      </section>

      <CardSection cards={cards} />
      <Footer />
    </main>
  );
}
