import React from 'react'
import './carousel.css'

function Carousel() {
  return (
    <div id="carouselExampleControls" className="banner carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://t7.baidu.com/it/u=931123624,502354944&fm=193&f=GIF" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://t7.baidu.com/it/u=931123624,502354944&fm=193&f=GIF" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src="https://t7.baidu.com/it/u=931123624,502354944&fm=193&f=GIF" className="d-block w-100" />
        </div>
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