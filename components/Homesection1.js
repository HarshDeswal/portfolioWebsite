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
          Backend Software Engineer with 1.5+ years of experience at PayPal and HPE, specializing in high-throughput distributed
          microservices and scalable web architectures. Proven track record in optimizing system performance, reducing latency by 83%,
          and driving millions in incremental revenue through Java/Spring Boot and Next.js solutions.
        </p>
      </div>
      <div className={styles.right}>
        <Image src={mainimg} layout="responsive" alt="" />
      </div>
    </AnimatedSection>
  )
}

export default Homesection1