'use client'

import AboutPage from './AboutPage'
import Contact from './Contact'
import Experiences from './Experiences'
import HomePage from './HomePage'
import Portfolio from './Portfolio'
import Skills from './Skills'
import styled from './home.module.css'

export default function PortfolioPage() {
  return (
    <div className={`${styled['home-page']} flex-1`}>
      <HomePage />
      <Skills />
      <AboutPage />
      <Portfolio />
      <Experiences />
      <Contact />
    </div>
  )
}