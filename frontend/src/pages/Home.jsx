import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../component/NavBar'
import HeroSection from '../component/HeroSection'
import Features from '../component/Features'
import WhySection from '../component/WhySection'
import Footer from '../component/Footer'

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-200 antialiased">
      {/* Ambient background glows */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-20%] h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-emerald-600/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-3xl" />

      {/* Header */}
      <NavBar/>

      {/* Hero */}
      <HeroSection/>
      {/* Features */}
      <Features/>

      {/* Why section */}
      <WhySection/>

      {/* Footer */}
     <Footer/>
    </div>
  )
}

export default Home
