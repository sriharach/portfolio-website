import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styled from './experience.module.css'
import FadeUpOnScroll from '../shared/fadeUponScroll/fadeUponScroll'
import { experienceRoles } from './experienceData'

const Experiences = () => {
  const t = useTranslations('experience')

  return (
    <FadeUpOnScroll id='experiences' className={styled['experience-section']}>
      <div className={styled.experiences}>
        <div className={styled['experience-heading']}>
          <p className='mb-3 text-xs font-bold uppercase tracking-[0.12em] text-main-content-color-primavera1'>{t('eyebrow')}</p>
          <h2 className='text-4xl font-semibold text-main-content-color-primavera1 sm:text-6xl'>{t('experienceTitle')}</h2>
        </div>
        <div className={styled['experience-list']}>
          {experienceRoles.map(({ key, logo }) => (
            <article className={styled['experience-card']} key={key}>
              <Image
                alt={t(`items.${key}.company`)}
                className={styled['experience-logo']}
                draggable={false}
                height={48}
                src={logo}
                width={48}
              />
              <div className={styled['experience-copy']}>
                <p className={styled['experience-period']}>{t(`items.${key}.period`)}</p>
                <h3 className={styled['experience-role']}>{t(`items.${key}.role`)}</h3>
                <p className={styled['experience-company']}>{t(`items.${key}.company`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </FadeUpOnScroll>
  )
}

export default Experiences
