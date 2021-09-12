import React, { useState, useEffect, useCallback } from 'react'
import NewsItems from '@src/components/news-items'
import { get } from '@util/http'

function News() {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const res = await get('news')
      console.log(res)
      setData(res)
    } catch (e) {

    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="solutions block-wrap pb1">
        <div className="text-center fs-4">
          <span className="home-block-title">企业新闻</span>
        </div>

        <NewsItems 
          data={data}
        />
      </div>
    </>
  )
}

export default News