// libs
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

// components
import SwitchLocale from '../switchLocale/SwitchLocale'

const MobileMode = () => {
  const t = useTranslations('nav')

  return (
    <section className='drawer drawer-end lg:hidden'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <label htmlFor='my-drawer' className='flex justify-end'>
        <FiMenu className='size-6 cursor-pointer' />
      </label>
      <aside className='drawer-side'>
        <label
          htmlFor='my-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
        />
        <div className='menu min-h-full w-[18rem] border-l border-main-color-primavera1/10 bg-main-color-primavera1 text-base-content'>
          <ul className='flex flex-col gap-1 pt-16'>
            <li>
              <Link href='/#home'>{t('home')}</Link>
            </li>
            <li>
              <Link href='/#about'>{t('about')}</Link>
            </li>
            <li>
              <Link href='/#experiences'>{t('experience')}</Link>
            </li>
            <li>
              <Link href='/#portfolio'>{t('portfolio')}</Link>
            </li>
            <li>
              <Link href='/#contact'>{t('contact')}</Link>
            </li>
            <li>
              <Link href='/blog'>{t('blog')}</Link>
            </li>
          </ul>
          <div className='border-t border-main-color-primavera3 px-4 pt-4'>
            <SwitchLocale />
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MobileMode
