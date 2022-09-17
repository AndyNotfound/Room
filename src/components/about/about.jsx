import React from 'react'
import '../scss/style.css'
import darkAbout from '../../images/image-about-dark.jpg'
import lightAbout from '../../images/image-about-light.jpg'

export default function About() {
  return (
    <section className="about">
      <img src={darkAbout} />
      <div>
        <h2>About our furniture</h2>
        <p className="paragraph">Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>
      <img src={lightAbout} />
    </section>
  )
}
