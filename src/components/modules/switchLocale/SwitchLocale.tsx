import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const SwitchLocale = () => {
  const locale = useLocale()
  return (
    <div
      data-testid='test-switch-locale'
      className='dropdown dropdown-end flex'
    >
      <div tabIndex={0} role='button' className='cursor-pointer text-sm font-bold transition-all hover:text-main-color-primavera1'>
        {locale.toUpperCase()}
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content menu bg-main-color-primavera2 rounded-box z-1 w-auto p-2 shadow'
      >
        <li>
          <Link href='/'>
            EN
          </Link>
        </li>
        <li>
          <Link href='/th/'>
            TH
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SwitchLocale
