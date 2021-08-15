import React from 'react'

import HomeAbout from '@pages/home/about'
import Group from './group'
import Culture from './culture'

function About() {
  return (
    <>
      <div className="block-wrap pb1">
        <HomeAbout />
        <Group />
        <Culture />
      </div>
    </>
  )
}

export default About