import React, { useState, useEffect } from 'react'
import './index.css'

function Group() {
  const [ groupImg, setGroupImg ] = useState<string>()

  useEffect(() => {
    setGroupImg('http://www.cnpiecsb.com/upload/images/introduce/20200410/a5e21b2e0ba7b3437a7cf80723574bbd.png')
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