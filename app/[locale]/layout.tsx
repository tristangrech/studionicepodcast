import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Montserrat } from 'next/font/google'
import { locales, type Locale } from '@/lib/i18n'
import StructuredData from '@/components/StructuredData'
import './globals.css'

export const runtime = 'edge'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300','400','500','600','700','800','900'] })

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  const baseUrl = locale === 'fr' ? 'https://studionicepodcast.com/fr' : 'https://studionicepodcast.com'

  return {
    metadataBase: new URL(baseUrl),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: baseUrl,
      siteName: 'Studio Nice Podcast',
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: locale === 'fr' ? 'en_US' : 'fr_FR',
      images: [{
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Studio Nice Podcast - Professional Recording Studio',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/hero.webp'],
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        'en': 'https://studionicepodcast.com',
        'fr': 'https://studionicepodcast.com/fr',
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <StructuredData locale={locale} />
      </head>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
