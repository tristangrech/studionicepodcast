'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { CheckIcon } from './Icons'
import { useWhatsAppMessages } from '@/lib/useWhatsApp'
import { BorderBeam } from './ui/border-beam'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
}

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.4,
    },
  }),
}

export default function Pricing() {
  const t = useTranslations('pricing')
  const { bookStarter, bookProfessional, bookPremium } = useWhatsAppMessages()

  const bookHandlers = {
    starter: bookStarter,
    professional: bookProfessional,
    premium: bookPremium,
  }

  const featureCounts = {
    starter: 6,
    professional: 8,
    premium: 10,
  }

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-primary overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            {t('title')}{' '}
            <span className="text-accent relative">
              {t('highlight')}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {(['starter', 'professional', 'premium'] as const).map((plan, planIndex) => {
            const isProfessional = plan === 'professional'
            const count = featureCounts[plan]

            return (
              <motion.div
                key={plan}
                custom={planIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className={`relative group ${isProfessional ? 'md:-my-4 md:z-10' : ''}`}
              >
                <div
                  className={`relative bg-gradient-to-br backdrop-blur-md rounded-2xl border p-7 md:p-8 transition-all duration-500 overflow-hidden ${
                    isProfessional
                      ? 'from-white/[0.1] to-white/[0.03] border-accent shadow-2xl shadow-accent/20 md:py-12'
                      : 'from-white/[0.06] to-white/[0.02] border-white/10 hover:border-accent/30'
                  }`}
                >
                  {/* Professional card accent glow */}
                  {isProfessional && (
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 via-transparent to-accent/10 pointer-events-none" />
                  )}

                  {/* Hover glow for non-professional cards */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                  {/* Most Popular badge */}
                  {isProfessional && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <motion.span
                        className="bg-accent text-primary text-xs sm:text-sm font-bold px-5 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg shadow-accent/30"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        {t('plans.professional.popular')}
                      </motion.span>
                    </div>
                  )}

                  {isProfessional && <BorderBeam size={300} duration={12} borderWidth={2} />}

                  <div className="relative">
                    {/* Plan header */}
                    <div className="text-center mb-7 md:mb-8">
                      <h3 className={`font-bold text-white mb-3 ${isProfessional ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                        {t(`plans.${plan}.name`)}
                      </h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <motion.span
                          className={`font-extrabold text-accent ${isProfessional ? 'text-5xl sm:text-6xl' : 'text-4xl sm:text-5xl'}`}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + planIndex * 0.15, duration: 0.5, type: 'spring' }}
                        >
                          {t(`plans.${plan}.price`)}
                        </motion.span>
                        <span className="text-gray-400 text-sm">
                          {t(`plans.${plan}.duration`)}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm md:text-base mt-3 md:mt-4 leading-relaxed">
                        {t(`plans.${plan}.description`)}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className={`w-full h-px mb-7 md:mb-8 ${isProfessional ? 'bg-gradient-to-r from-transparent via-accent/40 to-transparent' : 'bg-white/10'}`} />

                    {/* Features list */}
                    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                      {(Array.from({ length: count }, (_, i) => i) as number[]).map((index) => (
                        <motion.li
                          key={index}
                          custom={index}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={featureVariants}
                          className="flex items-start gap-3"
                        >
                          <div className={`flex-shrink-0 mt-0.5 rounded-full p-0.5 ${isProfessional ? 'bg-accent/20' : 'bg-white/5'}`}>
                            <CheckIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${isProfessional ? 'text-accent' : 'text-accent/80'}`} />
                          </div>
                          <span className="text-gray-300 text-sm md:text-base">
                            {t(`plans.${plan}.features.${index}`)}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA button */}
                    <motion.button
                      onClick={bookHandlers[plan]}
                      className={`w-full font-bold py-4 rounded-full transition-colors touch-manipulation overflow-hidden relative ${
                        isProfessional
                          ? 'bg-accent hover:bg-accent-light text-primary shadow-lg shadow-accent/20'
                          : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-accent/30'
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="relative z-10">{t(`plans.${plan}.cta`)}</span>
                      {isProfessional && (
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-accent-light/0 via-white/20 to-accent-light/0"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Custom package */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-8 py-4">
            <p className="text-gray-400 text-lg">
              {t('customPackage')}{' '}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-accent hover:text-accent-light font-semibold underline underline-offset-4 decoration-accent/50 hover:decoration-accent transition-colors"
              >
                {t('contactUs')}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
