import React, { useState, useEffect } from 'react'
import './index.css'

function Group() {
  const [ groupImg, setGroupImg ] = useState<string>()

  useEffect(() => {
    setGroupImg('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.processon.com%2Fchart_image%2F5351f5790cf2bd1d413ffd85.png&refer=http%3A%2F%2Fwww.processon.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631674505&t=850c318a2be1c0f30fdd0f04629d940a')
  }, [])

  return (
    <div className="home-group">
      <div className="text-center fs-4">
        <span className="home-block-title">组织结构</span>
      </div>

      <div className="group-img-wrap">
        <img src={groupImg} alt="" />
      </div>
    </div>
  )
}

export default Group