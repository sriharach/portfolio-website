// libs
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { useTranslations } from 'next-intl'

// components
import ButtonDaisyUi from '../daisyUI/buttonDaisyUi/ButtonDaisyUi'

// styles
import styled from './portfolio.module.css'

// shared
import FadeUpOnScroll from '../shared/fadeUponScroll/fadeUponScroll'

// hooks
import usePortfolio from '@/hooks/usePortfolio'
import { portfolioProjects } from './portfolioProjects'

const Portfolio = () => {
  const t = useTranslations('portfolio')
  const { onClickRedirect } = usePortfolio()

  return (
    <section id='portfolio' className={styled['profile']}>
      <FadeUpOnScroll className={styled['profile-box-col']}>
        <div className={styled['portfolio-heading']}>
          <div>
            <p className={styled['portfolio-kicker']}>{t('eyebrow')}</p>
            <h2 className={styled['portfolio-title']}>{t('title')}</h2>
          </div>
          <p className={styled['portfolio-intro']}>{t('description')}</p>
        </div>
        <div className={styled['project-list']}>
          {portfolioProjects.map(
            ({ key, image, destination, layout }, index) => {
              const title = t(`projects.${key}.title`)
              const tone = index % 2 === 0 ? 'orange' : 'white'

              return (
                <article
                  className={styled['project-card']}
                  data-image-position={layout}
                  data-tone={tone}
                  key={key}
                >
                  <div className={styled['project-copy']}>
                    <span className={styled['project-index']}>
                      0{index + 1}.
                    </span>
                    <p className={styled['project-feature']}>
                      {t(`projects.${key}.feature`)}
                    </p>
                    <h3 className={styled['project-title']}>{title}</h3>
                    <ButtonDaisyUi
                      className='mt-4'
                      text={t('view')}
                      endIcon={<FiArrowUpRight />}
                      variant='outline'
                      color={tone === 'orange' ? 'secondary' : 'primary'}
                      onClick={() => onClickRedirect(destination)}
                    />
                  </div>
                  <button
                    aria-label={`${t('view')} ${title}`}
                    className={styled['project-image-link']}
                    onClick={() => onClickRedirect(destination)}
                    type='button'
                  >
                    <Image
                      alt={title}
                      className={styled['project-image']}
                      height={900}
                      src={image}
                      width={1100}
                    />
                  </button>
                </article>
              )
            },
          )}
        </div>
      </FadeUpOnScroll>
    </section>
  )
}

export default Portfolio
