'use client'

import { useTranslations, useLocale } from 'next-intl'
import { WhatsAppIcon } from './Icons'
import { WHATSAPP_NUMBER } from '@/lib/constants'

export default function WhatsAppButton() {
  const t = useTranslations('whatsapp')
  const locale = useLocale()

  const handleClick = () => {
    const message = locale === 'fr'
      ? "Bonjour ! Je suis intéressé par une séance au Studio Nice Podcast. Pouvez-vous me donner plus d'informations ?"
      : "Hello! I'm interested in booking a session at Studio Nice Podcast. Can you provide more information?"

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="whatsapp-btn fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 touch-manipulation"
      aria-label={t('aria')}
    >
      <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8" />
    </button>
  )
}
