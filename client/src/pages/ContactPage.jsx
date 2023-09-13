import React from 'react'
import { Contact, Footer, HeroNav, Nav } from '../containers'

export default function ContactPage() {
    const title = "Contact Us"
  return (
    <section className="w-full h-full relative">
      <Nav navColor="bg-white"/>
      <Contact />
      <Footer footerColor={true}/>
    </section>
  )
}
