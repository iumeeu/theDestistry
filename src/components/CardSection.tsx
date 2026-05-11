"use client";
import { useState } from "react";

interface Card {
  title: string;
  image: string;
  body: string;
  titleTop?: string;   /* e.g. "6%", "38%", "62%" */
}

/** path สำหรับเส้นปะใน card
   จุดเริ่มและจุดจบของทุก curve อยู่ที่ y=38 เท่ากัน
   → เวลาเอามาวางต่อกันในแถวจะเห็นเป็น wave ต่อเนื่อง ∪∩∪
   control point อยู่นอก viewBox ได้ แต่ apex (จุดสูง/ต่ำสุด) อยู่ใน viewBox  */
function curvePath(dir: "down" | "up") {
  return dir === "down"
    ? "M -2,38 Q 50,92 102,38"   // ∪ ดิ่งลง — apex ที่ y=65
    : "M -2,38 Q 50,-14 102,38"; // ∩ โค้งขึ้น — apex ที่ y=12
}

export default function CardSection({ cards }: { cards: Card[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggle = (i: number) =>
    setActiveIdx((prev) => (prev === i ? null : i));

  return (
    <section className="cards">
      {cards.map((c, i) => {
        const isActive = activeIdx === i;
        // card 1, 3 → down (∪),  card 2 → up (∩)
        const dir: "down" | "up" = i % 2 === 0 ? "down" : "up";

        return (
          <article
            key={c.title}
            className={`card${isActive ? " card--active" : ""}`}
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
            onTouchEnd={(e) => { e.preventDefault(); toggle(i); }}
          >
            <div
              className="card__image"
              style={{ backgroundImage: `url(${c.image})` }}
            />
            <div className="card__overlay" />

            {/* ── เส้นปะสีขาวเฉพาะ card นี้ ── */}
            <svg
              className="card__curve"
              viewBox="0 0 100 75"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d={curvePath(dir)}
                fill="none"
                stroke="rgba(255,255,255,0.95)"
                strokeWidth="2"
                strokeDasharray="6,6"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <h3
              className="card__title"
              style={{ top: isActive ? "24px" : (c.titleTop ?? "24px") }}
            >
              {c.title.split("\n").map((line, j) => (
                <span key={j} style={{ display: "block" }}>{line}</span>
              ))}
            </h3>

            <p className="card__body">{c.body}</p>
          </article>
        );
      })}
    </section>
  );
}
