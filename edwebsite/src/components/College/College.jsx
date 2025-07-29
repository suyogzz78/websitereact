import React, { useState } from 'react'
import './College.css'
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal3 from '../../assets/gal3.jpg'
import gal4 from '../../assets/gal4.jpg'
import gal5 from '../../assets/gal5.jpg'
import gal6 from '../../assets/gal6.jpg'

const College = () => {
  const[showall,setshowall]=useState('false');
  return (
    <div className='College' id='College'>
        <div className='gallery'>
            <img src={gal1} alt=''/>
              <img src={gal2} alt=''/>
                <img src={gal3} alt=''/>
                  <img src={gal4} alt=''/>
             
             {showall?(
              <>
               <img src={gal5} alt=''/>
              <img src={gal6} alt=''/>
              </>
             ):null
            }
        </div>
        <button className='btn darkbtn' onClick={()=> setshowall(!showall)}>
          {showall ? 'see less':'see more'}
        </button>
    </div>
  )
}

export default College