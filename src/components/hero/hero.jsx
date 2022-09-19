import React, { useRef, useState } from "react";

// Import Swiper React components
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../scss/style.css'
import arrowImg from "../../images/icon-arrow.svg"

const heroImage = [
  {
    name: "image-hero-1",
    alt: "",
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    name: "image-hero-2",
    alt: "",
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    name: "image-hero-3",
    alt: "",
    title: "About our furniture",
    desc: "Our multifunctional collection blends design and function to suit your individual taste Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space."
  }
]

function Hero() {
  return (
    <div className='main'>
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
            <div className="hero">
              <h1>{item.title}</h1>
              <p className="paragraph">{item.desc}</p>
              <div className="link">
                <a href="">Shop now</a>
                <img src={arrowImg} />
              </div>
            </div>
          </SwiperSlide>
        )
      })} 
          <div className="buttonGroup">
            <button className="box prevEl"><img src="images/icon-angle-left.svg" alt="" /></button>
            <button className="box nextEl"><img src="images/icon-angle-right.svg" alt="" /></button>
          </div>
      </Swiper>
    </div>
  )
}

export default Hero
