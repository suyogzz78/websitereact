import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Suyog from './components/Suyog/Suyog';
import Program from './components/Program/Program';
import Title from './components/Title/TItle';
import About from './components/about/about';
import College from './components/College/College'; 
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Suyog/>
      <div className='container'>
        <Title subtitle='Our Courses' title='What we offer'/>
      <Program/>
      <About/>
        <Title subtitle='College Photos' title='Gallery'/>
        <College/>
          <Title subtitle='Contact us' title='Link together'/>
          <Contact/>
      </div>
    </div>
  )
}

export default App