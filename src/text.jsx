import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

const MySwiperComponent = () => {
  const swiperRef = useRef(null);
  let swiperInstance = null;

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance = new Swiper(swiperRef.current, {
        slidesPerView: 4,
        loop: false, // Disable loop
        autoplay: {
          delay: 200, // Set your desired autoplay delay
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          slideChange: () => {
            handleAutoplay();
          },
        },
      });
    }
  }, []);

  const handleAutoplay = () => {
    if (swiperInstance.autoplay.running) {
      swiperInstance.autoplay.stop();
      swiperInstance.autoplay.start();
    }
  };

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        {/* Add your slides here */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        <div className="swiper-slide">Slide 3</div>
        <div className="swiper-slide">Slide 3</div>
        <div className="swiper-slide">Slide 2</div>

        <div className="swiper-slide">Slide 3</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 1</div>


        {/* Add more slides as needed */}
      </div>

      {/* Add navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default MySwiperComponent;
