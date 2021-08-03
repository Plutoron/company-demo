import React, { useState, useEffect } from 'react'
import './info.css'

interface InfoItem {
  id: number;
  title: string;
  subTitle: string,
  imgUrl: string;
}

const mock = [{
  id: 1,
  title: '资讯1111',
  subTitle: '资讯1111-小标题',
  imgUrl: 'https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF'
}, {
  id: 2,
  title: '资讯222',
  subTitle: '资讯222-小标题',
  imgUrl: 'https://t7.baidu.com/it/u=4080826490,615918710&fm=193&f=GIF'
}, {
  id: 3,
  title: '资讯333',
  subTitle: '资讯333-小标题',
  imgUrl: 'https://t7.baidu.com/it/u=4080826490,615918710&fm=193&f=GIF'
}]

function Info() {
  const [ infoList, setInfoList ] = useState<InfoItem[]>([])

  useEffect(() => {
    setInfoList(mock)
  }, [])

  return (
    <div className="info">
      <div className="text-center fs-4">
        <span className="home-block-title">企业资讯</span>
      </div>

      <div className="row g-2 g-sm-3"> 
        {
          infoList.map(({ id, title, subTitle, imgUrl }) => {
            return (
              <div className="col-12 col-sm-4" key={id}>
                <div className="card">
                  <img src={imgUrl} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subTitle}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Info