import React, { useCallback, useState, useEffect } from 'react'
import { get } from '@util/http'

import HomeAbout from '@pages/home/about'
import Group from './group'
import Culture from './culture'

function About() {
  const [data, setData] = useState([]);

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

  return (
    <>
      <div className="block-wrap pb1">
        <HomeAbout data={data.intro} />
        <Group data={data.orgImg}  />
        <Culture />
      </div>
    </>
  )
}

export default About