import { Sign } from 'crypto'
import React from 'react'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import Icon from './component/Icon'
import Technology from './component/Technology'
import Experience from './component/Experience'
import Achievements from './component/Achievements'
import Innovation from './component/Innovation'
import Collaboration from './component/Collaboration'
import Testimonials from './component/Testimonials'
import Latest from './component/Latest'
import SignupLast from './component/SignupLast'
import Footer from './component/Footer'

const page = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <Icon />
    <Technology />
    <Experience />
    <Achievements />
    <Innovation />
    <Collaboration />
    <Testimonials />
    <Latest />
    <SignupLast />
    <Footer />
    </>
  )
}

export default page