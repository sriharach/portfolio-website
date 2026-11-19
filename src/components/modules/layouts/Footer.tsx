// libs
import React from 'react'
import { useTranslations } from 'next-intl'
import styled from './layout.module.css'

const Footer = () => {
  const t = useTranslations('footer')

  return (
    <footer className={styled['layout__footer']}>
      <p>{t('copyright', { year: new Date().getFullYear() })}</p>
    </footer>
  )
}

export default Footer
