'use client'

import { useTranslations } from 'next-intl'
import { LocationIcon } from './Icons'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import { useLocale } from 'next-intl'

export default function Contact() {
  const t = useTranslations('contact')
  const locale = useLocale()

  const handleWhatsAppClick = () => {
    const message = locale === 'fr'
      ? "Bonjour ! J'aimerais réserver une séance au Studio Nice Podcast ou obtenir plus d'informations."
      : "Hello! I'd like to book a session at Studio Nice Podcast or get more information."

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('title')} <span className="text-accent">{t('highlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 backdrop-blur-sm rounded-2xl border border-[#25D366]/30 p-6 md:p-8 hover:border-[#25D366]/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#25D366]/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{t('whatsapp.title')}</h3>
                <p className="text-gray-400">{t('whatsapp.instant')}</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('whatsapp.description')}
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t('whatsapp.cta')}
            </button>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 hover:border-accent/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                <LocationIcon className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{t('location.title')}</h3>
                <p className="text-gray-400">{t('location.nice')}</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                {t('location.description')}
              </p>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-1">{t('location.address')}</p>
                <p className="text-white font-semibold">{t('location.street')}</p>
                <p className="text-white font-semibold">{t('location.city')}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-sm text-gray-400 mb-1">{t('location.hours')}</p>
                <p className="text-white font-semibold">{t('location.availability')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 backdrop-blur-sm rounded-2xl border border-accent/30 p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('cta')}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {t('subtext')}
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent-light text-primary font-bold text-lg px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-2xl"
            >
              {t('consultation')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
