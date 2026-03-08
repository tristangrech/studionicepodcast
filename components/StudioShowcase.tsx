'use client'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { ClockIcon, LocationIcon, VideoIcon, MicrophoneIcon, StarIcon } from './Icons'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
}

function AnimatedSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function StudioShowcase() {
  const t = useTranslations('studio')
  const galleryRef = useRef(null)
  const galleryInView = useInView(galleryRef, { once: true, margin: '-60px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const categoriesRef = useRef(null)
  const categoriesInView = useInView(categoriesRef, { once: true, margin: '-60px' })

  const galleryImages = [
    { src: '/images/studio-room.webp', alt: 'Studio Room', span: 'md:col-span-2 md:row-span-2' },
    { src: '/images/equipment.webp', alt: 'Equipment', span: '' },
    { src: '/images/video-setup.webp', alt: 'Video Setup', span: '' },
  ]

  return (
    <section id="studio" className="py-20 md:py-32 bg-primary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('title')} <span className="text-accent">{t('highlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </AnimatedSection>

        {/* Image Gallery - Masonry-style Grid */}
        <motion.div
          ref={galleryRef}
          initial="hidden"
          animate={galleryInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 md:mb-20"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-2xl group ${img.span}`}
            >
              <div className={`relative ${index === 0 ? 'h-64 md:h-[480px]' : 'h-32 md:h-[232px]'}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={index === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-20"
        >
          {(['space', 'quality', 'availability', 'satisfaction'] as const).map((stat, index) => {
            const icons = [VideoIcon, VideoIcon, ClockIcon, StarIcon]
            const Icon = icons[index]
            const values = ['45m\u00B2', '4K', '24/7', '100%']
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="text-center bg-white/5 rounded-2xl p-5 md:p-7 lg:p-8 border border-white/10 hover:border-accent/40 hover:bg-white/[0.08] transition-colors duration-300"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2">
                  {values[index]}
                </div>
                <div className="text-gray-400">{t(`stats.${stat}`)}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Equipment Categories */}
        <motion.div
          ref={categoriesRef}
          initial="hidden"
          animate={categoriesInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-16 md:mb-20"
        >
          {(['audio', 'video', 'facilities'] as const).map((category, index) => {
            const icons = [MicrophoneIcon, VideoIcon, LocationIcon]
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-accent/50 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
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
              </motion.div>
            )
          })}
        </motion.div>

        {/* Location & Hours */}
        <AnimatedSection delay={0.1}>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <LocationIcon className="w-8 h-8 text-accent" />
                  {t('location.title')}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('location.description')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <ClockIcon className="w-8 h-8 text-accent" />
                  {t('hours.title')}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('hours.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
