import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../Assets/image 1.png";
import { Autoplay, Navigation } from "swiper";
import "./news_Slider.css";
import image2 from "../Assets/image 6.png";
import Data from "../List_of_taprize_card/Data";
import Item from "antd/es/list/Item";
import { useNavigate } from "react-router-dom";
export default function News_Slider() {
  const history = useNavigate();
  return (
    <div className="Slider_News_Bg">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          425: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {Data.map((items, index) => {
          return (
            <>
              <SwiperSlide className="Rem">
                <div className="card card_slider hvrBx" onClick={() =>( history(`/TarpizeSingleFullPage`,{state:items}),window.scrollTo(0, 0))}>
                  <img src={items.Image} alt="" width="50%" className="hvrImg" />
                  <div className="row mt-4 p-2 crddSldAGN">
                    <div className="col-lg-3 text-start">
                      <p className="slider_date">2023.5.2</p>
                    </div>
                    <div className="col-lg-9 slider_text">
                      台スマ境報コリホ直西時のご表74更ヘヤ無車のも
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}

       
      </Swiper>
    </div>
  );
}
