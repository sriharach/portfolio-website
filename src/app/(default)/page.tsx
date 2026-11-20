import { NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import messages from '../../../messages/en.json'
import Layout from '@/components/modules/layouts/Layout'
import PortfolioPage from '@/components/home/PortfolioPage'

export default function Home() {
  setRequestLocale('en')

  return (
    <NextIntlClientProvider locale='en' messages={messages}>
      <Layout>
        <PortfolioPage />
      </Layout>
    </NextIntlClientProvider>
  )
}