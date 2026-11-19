// libs
import React from 'react'
import { useTranslations } from 'next-intl'

// components
import GardDaisyUi from '../daisyUI/gardDaisyUi/GardDaisyUi'
import styled from './home.module.css'

// shared
import TextTopic from '../shared/textTopic/textTopic'
import FadeUpOnScroll from '../shared/fadeUponScroll/fadeUponScroll'

// hooks
import usePortfolio from '@/hooks/usePortfolio'

const Portfolio = () => {
  const t = useTranslations('portfolio')
  const { onClickRedirect } = usePortfolio()

  return (
    <section id='portfolio' className={styled['profile']}>
      <FadeUpOnScroll className={styled['profile-box-col']}>
        <div className='text-center'>
          <p className='mb-4 text-xs font-bold uppercase tracking-[0.12em] text-main-color-primavera3'>{t('eyebrow')}</p>
          <TextTopic lineCenter text={t('title')} className='text-3xl sm:text-4xl' />
        </div>
        <p className={styled['portfolio-intro']}>{t('description')}</p>
        <div className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          <GardDaisyUi
            image='/portfolio/projects/wisdom-construction.webp'
            title={t('projects.wisdom.title')}
            feature={t('projects.wisdom.feature')}
            viewText={t('view')}
            onClick={() => onClickRedirect(process.env.WISDOM_DOMAIN as string)}
          />
          <GardDaisyUi
            image='/portfolio/projects/wisdom-construction-management.webp'
            title={t('projects.management.title')}
            feature={t('projects.management.feature')}
            viewText={t('view')}
            onClick={() =>
              onClickRedirect(process.env.WISDOM_MANAGEMENT_DOMAIN as string)
            }
          />
          <GardDaisyUi
            image='/portfolio/projects/open-api-management.webp'
            title={t('projects.api.title')}
            feature={t('projects.api.feature')}
            viewText={t('view')}
            onClick={() =>
              onClickRedirect(process.env.OPEN_API_DOMAIN as string)
            }
          />
          <GardDaisyUi
            image='/portfolio/projects/image-converter.webp'
            title={t('projects.converter.title')}
            feature={t('projects.converter.feature')}
            viewText={t('view')}
            onClick={() =>
              onClickRedirect(process.env.IMAGE_CONVERTER_DOMAIN as string)
            }
          />
        </div>
      </FadeUpOnScroll>
    </section>
  )
}

export default Portfolio
