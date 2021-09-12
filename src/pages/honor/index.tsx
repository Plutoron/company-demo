import React, { useEffect, useState, useCallback } from 'react'
import { get } from '@util/http'

import Honor from './honor'

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const res = await get('honor')
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
      <div className="block-wrap">
        <Honor data={data} />
      </div>
    </>
  )
}

export default Index