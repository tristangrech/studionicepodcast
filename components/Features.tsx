'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MicrophoneIcon, VideoIcon, CalendarIcon, StarIcon } from './Icons'
import { useWhatsAppMessages } from '@/lib/useWhatsApp'

const iconMap = {
  audio: MicrophoneIcon,
  video: VideoIcon,
  booking: CalendarIcon,
  support: StarIcon,
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
}

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
}

export default function Features() {
  const t = useTranslations('features')
  const { bookNow } = useWhatsAppMessages()

  return (
    <section id="features" className="relative py-20 md:py-32 bg-primary/50 overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/equipment.webp"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Decorative accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headingVariants}
        >
          <motion.span
            className="inline-block text-accent/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            &#9830;
          </motion.span>
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

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {(Object.keys(iconMap) as Array<keyof typeof iconMap>).map((key, index) => {
            const Icon = iconMap[key]
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-md p-7 md:p-8 rounded-2xl border border-white/10 hover:border-accent/40 transition-colors duration-500 h-full overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <motion.div
                      className="bg-gradient-to-br from-accent/20 to-accent/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-accent/20"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Icon className="w-8 h-8 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {t(`features.${key}.title`)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-[0.95rem]">
                      {t(`features.${key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            onClick={bookNow}
            className="relative bg-accent hover:bg-accent-light text-primary font-bold text-lg px-14 py-4 rounded-full transition-colors shadow-2xl shadow-accent/20 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">{t('cta')}</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-accent-light/0 via-white/20 to-accent-light/0"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
