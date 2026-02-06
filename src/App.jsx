import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Technologies from './components/Technologies'
import Payment from './components/Payment'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Payment />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
