import React, { useEffect, useState } from 'react';

const AutoCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [1, 2, 3, 4];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length ? 1 : prev + 1));
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const navigateSlide = (slide) => {
    setActiveSlide(slide);
  };

  return (
    <div className="carousel w-full overflow-hidden h-auto md:h-[80vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          id={`slide${slide}`}
          className={`carousel-item relative w-full ${activeSlide === slide ? 'block' : 'hidden'}`}
        >
          <img
            src={`https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/banner/${slide}.webp`}
            className="w-full"
            alt={`Slide ${slide}`}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() => navigateSlide(slide === 1 ? slides.length : slide - 1)}
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() => navigateSlide(slide === slides.length ? 1 : slide + 1)}
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutoCarousel;
