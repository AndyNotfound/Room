import React from 'react'
import '../scss/style.css'
import arrowImg from "../../images/icon-arrow.svg"

function Hero() {
  return (
    <div className="hero">
      <h1> Discover innovative ways to decorate</h1>
      <p>We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.</p>
      <div className="link">
        <a href="#">Shop now</a>
        <img src={arrowImg} />
      </div>
    </div>
  )
}

export default Hero
