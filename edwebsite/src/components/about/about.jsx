import React from 'react'
import ed2 from '../../assets/ed2.jpg'
import play from '../../assets/play.avif'
import './about.css'
const about = () => {
  return (
   <div className='about' id='About'>
    <div className='about-left'>
        <img src={ed2} alt='' className='about-img'/>
        <img src={play} alt='' className='about-play'/>
    </div>
    <div className='about-right'>
        <h1>ABOUT UNIVERSITY</h1>
            <p>Welcome to Suyog University, where innovation meets education in the heart of Nepal. We are a forward-thinking academic institution dedicated to cultivating leaders, thinkers, and creators across the domains of business, computing, and technology.
                </p>
               <p>Suyog University is a dynamic academic institution located in Nepal, dedicated to shaping the next generation of innovators, leaders, and tech-savvy professionals. With specialized programs in BBM, BCA, and CSIT, we offer a rich blend of theoretical foundation and practical application—empowering students to thrive in today’s fast-evolving business and technology landscapes. Our mission is to foster an environment where ambition meets opportunity, supported by experienced mentors, modern learning tools, and strong ties to industry. At Suyog, education goes beyond the classroom—it’s a launchpad for future breakthroughs.
                </p>
            </div>
        </div>
  )
}

export default about