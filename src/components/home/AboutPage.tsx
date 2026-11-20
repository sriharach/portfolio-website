// libs
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// components
import styled from './about.module.css'
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
      <div className={styled['about-stack']}>
        <Image
          src='/portfolio/img/main-profile.webp'
          alt={t('portraitAlt')}
          width={isMobileResponsive ? 300 : 440}
          height={isMobileResponsive ? 300 : 440}
          className={styled['home-profile']}
        />
        <div className={styled['about']}>
          <p className={styled['about-kicker']}>{t('eyebrow')}</p>
          <TextTopic text={t('title')} className={styled['about-title']} />
          <div className={styled['about-role']}>
            <span>{t('role')}</span>
            <span>{t('basedIn')}</span>
            <span>{t('country')}</span>
          </div>
          <p className={styled['about-description']}>{t('description')}</p>
          <div className={styled['about-facts']}>
            <div className={styled['about-fact']}>
              <span className={styled['about-list-contract']}>{t('emailLabel')}</span>
              <span className='break-all text-sm sm:text-base text-main-content-color-primavera4'>folksriahrach@gmail.com</span>
            </div>
            <div className={styled['about-fact']}>
              <span className={styled['about-list-contract']}>{t('phoneLabel')}</span>
              <span className='text-sm sm:text-base text-main-content-color-primavera4'>096-301-1722</span>
            </div>
            <div className={styled['about-fact']}>
              <span className={styled['about-list-contract']}>{t('addressLabel')}</span>
              <span className='text-sm sm:text-base text-main-content-color-primavera4'>Klong sam wa Bangkok</span>
            </div>
            <div className={styled['about-fact']}>
              <span className={styled['about-list-contract']}>{t('linkedinLabel')}</span>
              <span className='text-sm sm:text-base text-main-content-color-primavera4'>Sriharach Promruksa</span>
            </div>
          </div>
          <ButtonDaisyUi
            variant='outline'
            color='secondary'
            onClick={onClickDownloadCV}
            text={t('downloadCv')}
          />
        </div>
      </div>
    </SectionBox>
  )
}

export default AboutPage
