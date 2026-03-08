'use client'

import { useState, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDownIcon } from './Icons'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

export default function FAQ() {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-40px' })

  return (
    <section id="faq" className="py-20 md:py-32 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('title')} <span className="text-accent">{t('highlight')}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400">
            {t('description')}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          ref={listRef}
          initial="hidden"
          animate={listInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-3 md:space-y-4"
        >
          {(Array.from({ length: 8 }, (_, i) => i) as number[]).map((index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl border overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-accent/40' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 md:px-7 py-5 md:py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {t(`questions.${index}.q`)}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0"
                  >
                    <ChevronDownIcon className="w-5 h-5 text-accent" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-7 pb-5 md:pb-6">
                        <div className="w-12 h-0.5 bg-accent/30 rounded-full mb-4" />
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                          {t(`questions.${index}.a`)}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
