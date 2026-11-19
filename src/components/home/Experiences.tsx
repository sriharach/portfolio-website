import Image from 'next/image'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import styled from './home.module.css'
import FadeUpOnScroll from '../shared/fadeUponScroll/fadeUponScroll'

const Experiences = () => {
  const t = useTranslations('experience')
  const roles = [
    { key: 'ttb', logo: '/portfolio/logo-company/ttp-spark.webp' },
    { key: 'bitkub', logo: '/portfolio/logo-company/bitkub.webp' },
    { key: 'interset', logo: '/portfolio/logo-company/interset.webp' },
  ] as const
  const skills = [
    { key: 'typescript', logo: '/portfolio/logo-stack/typescript-logo.webp' },
    { key: 'react', logo: '/portfolio/logo-stack/react-logo.webp' },
    { key: 'nextjs', logo: '/portfolio/logo-stack/nextjs-logo.webp' },
    { key: 'nestjs', logo: '/portfolio/logo-stack/nestjs-logo.webp' },
    { key: 'jest', logo: '/portfolio/logo-stack/jest-logo.webp' },
    { key: 'golang', logo: '/portfolio/logo-stack/golang-logo.webp' },
  ] as const

  return (
    <FadeUpOnScroll id='experiences' className='bg-base-100 px-5 py-20 sm:px-8 lg:px-14'>
      <div className={styled.experiences}>
        <div className={clsx(styled['experiences-box-col'], styled['experience-panel'])}>
          <div>
            <p className='mb-3 text-xs font-bold uppercase tracking-[0.12em] text-main-color-primavera2'>{t('eyebrow')}</p>
            <h2 className='text-3xl font-bold text-white sm:text-4xl'>{t('experienceTitle')}</h2>
          </div>
          {roles.map(({ key, logo }) => (
            <div className={styled['experiences-content']} key={key}>
              <Image
                alt={t(`items.${key}.company`)}
                className={styled['experience-logo']}
                draggable={false}
                height={48}
                src={logo}
                width={48}
              />
              <p className={styled['experience-period']}>{t(`items.${key}.period`)}</p>
              <p className={styled['experience-role']}>{t(`items.${key}.role`)}</p>
              <p className={styled['experience-company']}>{t(`items.${key}.company`)}</p>
            </div>
          ))}
        </div>

        <div className={clsx(styled['experiences-box-col'], styled['skills-panel'])}>
          <div>
            <p className='mb-3 text-xs font-bold uppercase tracking-[0.12em] text-main-color-primavera3'>{t('eyebrow')}</p>
            <h2 className='text-3xl font-bold sm:text-4xl'>{t('skillsTitle')}</h2>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3'>
            {skills.map(({ key, logo }) => (
              <div className={styled['skill-content']} key={key}>
                <Image
                  alt=''
                  className={styled['skill-icon']}
                  draggable={false}
                  height={48}
                  src={logo}
                  width={48}
                />
                <span>{t(`skills.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUpOnScroll>
  )
}

export default Experiences
