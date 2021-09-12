import React, { useState, useEffect, useCallback } from 'react'
import { get } from '@util/http'

enum SolutionType {
  build = '建设类',
  resourceManage = '资源管理类',
  resourceProtect = '资源保护类',
}

export interface SolutionItem {
  id: number;
  title: string;
  img: string;
}

const renderSolutionItem: React.FC<SolutionItem[]> = (data) => {

  useEffect(() => {
    const imgs = document.querySelectorAll('.solution-img')

    if (imgs.length > 0) {
      imgs.forEach(v => {
        v.style.height = v.clientWidth / 16 * 9 + 'px'
      })
    }
  }, [data])

  return (
    <div className="row g-2 g-sm-3"> 
      {
        data.map(({ id, title, img }) => {
          return (
            <div className="col-6 col-sm-4" key={id}>
              <div className="card">
                <img src={img} className="card-img-top solution-img" alt="" />
                <div className="card-body d-flex align-items-end">
                  <span className="card-text solution-name text-ellis">{title}</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

function Solution() {
  const [ builds, setBuilds ] = useState<SolutionItem[]>([])
  const [ manages, setManages ] = useState<SolutionItem[]>([])
  const [ protects, setProtects ] = useState<SolutionItem[]>([])

  const getBuildData = useCallback(async () => {
    try {
      const res = await get('solution/build')
      console.log(res)
      setBuilds(res)
    } catch (e) {

    }
  }, [])

  const getManageData = useCallback(async () => {
    try {
      const res = await get('solution/manage')
      console.log(res)
      setManages(res)
    } catch (e) {

    }
  }, [])

  const getProtectData = useCallback(async () => {
    try {
      const res = await get('solution/protect')
      console.log(res)
      setProtects(res)
    } catch (e) {

    }
  }, [])

  useEffect(() => {
    getBuildData()
    getManageData()
    getProtectData()
  }, [])

  return (
    <>
      <div className="solutions block-wrap pb1">
        <div className="text-center fs-4">
          <span className="home-block-title">建设类</span>
        </div>

        { renderSolutionItem(builds) }

        <div className="text-center fs-4">
          <span className="home-block-title">资源管理类</span>
        </div>

        { renderSolutionItem(manages) }

        <div className="text-center fs-4">
          <span className="home-block-title">资源保护类</span>
        </div>

        { renderSolutionItem(protects) }
      </div>
    </>
  )
}

export default Solution