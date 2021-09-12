import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import moment from 'moment'
import { NewsItem } from '@src/components/news-items'
import { get } from '@util/http'
import './index.css'

interface Detail extends NewsItem {
  html: string
}

function InfoDetail() {
  const { id } = useParams()
  const [ info, setInfo ] = useState<Detail>()

  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const res = await get(`news/${id}`)
      console.log(res)
      setInfo(res)
    } catch (e) {

    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="block-wrap info-detail">
        <div className="nav text-ellis">
          <Link to="/news">企业资讯</Link> <span className="split">/</span> { info?.title }
        </div>

        <div className="text-center fs-4">
          <div className="home-block-title">{info?.title}</div>
          <div className="news-time">{moment(info?.time).format('YYYY-MM-DD')}</div>
        </div>

        <div className="info-content-wrap" dangerouslySetInnerHTML={{ __html: info?.html }}>
        </div>
      </div>
    </>
  )
}

export default InfoDetail