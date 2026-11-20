import React from 'react'
import { useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'

const SwitchLocale = () => {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <div
      data-testid='test-switch-locale'
      className='dropdown dropdown-end flex'
    >
      <div tabIndex={0} role='button' className='cursor-pointer text-sm font-bold transition-all'>
        {locale.toUpperCase()}
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content menu bg-main-color-primavera1 rounded-box z-1 w-auto p-2 shadow'
      >
        <li>
          <Link href={pathname} locale='en'>
            EN
          </Link>
        </li>
        <li>
          <Link href={pathname} locale='th'>
            TH
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SwitchLocale
