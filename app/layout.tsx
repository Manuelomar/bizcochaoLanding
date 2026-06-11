import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Quicksand, Fraunces } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const fraunces = Fraunces({
  variable: '--font-heading',
  subsets: ['latin'],
  style: ['italic', 'normal'],
})

export const metadata: Metadata = {
  title: 'Bizcochao | Postres artesanales hechos con amor',
  description:
    'En Bizcochao preparamos pasteles, tres leches, postres, picaderas, empanadas, café y batidas artesanales para endulzar tus momentos especiales.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${quicksand.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
