import React, { useState, useEffect } from 'react'
import InfoItems, { InfoItem } from '@src/components/info-items'
import mock from '@src/pages/info/mock.js'

function Info() {
  const [ infoList, setInfoList ] = useState<InfoItem[]>([])

  useEffect(() => {
    setInfoList(mock)
  }, [])

  return (
    <div className="info">
      <div className="text-center fs-4">
        <span className="home-block-title">公司新闻</span>
      </div>

      <InfoItems 
        infoList={infoList}
      />
    </div>
  )
}

export default Info