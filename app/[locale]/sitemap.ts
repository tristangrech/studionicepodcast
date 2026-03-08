import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-03-08')

  const domains = [
    { base: 'https://studionicepodcast.com', locale: 'en' },
    { base: 'https://studionicepodcast.fr', locale: 'fr' },
  ]

  const sections = ['#features', '#pricing', '#studio', '#faq', '#contact']

  const entries: MetadataRoute.Sitemap = []

  for (const { base } of domains) {
    // Homepage
    entries.push({
      url: base,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    })

    // Section anchors
    for (const section of sections) {
      entries.push({
        url: `${base}/${section}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return entries
}
