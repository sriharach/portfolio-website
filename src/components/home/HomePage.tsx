// libs
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiArrowDownRight } from 'react-icons/fi'

// components
import ButtonDaisyUi from '@/components/daisyUI/buttonDaisyUi/ButtonDaisyUi'

// styles
import styled from './hero.module.css'

// hooks
import useHome from '@/hooks/useHome'

const HomePage = () => {
  // translations
  const t = useTranslations('home')

  // hooks
  const { onClickRedirect } = useHome()

  return (
    <section id='home' aria-label='home-page' className={styled.home}>
      <div className={styled['home-started']}>
        <div className={styled['hero-copy']}>
          <p className={styled['hero-kicker']}>{t('eyebrow')}</p>
          <h1 className={styled['hero-title']}>
            {t('greeting')} <span>{t('firstName')}</span>
            <br />
            {t('lastName')}
          </h1>
          <p className={styled['hero-description']}>{t('introduce')}</p>
          <div className={styled['hero-actions']}>
            <a
              className='btn btn-primary rounded-full gap-3'
              href='#portfolio'
            >
              {t('viewWork')}
              <FiArrowDownRight aria-hidden='true' className='size-4' />
            </a>
            <a
              className='btn btn-outline btn-primary rounded-full'
              href='#contact'
            >
              {t('contactMe')}
            </a>
          </div>
          <div className={styled['hero-socials']}>
            <span className={styled['hero-social-label']}>
              {t('socialLabel')}
            </span>
            <ButtonDaisyUi
              aria-label='LinkedIn'
              iconOnly
              circle
              icon={<FaLinkedin aria-hidden='true' className='size-5' />}
              variant='soft'
              onClick={() =>
                onClickRedirect(process.env.URL_LINKEDIN as string)
              }
            />
            <ButtonDaisyUi
              aria-label='GitHub'
              iconOnly
              circle
              icon={<FaGithub aria-hidden='true' className='size-5' />}
              variant='soft'
              onClick={() => onClickRedirect(process.env.URL_GITHUB as string)}
            />
          </div>
        </div>
        <div className='relative flex items-center justify-center w-[380px] h-[380px]'>
          <div className='absolute w-[345px] h-[345px] rounded-full border-2 border-dashed border-main-color-primavera4 animate-[spin_30s_linear_infinite_reverse]' />
          <div className='absolute w-[300px] h-[300px] rounded-full border-2 border-dashed border-main-color-primavera4/30 animate-[spin_25s_linear_infinite]' />
          <div className='relative z-10 w-[250px] h-[250px] rounded-full overflow-hidden shadow-lg bg-slate-800'>
            <Image
              alt={t('portraitAlt')}
              className={styled['hero-image']}
              draggable={false}
              height={940}
              priority
              src='/portfolio/img/main-profile.webp'
              width={720}
            />
          </div>
          <span className='absolute top-2 right-16 z-20 badge badge-lg h-10 px-5 rounded-full bg-[#9ebccb] text-white border-none font-medium shadow-sm'>
            Advisor
          </span>
          <span className='absolute bottom-2 left-10 z-20 badge badge-lg h-10 px-5 rounded-full bg-[#e3f554] text-slate-900 border-none font-medium shadow-sm'>
            Rise
          </span>
        </div>
      </div>
    </section>
  )
}

export default HomePage
