import { useTranslations } from 'next-intl'

// components
import SwitchLocale from '../switchLocale/SwitchLocale'
import styled from './layout.module.css'

const DesktopMode = () => {
  const t = useTranslations('nav')

  return (
    <section className='hidden justify-between items-center space-x-12 lg:flex'>
      <ul className='flex space-x-8 items-center'>
        <li role='button' className={styled['layout__text-hover-underline']}>
          <a href='#home'>{t('home')}</a>
        </li>
        <li role='button' className={styled['layout__text-hover-underline']}>
          <a href='#about'>{t('about')}</a>
        </li>
        <li role='button' className={styled['layout__text-hover-underline']}>
          <a href='#experiences'>{t('experience')}</a>
        </li>
        <li role='button' className={styled['layout__text-hover-underline']}>
          <a href='#portfolio'>{t('portfolio')}</a>
        </li>
        <li role='button' className={styled['layout__text-hover-underline']}>
          <a href='#contact'>{t('contact')}</a>
        </li>
      </ul>
      <SwitchLocale />
    </section>
  )
}

export default DesktopMode
