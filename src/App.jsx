import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Intro from './Pages/Intro'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Certificate from './Pages/Certificate'
import Projects from './Pages/Project'
import Contact from './Pages/Conatct'
import Footer from './Pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
