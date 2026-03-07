'use client'
import Image from 'next/legacy/image'
import styles from './Card2_right.module.css'
import { motion } from 'framer-motion'

const Card2_right = (props) => {
  const techStack = props.techStack || []
  const staggerDelay = props.staggerDelay ?? 0
  return (
    <motion.div
      className={styles.card_outer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: staggerDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.25 },
      }}
    >
      <div className={styles.right}>
        <div className={styles.text}>
          <h2>{props.cname}</h2>
          <p>{props.cdescription}</p>
          {techStack.length > 0 && (
            <div className={styles.badges}>
              {techStack.map((tech) => (
                <span key={tech} className={styles.badge}>{tech}</span>
              ))}
            </div>
          )}
        </div>
        <div className={styles.actions}>
          <a href={props.cvisit} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Visit</a>
          <a href={props.ccode} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>Source Code</a>
        </div>
      </div>
      <div className={styles.left}>
        <Image src={props.cimg} layout="responsive" alt="" />
      </div>
    </motion.div>
  )
}

export default Card2_right
