import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './index.css'

export interface NewsItem {
  id: number;
  title: string;
  subtitle: string,
  time: string,
  poster: string;
}

const NewsItems: React.FC<{ data: NewsItem[] }> = ({ data }) => {
  return (
    <>
      <div className="row g-2 g-sm-3 info-items"> 
        {
          data.map(({ id, title, subtitle, poster, time }) => {
            return (
              <Link to={`/news/${id}`} className="col-12 col-sm-6" key={id}>
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={poster} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-title">{moment(time).format('YYYY-MM-DD')}</h6>
                        <p className="card-text">{subtitle}</p>
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

export default NewsItems