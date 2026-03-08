'use client'

import { useTranslations } from 'next-intl'
import { useWhatsAppMessages } from '@/lib/useWhatsApp'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundBeams } from './ui/background-beams'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

const floatingVariants = {
  initial: { y: 0 },
  animate: (custom: number) => ({
    y: [-6, 6, -6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: custom * 0.5,
    },
  }),
}

const statCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export default function Hero() {
  const t = useTranslations('hero')
  const { bookNow } = useWhatsAppMessages()

  const handleExplore = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { value: '4K', label: t('stats.video') },
    { value: '45m\u00B2', label: t('stats.space') },
    { value: '24/7', label: t('stats.availability') },
    { value: '\u2605 5.0', label: t('stats.rating') },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 md:pt-20"
      aria-label="Hero section"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#D4AF37" />

      {/* Background image */}
      <Image
        src="/images/hero.webp"
        alt="Studio Nice Podcast interior"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90 z-[1]" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl hidden sm:block z-[2]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden sm:block z-[2]" />

      <BackgroundBeams className="opacity-20" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6 sm:space-y-8">
          {/* Badge / Pill */}
          <motion.div variants={fadeUpVariants} className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-sm sm:text-base font-medium px-5 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {t('badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            {t('title')}
            <span className="block text-accent mt-2 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              {t('subtitle')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div variants={fadeUpVariants}>
            <TextGenerateEffect words={t('description')} className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 px-4"
          >
            <motion.button
              onClick={bookNow}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-accent hover:bg-accent-light text-primary font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-4 rounded-full transition-colors shadow-2xl shadow-accent/20 touch-manipulation"
              aria-label={t('primaryCTA')}
            >
              {t('primaryCTA')}
            </motion.button>
            <motion.button
              onClick={handleExplore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-4 rounded-full transition-colors touch-manipulation"
              aria-label={t('secondaryCTA')}
            >
              {t('secondaryCTA')}
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-12 sm:pt-16 max-w-4xl mx-auto px-4"
            variants={containerVariants}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={statCardVariants}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6"
              >
                <motion.div
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  custom={i}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
