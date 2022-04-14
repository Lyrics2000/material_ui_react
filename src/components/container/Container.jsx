import React from 'react'
import './Container.css';
import ArbsHolder from '../arbsholder/ArbsHolder';

function Container() {
  return (
    <div className='container'>
        <div className="first">
            <ArbsHolder />
            <ArbsHolder />
            <ArbsHolder />
            <ArbsHolder />
            <ArbsHolder />
            <ArbsHolder />
            <ArbsHolder />
            <ArbsHolder />
            <ArbsHolder />
            <ArbsHolder />


        </div>
      
        <div className="second"></div>
        
    </div>
  )
}

export default Container