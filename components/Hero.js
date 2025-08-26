import React, { useState } from "react";

export default function Hero({ data }) {
  const hero = data?.hero ?? data;
  const images = Array.isArray(hero?.backgroundImage) ? hero.backgroundImage : [];

  const [imgIndex, setImgIndex] = useState(0);

  const forwardCarousel = () => {
    if (!images.length) return;
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  const backwardCarousel = () => {
    if (!images.length) return;
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) {
    console.warn("Hero: backgroundImage is missing or not an array", hero);
    return null;
  }

  return (
    <section className="relative w-full h-[500px] lg:h-[650px] overflow-hidden">
      {/* Image */}
      <img
        key={imgIndex}
        src={images[imgIndex]}
        alt={`hero-${imgIndex}`}
        className="w-full h-full object-cover transition-all duration-1000"
      />

      {/* Controls */}
      <button
        onClick={backwardCarousel}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full "
        aria-label="Previous slide"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
          alt="Previous"
          className="w-6 h-6"
        />
      </button>

      <button
        onClick={forwardCarousel}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full "
        aria-label="Next slide"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
          alt="Next"
          className="w-6 h-6 "
        />
      </button>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{hero.headline}</h1>
        <p className="text-lg md:text-xl mb-6">{hero.subheadline}</p>

        <div className="flex flex-wrap justify-center gap-4">
          {hero.cta?.primary && (
            <a
              href={hero.cta.primary.link}
              className="pointer-events-auto bg-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              {hero.cta.primary.text}
            </a>
          )}
          {hero.cta?.secondary && (
            <a
              href={hero.cta.secondary.link}
              className="pointer-events-auto bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              {hero.cta.secondary.text}
            </a>
          )}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIndex(i)}
            className={`h-2.5 w-2.5 rounded-full ${i === imgIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
