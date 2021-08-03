import React from 'react'
import './about.css'

function About() {
  return (
    <div className="">
      <div className="text-center fs-4">
        <span className="home-block-title">公司介绍</span>
      </div>

      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="http://ntemimg.wezhan.cn/contents/sitefiles2005/10029292/images/-35440.jpg" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">公司简介</h5>
              <p className="card-text">上海成事林业规划设计有限公司于2002年07月05日成立。法定代表人盛全根，公司经营范围包括：林业调查和规划、设计、监理和咨询，造林绿化，技术服务等</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About