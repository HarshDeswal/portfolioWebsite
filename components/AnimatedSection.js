'use client'

import { motion } from 'framer-motion'

/**
 * Scroll-based reveal: fade-in + slide-up when section enters viewport.
 * Triggers only once (viewport.once). Use for Hero, Skills, Experience, Projects.
 */
const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function AnimatedSection({
  children,
  className = '',
  delayOrder = 0,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -80px 0px' }}
      variants={revealVariants}
      custom={delayOrder}
      {...props}
    >
      {children}
    </motion.div>
  )
}
