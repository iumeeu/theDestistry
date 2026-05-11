"use client";
import { useState } from "react";

interface Card {
  title: string;
  image: string;
  body: string;
  titleTop?: string;   /* e.g. "6%", "38%", "62%" */
}

export default function CardSection({ cards }: { cards: Card[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggle = (i: number) =>
    setActiveIdx((prev) => (prev === i ? null : i));

  return (
    <section className="cards">
      {cards.map((c, i) => {
        const isActive = activeIdx === i;
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

            {/*
              Title position:
              - Default state → titleTop (custom % position on image)
              - Active/hover  → snap to top so body fits below it
            */}
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
