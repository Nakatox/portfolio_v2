import React from 'react'
import cv from '/assets/cv.png'


const Resume = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={cv} alt='resume' width={500} />
    </div>
  )
}

export default Resume