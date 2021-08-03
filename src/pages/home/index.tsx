import React from 'react'
import Carousel from './carousel'
import About from './about'
import Solution from './solution'
import Info from './info'
import './home.css'

function Home() {
  return (
    <>
      <Carousel />
      <div className="block-wrap">
        <About />
        <Solution />
        <Info />
      </div>
    </>
  )
}

export default Home