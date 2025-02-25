import React, { useEffect } from 'react'
import Herosection from './components/Herosection'
import About from './components/About'
import Heading from './components/Heading'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {motion, useScroll} from 'motion/react';
const App = () => {
  const {scrollYProgress} = useScroll();
  return (
    <div className="relative">
      <Heading/>
      <Herosection/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <motion.div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full z-50"
      style={{
        scaleX:scrollYProgress
      }}
      >
      </motion.div>
    </div>
  )
}

export default App
