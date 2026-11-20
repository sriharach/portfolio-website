import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

// components
import SwitchLocale from '../switchLocale/SwitchLocale'
import styled from './layout.module.css'

const DesktopMode = () => {
  const t = useTranslations('nav')

  return (
    <section className='hidden items-center justify-between space-x-10 lg:flex'>
      <ul className='flex items-center space-x-7'>
        <li className={styled['layout__text-hover-underline']}>
          <Link href='/#home'>{t('home')}</Link>
        </li>
        <li className={styled['layout__text-hover-underline']}>
          <Link href='/#about'>{t('about')}</Link>
        </li>
        <li className={styled['layout__text-hover-underline']}>
          <Link href='/#experiences'>{t('experience')}</Link>
        </li>
        <li className={styled['layout__text-hover-underline']}>
          <Link href='/#portfolio'>{t('portfolio')}</Link>
        </li>
        <li className={styled['layout__text-hover-underline']}>
          <Link href='/#contact'>{t('contact')}</Link>
        </li>
        <li className={styled['layout__text-hover-underline']}>
          <Link href='/blog'>{t('blog')}</Link>
        </li>
      </ul>
      <SwitchLocale />
    </section>
  )
}

export default DesktopMode
