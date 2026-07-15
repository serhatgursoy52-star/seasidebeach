"use client";

import { useEffect, useState } from "react";

const items = [
  ["/gallery/beach-bench.png", "Sahilde huzur"],
  ["/gallery/good-vibes.png", "Good vibes only"],
  ["/gallery/swing.png", "Denizin içindeki salıncak"],
  ["/beach.png", "Altınkum sahili"],
  ["/cabana.png", "Bohem localar"],
  ["/sunbeds.png", "Seaside şezlong alanı"],
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (active === null) return;

      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") {
        setActive((active - 1 + items.length) % items.length);
      }
      if (event.key === "ArrowRight") {
        setActive((active + 1) % items.length);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  return (
    <>
      <div className="galleryMosaic">
        {items.map(([src, alt], index) => (
          <button
            className="reveal"
            key={src}
            onClick={() => setActive(index)}
            type="button"
          >
            <img src={src} alt={alt} />
            <span className="galleryCaption">{alt}</span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button
            className="lightboxClose"
            onClick={() => setActive(null)}
            type="button"
          >
            ×
          </button>

          <button
            className="lightboxPrev"
            onClick={(event) => {
              event.stopPropagation();
              setActive((active - 1 + items.length) % items.length);
            }}
            type="button"
          >
            ‹
          </button>

          <img
            src={items[active][0]}
            alt={items[active][1]}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            className="lightboxNext"
            onClick={(event) => {
              event.stopPropagation();
              setActive((active + 1) % items.length);
            }}
            type="button"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
