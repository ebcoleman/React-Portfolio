// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
      <div>
        <Sidenav />
        <Main />
        <About />
        <Projects />
      </div>
  )
}

export default App
