import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            {/* <h1>Glory Of His Presence International Ministries</h1>
            <p>...we are the salt of the earth</p> */}
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students
                with the knowledge, skills and experience needed to excel in the dynamic
                field of education
            </p>
            <button className="btn">Explore More <img src={dark_arrow}alt="" /></button>
        </div>
        
    </div>
  )
}

export default Hero