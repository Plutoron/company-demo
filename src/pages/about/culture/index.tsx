import React, { useState, useEffect } from 'react'
import './index.css'

function Culture() {
  const [ groupImg, setGroupImg ] = useState<string>()

  useEffect(() => {
    setGroupImg('http://www.cnpiecsb.com/upload/images/introduce/20200410/a5e21b2e0ba7b3437a7cf80723574bbd.png')
  }, [])

  return (
    <div className="home-group">
      <div className="text-center fs-4">
        <span className="home-block-title">企业文化</span>
      </div>

      <div className="group-img-wrap text-center">
        {/* <img src={groupImg} alt="" /> */}
        这里是富文本 / 或者纯文本
      </div>
    </div>
  )
}

export default Culture