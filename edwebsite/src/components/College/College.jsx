import React from 'react'
import './College.css'
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal3 from '../../assets/gal3.jpg'
import gal4 from '../../assets/gal4.jpg'

const College = () => {
  return (
    <div className='College' id='College'>
        <div className='gallery'>
            <img src={gal1} alt=''/>
              <img src={gal2} alt=''/>
                <img src={gal3} alt=''/>
                  <img src={gal4} alt=''/>
             
        </div>
        <button className='btn darkbtn'>See More here</button>
    </div>
  )
}

export default College