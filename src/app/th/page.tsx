import Footer from "@/src/components/footer";
import LangSwitch from "@/src/components/LangSwitch";
import CardSection from "@/src/components/CardSection";

const cards = [
  {
    title: "Redefining Functional\nAesthetics",
    image: "/images/card-aesthetics.png",
    body: "เราเชื่อว่ารอยยิ้มที่สวยงาม ต้องมาพร้อมสุขภาพช่องปากที่สมบูรณ์ การออกแบบรอยยิ้มเฉพาะบุคคล จึงไม่ได้คำนึงเพียงความสวยงาม แต่รวมถึงการบดเคี้ยว การออกเสียง เพื่อความมั่นใจในการใช้ชีวิตในทุกวัน",
  },
  {
    title: "Peace Of Mind",
    image: "/images/card-peace2.jpg",
    body: "เรานำเสนอกระบวนการรักษา บนหลักการและเหตุผลที่ชัดเจน เพื่อให้คนไข้ได้รับข้อมูลอย่างครบถ้วน ในทุกขั้นตอนของการรักษา และร่วมกันกำหนดทางเลือกที่เหมาะสมที่สุดไปพร้อมกัน",
  },
  {
    title: "Technically Precise",
    image: "/images/card-precise.jpg",
    body: "แนวทางใหม่ของการดูแลทันตกรรม เพื่อความงามและสุขภาพ ที่คัดสรรเทคโนโลยีทันตกรรมระดับโลก ผสานกับความเชี่ยวชาญของทีมทันตแพทย์ที่ผ่านการฝึกฝนอย่างต่อเนื่อง เพื่อมอบผลลัพธ์ที่แม่นยำ ละเอียด และเป็นเลิศในทุกมิติ",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">

        {/* ── D logo: centred on the sidebar / hero boundary ── */}
        <div className="hero__logo-pin">
          <img
            src="/images/short-logo.png"
            className="logo-img-short"
            alt="The Dentistry"
          />
        </div>

        {/* ── Topbar: TH/EN (left) + wordmark (right) ── */}
        <div className="hero__topbar">
          <LangSwitch />
          <img
            src="/images/logo.png"
            className="logo-img-brand"
            alt="TheDentistry"
          />
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
          เทคโนโลยีที่แม่นยำ
          <br />
          ผสานการรักษาที่เชี่ยวชาญ
        </p>
      </section>

      <CardSection cards={cards} />
      <Footer />
    </main>
  );
}
