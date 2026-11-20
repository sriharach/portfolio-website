import React from 'react'
import styled from './layout.module.css'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <main className={styled['layout']}>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
