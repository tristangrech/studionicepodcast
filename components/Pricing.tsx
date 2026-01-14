'use client'

import { useTranslations } from 'next-intl'
import { CheckIcon } from './Icons'
import { useWhatsAppMessages } from '@/lib/useWhatsApp'

export default function Pricing() {
  const t = useTranslations('pricing')
  const { bookStarter, bookProfessional, bookPremium } = useWhatsAppMessages()

  const bookHandlers = {
    starter: bookStarter,
    professional: bookProfessional,
    premium: bookPremium,
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('title')} <span className="text-accent">{t('highlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {(['starter', 'professional', 'premium'] as const).map((plan) => (
            <div
              key={plan}
              className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
                plan === 'professional'
                  ? 'border-accent shadow-2xl shadow-accent/20'
                  : 'border-white/10 hover:border-accent/50'
              }`}
            >
              {plan === 'professional' && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-primary text-xs sm:text-sm font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full">
                    {t('plans.professional.popular')}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {t(`plans.${plan}.name`)}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-accent">
                    {t(`plans.${plan}.price`)}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {t(`plans.${plan}.duration`)}
                  </span>
                </div>
                <p className="text-gray-400 text-sm md:text-base mt-3 md:mt-4">
                  {t(`plans.${plan}.description`)}
                </p>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {(Array.from({ length: plan === 'starter' ? 6 : plan === 'professional' ? 8 : 10 }, (_, i) => i) as number[]).map((index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <span className="text-gray-300 text-sm md:text-base">
                      {t(`plans.${plan}.features.${index}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={bookHandlers[plan]}
                className={`w-full font-bold py-4 rounded-full transition-all transform hover:scale-105 touch-manipulation ${
                  plan === 'professional'
                    ? 'bg-accent hover:bg-accent-light text-primary'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {t(`plans.${plan}.cta`)}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            {t('customPackage')}{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-accent hover:text-accent-light font-semibold underline"
            >
              {t('contactUs')}
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
