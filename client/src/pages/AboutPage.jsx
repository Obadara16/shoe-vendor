import React from 'react'
import { About, Contact, Footer, HeroNav, Nav } from '../containers'

export default function AboutPage() {
    const title = "About Us"
  return (
    <section className="w-full h-full relative">
      <Nav/>
      <About/>
      <Contact/>
      <Footer/>
    </section>
  )
}
