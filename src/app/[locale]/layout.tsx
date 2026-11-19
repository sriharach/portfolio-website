// libs
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import '@/styles/globals.css'

// components
import Layout from '../../components/modules/layouts/Layout'
import DocumentRoot from '../DocumentRoot'

export const metadata: Metadata = {
  title: 'Portfolio Sriharach',
  description: 'Portfolio Sriharach',
}

type LayoutProps = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: 'th' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<LayoutProps>) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <DocumentRoot locale={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Layout>{children}</Layout>
      </NextIntlClientProvider>
    </DocumentRoot>
  )
}
