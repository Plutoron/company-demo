import React, { useEffect, useState } from 'react'
import './job.css'

function Job({ data }) {
  useEffect(() => {

  }, [])

  return (
    <>
      <div className="block-wrap">
        <div className="hire-detail" dangerouslySetInnerHTML={{ __html: data }}>
    
        </div>
      </div>
    </>
  )
}

export default Job