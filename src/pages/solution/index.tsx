import React, { useState, useEffect } from 'react'

enum SolutionType {
  build = '建设类',
  resourceManage = '资源管理类',
  resourceProtect = '资源保护类',
}

export interface SolutionItem {
  id: number;
  name: string;
  imgUrl: string;
}

const mock1 = [{
  type: 'build',
  id: 0,
  name: '公益林设计',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'build',
  id: 1,
  name: '林火阻隔体系建设设计',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'build',
  id: 2,
  name: '疏林地改造项目设计',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'build',
  id: 3,
  name: '极小种群物种恢复与野放项目设计',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'build',
  id: 4,
  name: '生态廊道设计',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'build',
  id: 5,
  name: '规划设计',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}]

const mock2 = [{
  type: 'resourceManage',
  id: 10,
  name: '森林资源动态监测项目',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'resourceManage',
  id: 11,
  name: '存量森林资源小班因子更新调查项目',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'resourceManage',
  id: 12,
  name: '森林蓄积量监测',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'resourceManage',
  id: 13,
  name: '航空遥感航片判读、解释',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'resourceManage',
  id: 14,
  name: '公益林区划界定办法编制、实施细则编制',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'resourceManage',
  id: 15,
  name: '林地抚育项目设计',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}]

const mock3 = [{
  type: 'resourceProtect',
  id: 25,
  name: '使用公益林林地可行性报告',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}, {
  type: 'resourceProtect',
  id: 26,
  name: '涉嫌毁坏、盗窃、擅自迁移等公益林林木资产评估报告',
  imgUrl: 'https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF'
}]

const renderSolutionItem: React.FC<SolutionItem[]> = (data) => {
  return (
    <div className="row g-2 g-sm-3"> 
      {
        data.map(({ id, name, imgUrl }) => {
          return (
            <div className="col-6 col-sm-4" key={id}>
              <div className="card">
                <img src={imgUrl} className="card-img-top" alt="" />
                <div className="card-body d-flex align-items-end">
                  <span className="card-text solution-name text-ellis">{name}</span>
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

  useEffect(() => {
    setBuilds(mock1)
    setManages(mock2)
    setProtects(mock3)
  }, [])

  return (
    <>
      <div className="solutions block-wrap">
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