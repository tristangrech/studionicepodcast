'use client'

import { useTranslations } from 'next-intl'
import { MicrophoneIcon, VideoIcon, CalendarIcon, StarIcon } from './Icons'
import { useWhatsAppMessages } from '@/lib/useWhatsApp'

const iconMap = {
  audio: MicrophoneIcon,
  video: VideoIcon,
  booking: CalendarIcon,
  support: StarIcon,
}

export default function Features() {
  const t = useTranslations('features')
  const { bookNow } = useWhatsAppMessages()

  return (
    <section id="features" className="py-16 md:py-24 bg-primary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('title')} <span className="text-accent">{t('highlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {(Object.keys(iconMap) as Array<keyof typeof iconMap>).map((key, index) => {
            const Icon = iconMap[key]
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t(`features.${key}.title`)}</h3>
                <p className="text-gray-400 leading-relaxed">{t(`features.${key}.description`)}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={bookNow}
            className="bg-accent hover:bg-accent-light text-primary font-bold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-2xl"
          >
            {t('cta')}
          </button>
        </div>
      </div>
    </section>
  )
}
