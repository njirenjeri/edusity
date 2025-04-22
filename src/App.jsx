import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'

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
      </div>
    </div>
  )
}

export default App