import { useTranslations } from 'next-intl'
import { WHATSAPP_NUMBER } from './constants'

export function useWhatsAppMessages() {
  const t = useTranslations('whatsapp.booking')

  return {
    bookNow: () => {
      const message = encodeURIComponent(t('general'))
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    },
    bookStarter: () => {
      const message = encodeURIComponent(t('starter'))
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    },
    bookProfessional: () => {
      const message = encodeURIComponent(t('professional'))
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    },
    bookPremium: () => {
      const message = encodeURIComponent(t('premium'))
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    },
    services: () => {
      const message = encodeURIComponent(t('services'))
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    },
    consultation: () => {
      const message = encodeURIComponent(t('consultation'))
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    },
  }
}
