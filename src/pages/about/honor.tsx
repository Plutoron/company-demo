import React, { useEffect, useState } from 'react'

interface honorItem {
  desc: string,
  imgUrl: string
}

const mock = [{
  desc: '高新技术企业证书1',
  imgUrl: 'http://nwzimg.wezhan.cn/contents/sitefiles2038/10192359/images/15330427.jpg'
}, {
  desc: '高新技术企业证书2',
  imgUrl: 'http://nwzimg.wezhan.cn/contents/sitefiles2038/10192359/images/15330427.jpg'
}, {
  desc: '高新技术企业证书3',
  imgUrl: 'http://nwzimg.wezhan.cn/contents/sitefiles2038/10192359/images/15330427.jpg'
}, {
  desc: '高新技术企业证书4',
  imgUrl: 'http://nwzimg.wezhan.cn/contents/sitefiles2038/10192359/images/15330427.jpg'
}, {
  desc: '高新技术企业证书5',
  imgUrl: 'http://nwzimg.wezhan.cn/contents/sitefiles2038/10192359/images/15330427.jpg'
},]

function Honor() {
  const [ honorList, setHonorList ] = useState<honorItem[]>([])

  useEffect(() => {
    setHonorList(mock)
  }, [])

  return (
    <>
      <div className="block-wrap">
        <div className="text-center fs-4">
          <span className="home-block-title">荣誉资质</span>
        </div>

        <div className="row g-2 g-sm-3">
          {
            honorList.map(({ imgUrl, desc }) => {
              return (
                <div className="col-6 col-sm-3 text-center" key={desc}>
                  <div className="card">
                    <img src={imgUrl} className="card-img-top" />
                    <div className="card-body">
                      <p className="card-text">{desc}</p>
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