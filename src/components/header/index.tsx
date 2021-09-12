import React, { useEffect, useState, useCallback } from "react"
import { Link } from 'react-router-dom'
import { get } from '@util/http'
import './index.css'
 
const Header: React.FC<{ active?: string }>  = ({ active }) => {
  const [ data, setData ] = useState({})

  const getData = useCallback(async () => {
    try {
      const res = await get('company/detail')
      console.log(res)
      setData(res)
    } catch (e) {

    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const dom = document.querySelector('#navbarNav')
    dom?.classList.contains('show') && dom?.classList.remove('show')
  })

  return (
    <header className="navbar navbar-expand-md fixed-top navbar-dark custom-header">
      <nav className="container container-xxl flex-wrap flex-md-nowrap">
        <Link className="navbar-brand d-flex" to="/">
          <img 
            src={data.logo}
            alt="" 
            height="33" 
            className="d-inline-block align-text-top" 
          />

          <span className="ml8">{data.name}</span>
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
              <Link className={`nav-link${active === 'news' ? ' active' : ''}`} to="/news">公司动态</Link>
            </li>
            <li className="nav-item col-12 col-md-auto">
              <Link className={`nav-link${active === 'honor' ? ' active' : ''}`} to="/honor">资质荣誉</Link>
            </li>
            <li className="nav-item col-12 col-md-auto">
              <Link className={`nav-link${active === 'solution' ? ' active' : ''}`} to="/solution">业务成果</Link>
            </li>
            <li className="nav-item col-12 col-md-auto">
              <Link className={`nav-link${active === 'hire' ? ' active' : ''}`} to="/hire">招贤纳士</Link>
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