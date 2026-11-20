import Image from 'next/image'
import { useTranslations } from 'next-intl'
import FadeUpOnScroll from '../shared/fadeUponScroll/fadeUponScroll'
import styled from './skills.module.css'
import { experienceSkills } from './experienceData'

const Skills = () => {
  const t = useTranslations('experience')

  return (
    <FadeUpOnScroll id='skills' className={styled['skills-section']}>
      <div className={styled['skills-wrap']}>
        <header className={styled['skills-heading']}>
          <p className='mb-3 text-xs font-bold uppercase tracking-[0.12em] text-main-content-color-primavera1'>{t('skillsEyebrow')}</p>
          <h2 className='text-4xl font-semibold text-main-content-color-primavera1 sm:text-6xl'>{t('skillsTitle')}</h2>
        </header>
        <div className={styled['skills-grid']}>
          {experienceSkills.map(({ key, logo }, index) => (
            <article className={styled['skill-card']} key={key}>
              <div className={styled['skill-card-heading']}>
                <h3>{t(`skills.${key}`)}</h3>
                <Image alt='' className={styled['skill-icon']} draggable={false} height={48} src={logo} width={48} />
              </div>
              <div className={styled['skill-card-footer']}>
                <span className={styled['skill-index']}>0{index + 1}</span>
                <span className={styled['skill-rule']} aria-hidden='true' />
              </div>
            </article>
          ))}
        </div>
      </div>
    </FadeUpOnScroll>
  )
}

export default Skills