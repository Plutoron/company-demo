import React, { useCallback, useState, useEffect } from 'react'
import { get } from '@util/http'
import './carousel.css'

function Carousel() {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const res = await get(`banner`)
      console.log(res)
      setData(res)
    } catch (e) {

    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <div id="carouselExampleControls" className="banner carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {
          data.map((v, i) => {
            return (
              <div className={i === 0 ? "carousel-item active" : "carousel-item"}>
                <img src={v.img} className="d-block w-100" />
              </div>
            )
          })
        } 
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel