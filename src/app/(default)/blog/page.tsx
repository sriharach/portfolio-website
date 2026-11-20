import { NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import messages from '../../../../messages/en.json'
import BlogPage from '@/components/blog/BlogPage'
import Layout from '@/components/modules/layouts/Layout'

export default function Blog() {
  setRequestLocale('en')

  return (
    <NextIntlClientProvider locale='en' messages={messages}>
      <Layout>
        <BlogPage />
      </Layout>
    </NextIntlClientProvider>
  )
}