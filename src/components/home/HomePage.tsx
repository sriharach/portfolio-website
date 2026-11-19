// libs
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiArrowDownRight } from 'react-icons/fi'

// styles
import styled from './home.module.css'

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
            <a className='btn btn-primary gap-3 text-white' href='#portfolio'>
              {t('viewWork')}
              <FiArrowDownRight aria-hidden='true' className='size-4' />
            </a>
            <a className='btn btn-ghost text-main-color-primavera4' href='#contact'>
              {t('contactMe')}
            </a>
          </div>
          <div className={styled['hero-socials']}>
            <span className={styled['hero-social-label']}>{t('socialLabel')}</span>
            <button
              aria-label='LinkedIn'
              className='icon-up'
              onClick={() => onClickRedirect(process.env.URL_LINKEDIN as string)}
              type='button'
            >
              <FaLinkedin aria-hidden='true' className='size-5' />
            </button>
            <button
              aria-label='GitHub'
              className='icon-up'
              onClick={() => onClickRedirect(process.env.URL_GITHUB as string)}
              type='button'
            >
              <FaGithub aria-hidden='true' className='size-5' />
            </button>
          </div>
        </div>
        <div className={styled['hero-visual']}>
          <span className={styled['hero-stamp']}>{t('portraitNote')}</span>
          <figure className={styled['hero-frame']}>
            <Image
              alt={t('portraitAlt')}
              className={styled['hero-image']}
              draggable={false}
              height={940}
              priority
              src='/portfolio/img/main-profile.webp'
              width={720}
            />
          </figure>
          <div className={styled['hero-caption']}>
            <span className={styled['hero-caption-number']}>01</span>
            <span className={styled['hero-caption-copy']}>{t('portraitCaption')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
