'use client'

// libs
import React from 'react'
import styled from './layout.module.css'
import clsx from 'clsx'

// hooks
import useLayoutHeader from '@/hooks/useLayoutHeader'

// components
import DesktopMode from './DesktopMode'
import MobileMode from './MobileMode'

const Header = () => {
  useLayoutHeader()

  return (
    <header
      id='layout-header'
      data-testid='test-header'
      className={clsx(styled['layout__header'])}
    >
      <a className='text-lg font-bold tracking-[0.08em] text-main-color-primavera4' href='#home'>
        SRIHARACH<span className='text-main-color-primavera1'>.</span>
      </a>
      <DesktopMode />
      <MobileMode />
    </header>
  )
}

export default Header
