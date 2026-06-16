import styles from '../styles/Homesection2.module.css'
import AnimatedSection from './AnimatedSection'

const Homesection2 = () => {
  return (
    <AnimatedSection className={styles.section2outer}>
      <div className={styles.left}>
        <h1 className={styles.head1}>My Skills</h1>
        <p className={styles.head2}>Backend Engineering, Distributed Systems & Full-Stack</p>
      </div>
      <div className={styles.right}>
        <p className={styles.bodyText}>
          Expert in Java, Spring Boot, Node.js, and microservices architecture with hands-on experience in Kafka, MySQL, PostgreSQL,
          MongoDB, and distributed caching. Skilled in React/Next.js, system design, database optimization, and event-driven
          orchestration. Proficient with AWS, Azure, Docker, CI/CD, and AI-assisted development using Cursor, Copilot, and GenAI tools.
          <br />
          Passionate about building reliable, high-performance systems that drive real business impact.
        </p>
      </div>
    </AnimatedSection>
  )
}

export default Homesection2