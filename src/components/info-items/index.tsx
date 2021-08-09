import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export interface InfoItem {
  id: number;
  title: string;
  subTitle: string,
  imgUrl: string;
}

const InfoItems: React.FC<{ infoList: InfoItem[] }> = ({ infoList }) => {
  return (
    <>
      <div className="row g-2 g-sm-3 info-items"> 
        {
          infoList.map(({ id, title, subTitle, imgUrl }) => {
            return (
              <Link to={`/info/${id}`} className="col-12 col-sm-6" key={id}>
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={imgUrl} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{subTitle}</p>
                      </div>
                    </div>
                  </div >
                </div>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}

export default InfoItems