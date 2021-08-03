import React from "react"
import './index.css'
 
const Footer: React.FC<{ active?: string }>  = ({ active }) => {
  return (
    <footer className="custom-footer">
      <div className="block-wrap row justify-content-center">
        <div className="left col-12 col-sm-6">
          <h5>上海成事林业规划设计有限公司</h5>

          <div className="border-none">
            <div className="row g-0">
              <div className="qrcode-wrap col-md-auto">
                <img src="http://nwzimg.wezhan.cn/contents/sitefiles2038/10192359/images/15320504.jpg" className="qrcode img-fluid rounded-start" />
              </div>
              <div className="col-md-auto d-flex flex-column justify-content-center">
                <p className="">全国联系方式</p>
                <p className="">021-56530396</p>
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
            <p className="">电话：021-56530396</p>
            <p className="">传真：021-56530396-102</p>
            <p className="">邮箱：chengshi_forestry@163.com</p>
            <p className="">地址：上海市静安区沪太路1011号</p>
          </div>
        </div>
      </div>

      <div className="text-center backup">
        <a className="text-decoration-none text-reset" href="https://beian.miit.gov.cn/">沪ICP备xxxxxx-1</a>
      </div>
    </footer>
  )
}

export default Footer