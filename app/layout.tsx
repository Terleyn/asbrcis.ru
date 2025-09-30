import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ASBR:CIS',
  description: 'Русское сообщество по JoJo’s Bizarre Adventure: All-Star Battle R',
  generator: 'ASBR:CIS',
  keywords: [
    'ASBR',
    'JoJo',
    'JoJo’s Bizarre Adventure',
    'All-Star Battle R',
    'ASBR CIS',
    'Русское сообщество JoJo',
    'JoJo Discord',
    'JoJo Fighting Game'
  ],
  authors: [{ name: 'ASBR:CIS Team' }],
  metadataBase: new URL('https://asbrcis.ru'),

  openGraph: {
    title: 'ASBR:CIS',
    description: 'Русское сообщество по JoJo’s Bizarre Adventure: All-Star Battle R',
    url: 'https://asbrcis.ru',
    siteName: 'ASBR:CIS',
    images: [
      {
        url: '/server-logo.png',
        width: 1200,
        height: 630,
        alt: 'ASBR:CIS Logo',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },

  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon.ico',
    apple: '/server-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
