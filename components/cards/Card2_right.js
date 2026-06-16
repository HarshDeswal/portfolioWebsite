'use client'

import Image from 'next/legacy/image'
import styles from './Card2_right.module.css'
import { motion } from 'framer-motion'

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const Card2_right = (props) => {
  const techStack = props.techStack || []
  const staggerDelay = props.staggerDelay ?? 0
  const hasLiveDemo = props.cvisit && props.cvisit !== '#'
  return (
    <motion.div
      className={styles.card_outer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: staggerDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -4,
        transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{props.cname}</h2>
          <p>{props.cdescription}</p>
          {techStack.length > 0 && (
            <div className={styles.tags}>
              {techStack.map((tech) => (
                <span key={tech} className={styles.tag}>{tech}</span>
              ))}
            </div>
          )}
        </div>
        <div className={styles.actions}>
          {hasLiveDemo && (
            <a href={props.cvisit} target="_blank" rel="noopener noreferrer" className={styles.btnLive}>
              Live Demo
            </a>
          )}
          <a href={props.ccode} target="_blank" rel="noopener noreferrer" className={styles.btnGitHub} aria-label="View source on GitHub">
            <GitHubIcon className={styles.githubIcon} />
            <span>Code</span>
          </a>
        </div>
      </div>
      <div className={styles.imgWrap}>
        <Image src={props.cimg} layout="fill" objectFit="cover" alt="" />
      </div>
    </motion.div>
  )
}

export default Card2_right
