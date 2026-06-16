import styles from '../styles/Homesection4.module.css'
import AnimatedSection from './AnimatedSection'

const Homesection4 = () => {
  return (
    <AnimatedSection className={styles.section4outermost}>
        <div className={styles.left}>
          <p>If you are looking for a backend engineer, full-stack developer, or any assistance regarding your projects then feel free to contact me at <span>harshdeswal81@gmail.com</span></p>  
        </div>
        <div className={styles.right}>
            <h1>
                Let's<br/>
                Work<br/>
                together
            </h1>
        </div>
    </AnimatedSection>
  )
}

export default Homesection4