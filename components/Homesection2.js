import styles from '../styles/Homesection2.module.css'


const Homesection2 = () => {
  return (
    <div className={styles.section2outer}>
        <div className={styles.left}>
            <h1 className={styles.head1}>My Skills</h1>
            <h1 className={styles.head2}>Web App Development, Data Science &
                Programming
            </h1>
        </div>
        <div className={styles.right}>
            <p>I love building new webpages with new functionalities. I learnt React Js, Next Js, Sanity, SQL, MySQL, RapidAPI, MongoDB. Did internship as a Application developer in a Startup. Also been the Data Analyst for Data analytics club in our college.<br/>Always eager to collaborate, innovate and solve the real world problems. </p>
        </div>
    </div>
  )
}

export default Homesection2