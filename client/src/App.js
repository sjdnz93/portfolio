import { useEffect } from 'react'
import axios from 'axios'

import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hero from './components/Hero'



const App = () => {

  return (
    <div className='site-wrapper'>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
