import React from 'react'
import './Title.css'
const Title = ({subtitle,title}) => {
  return (
    <div className='title'>
        <h1>{subtitle}</h1>
        <p>{title}</p>
    </div>
  )
}

export default Title