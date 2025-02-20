import React from 'react'
import Herosection from './components/Herosection'
import About from './components/About'
import Heading from './components/Heading'
import Skills from './components/Skills'
import Project from './components/Project'

const App = () => {
  return (
    <div>
      <Heading/>
      <Herosection/>
      <About/>
      <Skills/>
      <Project/>
    </div>
  )
}

export default App
