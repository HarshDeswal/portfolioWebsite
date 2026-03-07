'use client'
import styles from '../styles/HomesectionAI.module.css'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const HomesectionAI = () => {
  return (
    <AnimatedSection className={styles.sectionAiOuter}>
      <h1 className={styles.title}>AI Development Workflow</h1>
      <p className={styles.subtitle}>
        How I use AI tools like Cursor and GitHub Copilot to build, improve and ship projects faster.
      </p>

      <div className={styles.cards}>
        <motion.div className={styles.card} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          <h2>Codebase analysis</h2>
          <p>
            I use AI assistants to quickly understand unfamiliar parts of the codebase, trace data flow,
            and spot edge cases that are easy to miss in manual reviews.
          </p>
        </motion.div>

        <motion.div className={styles.card} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
          <h2>Implementing new features</h2>
          <p>
            For new features, I pair program with AI to sketch components, API calls and state management,
            then refine the implementation to match the product vision and code style.
          </p>
        </motion.div>

        <motion.div className={styles.card} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <h2>Refactoring components</h2>
          <p>
            AI helps me refactor large components into smaller, reusable pieces, improve naming,
            and modernize patterns while keeping behavior and UI consistent.
          </p>
        </motion.div>

        <motion.div className={styles.card} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
          <h2>Developer productivity</h2>
          <p>
            By automating boilerplate, tests and repetitive changes, AI tools free up time to focus
            on architecture, performance, UX and solving the actual product problems.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default HomesectionAI

