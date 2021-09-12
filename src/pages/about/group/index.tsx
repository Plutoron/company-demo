import React from 'react'
import './index.css'

function Group({ data }) {
  return (
    <div className="home-group">
      <div className="text-center fs-4">
        <span className="home-block-title">组织结构</span>
      </div>

      <div className="group-img-wrap">
        <img src={data} alt="" />
      </div>
    </div>
  )
}

export default Group