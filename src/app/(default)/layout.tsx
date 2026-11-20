import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '@/styles/globals.css'
import DocumentRoot from '../DocumentRoot'

export const metadata: Metadata = {
  title: 'Portfolio Sriharach',
  description: 'Portfolio Sriharach',
}

export default function DefaultLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <DocumentRoot locale='en'>{children}</DocumentRoot>
}