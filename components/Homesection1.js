import styles from '../styles/Homesection1.module.css'
import mainimg from '../media/photo1.png'
import Image from 'next/legacy/image'
import AnimatedSection from './AnimatedSection'

const Homesection1 = () => {
  return (
    <AnimatedSection className={styles.section1outer}>
      <div className={styles.left}>
        <h2 className={styles.head2}>Hello There,</h2>
        <h1 className={styles.head1}>
          I am <span>Harsh</span>
        </h1>
        <p className={styles.ptag}>
          Software Engineer with 1.5+ years of experience building scalable web applications and distributed microservices. Strong in
          system design and performance optimization across React/Next.js and Java/Spring Boot, owning revenue-critical systems with
          a focus on reliability and scale.
        </p>
      </div>
      <div className={styles.right}>
        <Image src={mainimg} layout="responsive" alt="" />
      </div>
    </AnimatedSection>
  )
}

export default Homesection1