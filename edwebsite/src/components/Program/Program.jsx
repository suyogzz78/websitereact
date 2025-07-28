import React from 'react'
import './Program.css'
import program1 from '../../assets/ed1.jpg'
import program2 from '../../assets/ed3.jpg'
import program3 from '../../assets/ed4.jpg'
import master from '../../assets/master.webp'
import bachelor from '../../assets/bachelor.png'
import post from '../../assets/post.webp'

const Program = () => {
  return (
    <div className="Programs" id='Program'>
        <div className='program'>
            <img src={program1} alt=""/>
            <div className='anime'>
               <img src={master} alt=""/>
               <p>CSIT</p>
            </div>
           
        </div>

         <div className='program'>
            <img src={program2} alt=""/>
              <div className='anime'>
               <img src={bachelor} alt=""/>
               <p>BCA</p>
            </div>
           
        </div>

         <div className='program'>
            <img src={program3} alt=""/>
             <div className='anime'>
               <img src={post} alt=""/>
               <p>BBM</p>
            </div>
           
            
        </div>

        

    </div>
  )
}

export default Program