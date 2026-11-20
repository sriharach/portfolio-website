'use client'

// libs
import React from 'react'
import styled from './layout.module.css'
import clsx from 'clsx'

// hooks
import useLayoutHeader from '@/hooks/useLayoutHeader'
import { Link } from '@/i18n/routing'

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
      <Link className='text-base font-bold tracking-[0.12em] text-main-content-color-primavera1' href='/#home'>
        SRIHARACH
      </Link>
      <DesktopMode />
      <MobileMode />
    </header>
  )
}

export default Header
