import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Programs/>
      </div>
    </div>
  )
}

export default App