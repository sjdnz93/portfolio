import { useEffect } from 'react'
import axios from 'axios'

import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hero from './components/Hero'

import svg2 from './images/SVG/2-svg.svg'
import svg6 from './images/SVG/6-svg.svg'
import svg8 from './images/SVG/8-svg.svg'
import wave from './images/SVG/wave-svg.svg'
import wave4 from './images/SVG/wave-4-svg-svg.svg'
import wave2 from './images/SVG/wave-2-svg.svg'
import wave3 from './images/SVG/wave-3-svg.svg'

const App = () => {

  return (
    <div className='site-wrapper'>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />

        <img src={wave3} alt='wave-effect' className='wave'></img>
        <About />

        <img src={svg2} alt='drip-effect' className='drip'></img>
        <img src={wave} alt='wave-effect' className='wave'></img>
        <Skills />

        <img src={svg6} alt='drip-effect' className='drip'></img>
        <img src={wave4} alt='wave-effect' className='wave'></img>
        <Projects />

        <img src={svg8} alt='drip-effect' className='drip'></img>

        {/* <Experience /> */}
        <img src={wave2} alt='wave-effect' className='wave'></img>
        <footer id='footer'>
          <Contact />
        </footer>
      </main>
    </div>
  )
}

export default App
