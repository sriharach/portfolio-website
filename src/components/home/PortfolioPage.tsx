'use client'

import AboutPage from './AboutPage'
import Contact from './Contact'
import Experiences from './Experiences'
import HomePage from './HomePage'
import Portfolio from './Portfolio'

export default function PortfolioPage() {
  return (
    <div className='flex-1 overflow-y-hidden'>
      <HomePage />
      <AboutPage />
      <Experiences />
      <Portfolio />
      <Contact />
    </div>
  )
}