// libs
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// components
import styled from './home.module.css'
import ButtonDaisyUi from '../daisyUI/buttonDaisyUi/ButtonDaisyUi'
import TextTopic from '../shared/textTopic/textTopic'

// shared
import SectionBox from '../shared/sectionBox/sectionBox'

// hooks
import useAbout from '@/hooks/useAbout'

const AboutPage = () => {
  const t = useTranslations('about')
  // hooks
  const { isMobileResponsive, onClickDownloadCV } = useAbout()

  return (
    <SectionBox id='about'>
      <Image
        src='/portfolio/img/main-profile.webp'
        alt={t('portraitAlt')}
        width={isMobileResponsive ? 260 : 360}
        height={isMobileResponsive ? 260 : 360}
        className={styled['home-profile']}
      />
      <div className={styled['about']}>
        <p className={styled['section-kicker']}>{t('eyebrow')}</p>
        <TextTopic text={t('title')} className='text-3xl font-bold leading-tight md:text-5xl' />
        <div className='flex flex-wrap gap-x-2 text-base sm:text-lg'>
          <span className='font-bold text-main-color-primavera3'>{t('role')}</span>
          <span>{t('basedIn')}</span>
          <span className='font-bold text-main-color-primavera1'>{t('country')}</span>
        </div>
        <p className='max-w-2xl text-sm leading-7 text-main-color-primavera4/70 sm:text-base'>
          {t('description')}
        </p>
        <div className={styled['about-facts']}>
          <div className={styled['about-fact']}>
            <span className={styled['about-list-contract']}>{t('emailLabel')}</span>
            <span className='break-all text-sm sm:text-base'>folksriahrach@gmail.com</span>
          </div>
          <div className={styled['about-fact']}>
            <span className={styled['about-list-contract']}>{t('phoneLabel')}</span>
            <span className='text-sm sm:text-base'>096-301-1722</span>
          </div>
          <div className={styled['about-fact']}>
            <span className={styled['about-list-contract']}>{t('addressLabel')}</span>
            <span className='text-sm sm:text-base'>Klong sam wa Bangkok</span>
          </div>
          <div className={styled['about-fact']}>
            <span className={styled['about-list-contract']}>{t('linkedinLabel')}</span>
            <span className='text-sm sm:text-base'>Sriharach Promruksa</span>
          </div>
        </div>
        <ButtonDaisyUi
          onClick={onClickDownloadCV}
          className='mt-2 text-sm text-white sm:text-base'
          text={t('downloadCv')}
        />
      </div>
    </SectionBox>
  )
}

export default AboutPage
