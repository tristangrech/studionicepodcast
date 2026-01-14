'use client'

import { useTranslations } from 'next-intl'
import { useWhatsAppMessages } from '@/lib/useWhatsApp'

export default function Hero() {
  const t = useTranslations('hero')
  const { bookNow } = useWhatsAppMessages()

  const handleExplore = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 z-0" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden sm:block" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            {t('title')}
            <span className="block text-accent mt-2">{t('subtitle')}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <button
              onClick={bookNow}
              className="w-full sm:w-auto bg-accent hover:bg-accent-light text-primary font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-2xl touch-manipulation"
            >
              {t('primaryCTA')}
            </button>
            <button
              onClick={handleExplore}
              className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-4 rounded-full transition-all touch-manipulation"
            >
              {t('secondaryCTA')}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-12 sm:pt-16 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent">4K</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">{t('stats.video')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent">45m²</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">{t('stats.space')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">{t('stats.availability')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent">★ 5.0</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">{t('stats.rating')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
