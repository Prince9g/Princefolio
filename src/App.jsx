import React from 'react'
import Herosection from './components/Herosection'
import About from './components/About'
import Heading from './components/Heading'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <div>
      <Heading/>
      <Herosection/>
      <About/>
      <Skills/>
      <Projects/>
      {/* <Project/> */}
    </div>
  )
}

export default App
