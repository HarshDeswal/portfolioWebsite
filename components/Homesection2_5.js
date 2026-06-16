import styles from '../styles/Homesection2_5.module.css'
import AnimatedSection from './AnimatedSection'

const Homesection2_5 = () => {
    return (
        <AnimatedSection className={styles.section2_5outer}>
            <h1>My Experience & Education</h1>
            <div className={styles.section2_5inner}>

                <div className={styles.circlelinecircletext}>
                    <p className={styles.text}></p>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button className={styles.circle}></button>
                            <p className={styles.hrline}></p>
                            <button className={styles.circle}></button>
                        </div>
                        <p className={styles.vrline}></p>
                    </div>

                    <p className={styles.text3}>
                        <span>(2020 - 2024) - </span>B.Tech in Computer Science from Vellore Institute of Technology (CGPA: 9.15)
                    </p>
                </div>
                <div className={styles.vrline2}></div>

                <div className={styles.circlelinecircletext}>
                    <p className={styles.text8}>
                        <span>(Mar 2024 - Oct 2024) -</span> R&D Intern at Hewlett Packard Enterprise (HPE).
                    </p>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative', left: '-60px' }}>
                            <button className={styles.circle}></button>
                            <p className={styles.hrline}></p>
                            <button className={styles.circle}></button>
                        </div>
                        <p className={styles.vrline}></p>
                    </div>
                </div>
                <div className={styles.vrline2}></div>

                <div className={styles.circlelinecircletext}>
                    <p className={styles.text}></p>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button className={styles.circle}></button>
                            <p className={styles.hrline}></p>
                            <button className={styles.circle}></button>
                        </div>
                        <p className={styles.vrline}></p>
                    </div>

                    <p className={styles.text1}>
                        <span>(Oct 2024 - Mar 2026) -</span> Software Engineer at PayPal — architected high-concurrency checkout microservices, led global expansion across 15+ countries, and optimized performance with Kafka, MySQL, and distributed caching.
                    </p>
                </div>
                <div className={styles.vrline2}></div>

                <div className={styles.circlelinecircletext}>
                    <p className={styles.text4}>
                        <span>Achievements -</span> 2nd Prize in PayPal Ideathon, Global 497 in WorldQuant International Championship 2023, Finalist in Broadridge India Innovation Hackathon 2023
                    </p>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative', left: '-60px' }}>
                            <button className={styles.circle}></button>
                            <p className={styles.hrline}></p>
                            <button className={styles.circle}></button>
                        </div>
                        <p className={styles.vrline}></p>
                    </div>
                </div>
                <div className={styles.vrline2}></div>

                <div className={styles.circlelinecircletext}>
                    <p className={styles.text}></p>
                    <div>
                        <div className={styles.vrline2}></div>
                        <p className={styles.arrow}>v</p>
                        <p style={{}} className={styles.text9}>
                            &quot; Building systems that scale globally and deliver measurable impact — always eager to learn and grow. &quot;
                        </p>
                    </div>
                </div>



            </div>
        </AnimatedSection>
    )
}

export default Homesection2_5
