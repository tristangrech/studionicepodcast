'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBookNow = () => {
    const message = locale === 'fr'
      ? "Bonjour ! J'aimerais réserver une séance au Studio Nice Podcast."
      : "Hello! I'd like to book a session at Studio Nice Podcast."
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-primary/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl md:text-2xl font-bold text-white text-left"
            >
              Studio Nice <span className="text-accent">Podcast</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-accent transition-colors px-3 py-2 text-base font-medium"
            >
              {t('home')}
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-accent transition-colors px-3 py-2 text-base font-medium"
            >
              {t('services')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-accent transition-colors px-3 py-2 text-base font-medium"
            >
              {t('pricing')}
            </button>
            <button
              onClick={() => scrollToSection('studio')}
              className="text-gray-300 hover:text-accent transition-colors px-3 py-2 text-base font-medium"
            >
              {t('studio')}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-accent transition-colors px-3 py-2 text-base font-medium"
            >
              {t('faq')}
            </button>
            <button
              onClick={handleBookNow}
              className="bg-accent hover:bg-accent-light text-primary font-semibold px-6 py-2.5 rounded-full transition-all transform hover:scale-105 text-base"
            >
              {t('bookNow')}
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-primary/98 backdrop-blur-md border-t border-white/10">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-accent hover:bg-white/5 rounded-lg transition-all"
          >
            {t('home')}
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-accent hover:bg-white/5 rounded-lg transition-all"
          >
            {t('services')}
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-accent hover:bg-white/5 rounded-lg transition-all"
          >
            {t('pricing')}
          </button>
          <button
            onClick={() => scrollToSection('studio')}
            className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-accent hover:bg-white/5 rounded-lg transition-all"
          >
            {t('studio')}
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="block w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-accent hover:bg-white/5 rounded-lg transition-all"
          >
            {t('faq')}
          </button>
          <div className="pt-4 space-y-2">
            <button
              onClick={handleBookNow}
              className="w-full bg-accent hover:bg-accent-light text-primary font-bold py-4 rounded-full transition-all transform hover:scale-105 text-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t('bookNow')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
