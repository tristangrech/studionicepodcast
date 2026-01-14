'use client'

import { useTranslations } from 'next-intl'
import { ClockIcon, LocationIcon, VideoIcon, MicrophoneIcon, StarIcon } from './Icons'

export default function StudioShowcase() {
  const t = useTranslations('studio')

  return (
    <section id="studio" className="py-16 md:py-24 bg-primary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('title')} <span className="text-accent">{t('highlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {(['space', 'quality', 'availability', 'satisfaction'] as const).map((stat, index) => {
            const icons = [VideoIcon, VideoIcon, ClockIcon, StarIcon]
            const Icon = icons[index]
            return (
              <div key={index} className="text-center bg-white/5 rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10">
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                  {stat === 'space' && '45m²'}
                  {stat === 'quality' && '4K'}
                  {stat === 'availability' && '24/7'}
                  {stat === 'satisfaction' && '100%'}
                </div>
                <div className="text-gray-400">{t(`stats.${stat}`)}</div>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {(['audio', 'video', 'facilities'] as const).map((category, index) => {
            const icons = [MicrophoneIcon, VideoIcon, LocationIcon]
            const Icon = icons[index]
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-accent/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  {t(`categories.${category}.title`)}
                </h3>
                <ul className="space-y-3">
                  {(Array.from({ length: 5 }, (_, i) => i) as number[]).map((itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-gray-300">{t(`categories.${category}.items.${itemIndex}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <LocationIcon className="w-8 h-8 text-accent" />
                {t('location.title')}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('location.description')}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <ClockIcon className="w-8 h-8 text-accent" />
                {t('hours.title')}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('hours.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
