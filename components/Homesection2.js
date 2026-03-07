import styles from '../styles/Homesection2.module.css'
import AnimatedSection from './AnimatedSection'

const Homesection2 = () => {
  return (
    <AnimatedSection className={styles.section2outer}>
      <div className={styles.left}>
        <h1 className={styles.head1}>My Skills</h1>
        <p className={styles.head2}>Web App Development, Data Science & Programming</p>
      </div>
      <div className={styles.right}>
        <p className={styles.bodyText}>
          I love building new webpages with new functionalities. I learnt React Js, Next Js, Sanity, SQL, MySQL, RapidAPI, MongoDB. Did internship as an Application developer in a Startup. Also been the Data Analyst for Data analytics club in our college.
          <br />
          Always eager to collaborate, innovate and solve the real world problems.
        </p>
      </div>
    </AnimatedSection>
  )
}

export default Homesection2