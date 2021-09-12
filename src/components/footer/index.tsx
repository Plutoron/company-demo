import React, { useCallback, useState, useEffect } from "react"
import { get } from '@util/http'
import './index.css'
 
const Footer: React.FC<{ active?: string }>  = () => {
  const [ data, setData ] = useState({})

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
    <footer className="custom-footer">
      <div className="block-wrap row justify-content-center">
        <div className="left col-12 col-sm-6">
          <h5>{data.name}</h5>

          <div className="border-none">
            <div className="row g-0">
              <div className="qrcode-wrap col-md-auto">
                <img src={data.qrcode} className="qrcode img-fluid rounded-start" />
              </div>
              <div className="col-md-auto d-flex flex-column justify-content-center">
                <p className="">全国联系方式</p>
                <p className="">{data.phone}</p>
                <p className="">欢迎各界人士前来资讯</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-3">
          <h5 className="">
            联系我们
          </h5>
          <div className="">
            <p className="">电话：{data.phone}</p>
            <p className="">传真：{data.fax}</p>
            <p className="">邮箱：{data.mail}</p>
            <p className="">地址：{data.address}</p>
          </div>
        </div>
      </div>

      <div className="text-center backup">
        <a className="text-decoration-none text-reset" href="https://beian.miit.gov.cn/">{data.fillinfo}</a>
      </div>
    </footer>
  )
}

export default Footer