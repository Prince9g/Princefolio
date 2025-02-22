import React from 'react'
import Herosection from './components/Herosection'
import About from './components/About'
import Heading from './components/Heading'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Heading/>
      <Herosection/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
