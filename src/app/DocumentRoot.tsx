import type { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

export default function DocumentRoot({
  children,
  locale,
}: Readonly<{ children: ReactNode; locale: string }>) {
  return (
    <html lang={locale}>
      <body>
        <ToastContainer
          position='bottom-right'
          autoClose={2000}
          hideProgressBar={false}
        />
        {children}
      </body>
    </html>
  )
}