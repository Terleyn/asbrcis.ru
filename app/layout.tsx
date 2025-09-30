import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ASBR:CIS',
  description: 'Русское сообщество по играм JoJo / ASBR:CIS',
  generator: 'ASBR:CIS',
  keywords: 'JoJo, ASBR, CIS, Джоджо, русское сообщество, игры',
  authors: [{ name: 'ASBR:CIS' }],
  openGraph: {
    title: 'ASBR:CIS',
    description: 'Русское сообщество по играм JoJo / ASBR:CIS',
    url: 'https://asbrcis.ru/',
    siteName: 'ASBR:CIS',
    images: [
      {
        url: '/server-logo.png',
        width: 1200,
        height: 630,
        alt: 'ASBR:CIS Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASBR:CIS',
    description: 'Русское сообщество по играм JoJo / ASBR:CIS',
    images: ['/server-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
