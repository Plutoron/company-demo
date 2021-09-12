import React, { useState, useEffect } from 'react'
import NewsItems, { NewsItem } from '@src/components/news-items'

const News: React.FC<{ data: NewsItem[] }> = ({ data }) => {
  return (
    <div className="info">
      <div className="text-center fs-4">
        <span className="home-block-title">公司新闻</span>
      </div>

      <NewsItems 
        data={data}
      />
    </div>
  )
}

export default News