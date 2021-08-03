import React from "react"
import { Link } from 'react-router-dom'
import './index.css'
 
const Header: React.FC<{ active?: string }>  = ({ active }) => {

  return (
    <header className="navbar navbar-expand-md fixed-top navbar-dark custom-header">
      <nav className="container container-xxl flex-wrap flex-md-nowrap">
        <Link className="navbar-brand d-flex" to="/">
          <img 
            src="https://zhengxin-pub.cdn.bcebos.com/logopic/80d1e985824bcf1d3c6cfdcef52d0750_fullsize.jpg?x-bce-process=image/resize,m_lfit,w_300" 
            alt="" 
            height="33" 
            className="d-inline-block align-text-top" 
          />

          <span>上海成事林业</span>
        </Link>
        <button className="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav flex-row flex-wrap">
            <li className="nav-item col-12 col-md-auto">
              <Link className={`nav-link${active === 'home' ? ' active' : ''}`} to="/home">首页</Link>
            </li>
            <li className="nav-item col-12 col-md-auto">
              <Link className={`nav-link${active === 'infos' ? ' active' : ''}`} to="/infos">企业资讯</Link>
            </li>
            <li className="nav-item col-12 col-md-auto">
              <Link className={`nav-link${active === 'solutions' ? ' active' : ''}`} to="/solutions">企业案例</Link>
            </li>
            <li className="nav-item col-12 col-md-auto">
              <Link className={`nav-link${active === 'about' ? ' active' : ''}`} to="/about">关于我们</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header