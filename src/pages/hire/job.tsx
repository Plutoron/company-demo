import React, { useEffect, useState } from 'react'
import './job.css'

function Job() {
  const [ detail, setDetail ] = useState<string>()

  useEffect(() => {

  }, [])

  return (
    <>
      <div className="block-wrap">
        <div className="hire-detail">
          <span className="">这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本这个是富文本</span>
        </div>
      </div>
    </>
  )
}

export default Job