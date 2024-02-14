import React from 'react';
import './GreenBtn.css'

const GreenBtn = ({btnName}) => {
  return (
    <div className="green-btn">
        <button >{btnName}</button>
    </div>
  )
}

export default GreenBtn