import React, { useState, useEffect } from 'react'
import InfoItems, { InfoItem } from '@src/components/info-items'
import mock from '@pages/info/mock.js'

function Infos() {
  const [ infoList, setInfoList ] = useState<InfoItem[]>([])

  useEffect(() => {
    setInfoList(mock)
  }, [])

  return (
    <>
      <div className="solutions block-wrap ">
        <div className="text-center fs-4">
          <span className="home-block-title">企业新闻</span>
        </div>

        <InfoItems 
          infoList={infoList}
        />
      </div>
    </>
  )
}

export default Infos