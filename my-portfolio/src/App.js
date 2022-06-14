import React from 'react'
import './App.css'
import About from './layouts/About'

import Header from './layouts/Header'
import Projects from './layouts/Projects'
import Skills from './layouts/Skills'
import Contact from './layouts/Contact'
const App = () => {
  return (
    <>
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  )
}

export default App
