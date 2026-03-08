'use client'

import { useTranslations, useLocale } from 'next-intl'
import { WhatsAppIcon } from './Icons'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import { motion } from 'framer-motion'

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
    <motion.button
      onClick={handleClick}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-colors duration-300 touch-manipulation"
      aria-label={t('aria')}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [1, 1.05, 1], opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
    </motion.button>
  )
}
