import Footer from "@/src/components/footer";
import { FaFacebook, FaFacebookF, FaInstagram, FaLine } from "react-icons/fa";

const cards = [
  {
    title: "Redefining Functional\nAesthetics",
    image: "/images/card-aesthetics.png",
    body: `เราเชื่อว่ารอยยิ้มที่สวยงาม ต้องมาพร้อมสุขภาพช่องปากที่สมบูรณ์
การออกแบบรอยยิ้มเฉพาะบุคคล จึงไม่ได้คำนึงเพียงความสวยงาม แต่รวมถึงการบดเคี้ยว การออกเสียง เพื่อความมั่นใจในการใช้ชีวิตในทุกวัน
`,
  },
  {
    title: "Peace Of Mind",
    image: "/images/card-peace.jpg",
    body: `เรานำเสนอกระบวนการรักษา บนหลักการและเหตุผลที่ชัดเจน
เพื่อให้คนไข้ได้รับข้อมูลอย่างครบถ้วน ในทุกขั้นตอนของการรักษา และร่วมกันกำหนดทางเลือก ที่เหมาะสมที่สุดไปพร้อมกัน`,
  },
  {
    title: "Technically Precise",
    image: "/images/card-precise.jpg",
    body: "แนวทางใหม่ของการดูแลทันตกรรม เพื่อความงามและสุขภาพ ที่คัดสรรเทคโนโลยีทันตกรรมระดับโลกผสานกับความเชี่ยวชาญของทีมทันตแพทย์ที่ผ่านการฝึกฝนอย่างต่อเนื่อง เพื่อมอบผลลัพธ์ที่แม่นยำ ละเอียด และเป็นเลิศในทุกมิติ",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__topbar">
          <div className="hero__logo">
            <div className="hero__brand__left">
              <div className="accent__left">
                <img
                  src="/images/short-logo.png"
                  style={{
                    width: 65,
                    height: 82,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="hero__brand">
            <img
              src="/images/logo.png"
              style={{
                width: "auto",
                height: 28,
                objectFit: "contain",
              }}
            />
            {/* The<span className="accent"></span>entistry */}
          </div>
        </div>
        <div className="hero__divider" />
        <h1 className="hero__title">
          A complete destination
          <br />
          for precision technology
          <br />
          and expert dental care
        </h1>
        <p className="hero__paragraph">
          เทคโนโลยีที่แม่นยำ <br /> ผสานการรักษาที่เชี่ยวชาญ
        </p>
      </section>

      <section className="cards">
        {cards.map((c) => (
          <article
            key={c.title}
            className="card"
            style={{ backgroundImage: `url(${c.image})` }}
          >
            <div
              className="card__image overlay"
              style={{ backgroundImage: `url(${c.image})` }}
            />
            <div className="card__overlay" />
            <h3 className="card__title">
              {c.title.split("\n").map((line, i) => (
                <span key={i} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </h3>
            <p className="card__body">{c.body}</p>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
