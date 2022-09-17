import React, { useRef, useState } from "react";

// Import Swiper React components
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const heroImage = [
  {
    name: "image-hero-1",
    alt: ""
  },
  {
    name: "image-hero-2",
    alt: ""
  },
  {
    name: "image-hero-3",
    alt: ""
  }
]

function Carousel() {
  return (
        <Swiper  
          modules={[Navigation]}
          navigation = {{
            prevEl: '.prevEl',
            nextEl: '.nextEl'
          }}
          className = "swiper"
        >
        {heroImage.map((item, key) => {
          return(
            <SwiperSlide key={key} className="carouselItem">
              <img src={`images/${!window.innerWidth < 1440 ? 'desktop-' : 'mobile-'}${item.name}.jpg`} alt={item.alt} />
            </SwiperSlide>
          )
        })} 
            <div className="buttonGroup">
              <button className="box prevEl"><img src="images/icon-angle-left.svg" alt="" /></button>
              <button className="box nextEl"><img src="images/icon-angle-right.svg" alt="" /></button>
            </div>
        </Swiper>
    )
}

export default Carousel;
