import React, { useState, useEffect, useCallback } from 'react'
import { get } from '@util/http'
import './index.css'

function Culture() {
  const [ data, setData ] = useState<string>()

  const getData = useCallback(async () => {
    try {
      const res = await get('culture')
      console.log(res)
      setData(res.html)
    } catch (e) {

    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="home-group">
      <div className="text-center fs-4">
        <span className="home-block-title">企业文化</span>
      </div>

      <div 
        className="culture-wrap" 
        dangerouslySetInnerHTML={{ __html: data }}
      >
      </div>
    </div>
  )
}

export default Culture