import React from 'react'
import icon from './error-icon.png';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={icon} alt="error icon"/>
      <div>
        <span>Something wrong!</span>
        <span>We send droid to fix it!</span>
      </div>
    </div>
  )
}

export default ErrorIndicator;