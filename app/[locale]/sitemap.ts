import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-03-08')

  return [
    {
      url: 'https://studionicepodcast.com',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://studionicepodcast.com/fr',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
