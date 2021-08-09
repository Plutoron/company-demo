import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { InfoItem } from '@src/components/info-items'
import './index.css'

import mock from '@pages/info-detail/mock.js'

interface Detail extends InfoItem {
  content: string
}

function InfoDetail() {
  const [ info, setInfo ] = useState<Detail>()

  useEffect(() => {
    setInfo(mock)
  }, [])

  return (
    <>
      <div className="block-wrap info-detail">
        <div className="nav text-ellis">
          <Link to="/info">企业资讯</Link> <span className="split">/</span> { info?.title }
        </div>

        <div className="text-center fs-4">
          <span className="home-block-title">{info?.title}</span>
        </div>

        { info?.content }
      </div>
    </>
  )
}

export default InfoDetail