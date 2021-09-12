import React, { useState, useCallback, useEffect } from 'react'
import { get } from '@util/http'
import Job from './job'

const Hire = () => {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const res = await get('hire')
      console.log(res)
      setData(res.html)
    } catch (e) {

    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="block-wrap pb1 pt1">
        <Job data={data} />
      </div>
    </>
  )
}

export default Hire