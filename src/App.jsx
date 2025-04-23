import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title subTitle='our programs' title='what we offer'/>
        <Programs/>
        <About/>
        <Title subTitle='gallery' title='campus photos' />
        <Campus/>
        <Title subTitle='testimonials' title='what a student says' />
        <Testimonials/>
        <Title subTitle='contact us' title='get in touch' />
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App