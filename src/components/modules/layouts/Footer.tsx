// libs
import React from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import styled from './layout.module.css'

const Footer = () => {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')

  return (
    <footer className={styled['layout__footer']}>
      <div className='flex w-full flex-col-reverse md:flex-row gap-8 md:items-end md:justify-between'>
        <div>
          <Link className='text-xl font-bold text-main-content-color-primavera4' href='/#home'>
            SRIHARACH
          </Link>
          <p className='mt-3 text-xs'>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
        <nav aria-label='Footer navigation' className='flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase text-main-content-color-primavera4'>
          <Link href='/#about'>{nav('about')}</Link>
          <Link href='/#portfolio'>{nav('portfolio')}</Link>
          <Link href='/#experiences'>{nav('experience')}</Link>
          <Link href='/#contact'>{nav('contact')}</Link>
          <Link href='/blog'>{nav('blog')}</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
