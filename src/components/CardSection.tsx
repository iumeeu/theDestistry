"use client";
import { useState } from "react";

interface Card {
  title: string;
  image: string;
  body: string;
}

export default function CardSection({ cards }: { cards: Card[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggle = (i: number) =>
    setActiveIdx((prev) => (prev === i ? null : i));

  return (
    <section className="cards">
      {cards.map((c, i) => (
        <article
          key={c.title}
          className={`card${activeIdx === i ? " card--active" : ""}`}
          onMouseEnter={() => setActiveIdx(i)}
          onMouseLeave={() => setActiveIdx(null)}
          onTouchEnd={(e) => {
            e.preventDefault();
            toggle(i);
          }}
        >
          <div
            className="card__image"
            style={{ backgroundImage: `url(${c.image})` }}
          />
          <div className="card__overlay" />
          <h3 className="card__title">
            {c.title.split("\n").map((line, j) => (
              <span key={j} style={{ display: "block" }}>
                {line}
              </span>
            ))}
          </h3>
          <p className="card__body">{c.body}</p>
        </article>
      ))}
    </section>
  );
}
