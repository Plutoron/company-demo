import React, { useState, useEffect } from 'react'
import { SolutionItem } from '@src/pages/solution/index'
import './solution.css'

const mock = [{
  id: 1,
  name: '解决方案111',
  imgUrl: 'https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF'
}, {
  id: 2,
  name: '解决方案222',
  imgUrl: 'https://t7.baidu.com/it/u=4080826490,615918710&fm=193&f=GIF'
}, {
  id: 3,
  name: '解决方案333',
  imgUrl: 'https://t7.baidu.com/it/u=4080826490,615918710&fm=193&f=GIF'
}]

function Solution() {
  const [ solutionList, setSolutionList ] = useState<SolutionItem[]>([])

  useEffect(() => {
    setSolutionList(mock)
  }, [])

  return (
    <div className="solution">
      <div className="text-center fs-4">
        <span className="home-block-title">案例展示</span>
      </div>

      <div className="row g-2 g-sm-3"> 
        {
          solutionList.map(({ id, name, imgUrl }) => {
            return (
              <div className="col-12 col-sm-6" key={id}>
                <div className="card">
                  <img src={imgUrl} className="card-img-top" alt="" />
                  <div className="card-img-overlay d-flex align-items-end">
                    <h5 className="card-title solution-name">{name}</h5>
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