import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://studionicepodcast.com'),
  title: 'Studio Nice Podcast | Professional Recording Studio in Nice, France',
  description: 'Premium podcast recording studio in Nice. State-of-the-art equipment, professional sound engineering, and flexible booking options for content creators.',
  keywords: 'podcast studio nice, recording studio france, content creation nice, professional audio recording',
  openGraph: {
    title: 'Studio Nice Podcast | Professional Recording Studio',
    description: 'Premium podcast recording studio in Nice with state-of-the-art equipment',
    url: 'https://studionicepodcast.com',
    siteName: 'Studio Nice Podcast',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Nice Podcast | Professional Recording Studio',
    description: 'Premium podcast recording studio in Nice',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
