'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { locales } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    // Remove the current locale from pathname and add the new one
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
            locale === loc
              ? 'bg-accent text-primary shadow-lg'
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
          aria-label={`Switch to ${loc === 'en' ? 'English' : 'French'}`}
        >
          {loc === 'en' ? 'EN' : 'FR'}
        </button>
      ))}
    </div>
  )
}
