import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume'

function App() {

  return (
      <div>
        <Sidenav />
        <Main />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
