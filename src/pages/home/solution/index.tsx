import React, { useState, useEffect } from 'react'
import { SolutionItem } from '@src/pages/solution/index'
import './solution.css'

const Solution: React.FC<{ data: SolutionItem[] }> = ({ data }) => {
  return (
    <div className="solution">
      <div className="text-center fs-4">
        <span className="home-block-title">案例展示</span>
      </div>

      <div className="row g-2 g-sm-3"> 
        {
          data.map(({ id, title, img }) => {
            return (
              <div className="col-12 col-sm-4" key={id}>
                <div className="card">
                  <img src={img} className="card-img-top" alt="" />
                  <div className="card-img-overlay">
                    <h5 className="solution-name">{title}</h5>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Solution