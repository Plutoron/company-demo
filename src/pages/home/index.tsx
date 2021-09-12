import React, { useCallback, useState, useEffect } from 'react'
import { get } from '@util/http'
import Carousel from './carousel'
import About from './about'
import Solution from './solution'
import News from './news'
import './home.css'

function Home() {
  const [news, setNews] = useState([]);
  const [solution, setSolution] = useState([]);
  const [company, setCompany] = useState({});

  const getConpamnyData = useCallback(async () => {
    try {
      const res = await get('company/detail')
      console.log(res)
      setCompany(res)
    } catch (e) {

    }
  }, [])

  const getNewsData = useCallback(async () => {
    try {
      const res = await get('news/home')
      console.log(res)
      setNews(res)
    } catch (e) {

    }
  }, [])

  const getSolutionData = useCallback(async () => {
    try {
      const res = await get('solution/home')
      console.log(res)
      setSolution(res)
    } catch (e) {

    }
  }, [])

  useEffect(() => {
    getConpamnyData()
    getNewsData()
    getSolutionData()
  }, [])

  return (
    <>
      <Carousel />
      <div className="block-wrap pb1">
        <About data={company.intro} />
        <Solution data={solution} />
        <News data={news} />
      </div>
    </>
  )
}

export default Home