import React, { useEffect } from 'react'
import Herosection from './components/Herosection'
import About from './components/About'
import Heading from './components/Heading'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {motion, useScroll} from 'motion/react';
import back from "./assets/back.gif";
// import backg from "./assets/backg.gif";
const App = () => {
  const {scrollYProgress} = useScroll();
  return (
    <div className="relative dark:bg-slate-900">
      <motion.img className="hidden md:block absolute top-40 right-1/4 h-[500px] z-[-1] opacity-50" src={back} alt="background"/>
      {/* <motion.img className="md:hidden fixed top-0 left-1/4  h-[500px] z-[-1]" src={backg} alt="background"/> */}
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
