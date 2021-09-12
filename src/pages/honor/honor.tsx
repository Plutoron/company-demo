import React, { useEffect, useState } from 'react'
import './honor.css'

interface honorItem {
  title: string,
  img: string
}

const Honor = ({ data }) => {
  const [ honorList, setHonorList ] = useState<honorItem[]>([])

  useEffect(() => {
    setHonorList(data)
  }, [data])

  useEffect(() => {
    const imgs = document.querySelectorAll('.honor-img')

    if (imgs.length > 0) {
      imgs.forEach(v => {
        v.style.height = v.clientWidth / 16 * 9 + 'px'
      })
    }
  }, [honorList])

  return (
    <>
      <div className="pt1 pb1 honor-block">
        <div className="row g-2 g-sm-3">
          {
            honorList.map(({ img, title }) => {
              return (
                <div className="col-6 col-sm-3 text-center" key={title}>
                  <div className="card">
                    <img src={img} className="card-img-top honor-img" />
                    <div className="card-body">
                      <p className="card-text">{title}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Honor