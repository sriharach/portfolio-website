'use client'

import { useTranslations } from 'next-intl'
import styled from './blog.module.css'

export default function BlogPage() {
  const t = useTranslations('blog')

  return (
    <section aria-labelledby='blog-title' className={styled['blog-page']}>
      <div className={styled['blog-heading']}>
        <h1 className={styled['blog-title']} id='blog-title'>
          {t('title')}
        </h1>
      </div>
    </section>
  )
}