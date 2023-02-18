import styles from '../styles/Homesection2_5.module.css'

const Homesection2_5 = () => {
    return (
        <div className={styles.section2_5outer}>
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

                    <p className={styles.text1}>
                        <span>(2002-2018) -</span> Kendriya Vidyalaya No.2 Delhi, AFS Manauri Allahabad
                    </p>
                </div>
                <div className={styles.vrline2}></div>

                <div className={styles.circlelinecircletext}>
                    <p className={styles.text2}><span>
                        (2018-2020) - </span>Kendriya Vidyalaya No.1 AFS Jamnagar</p>
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

                    <p style={{}} className={styles.text3}>
                        <span> (2020 - till date) - </span>B.Tech Computer Science
                        from Vellore Institute of Technology
                    </p>
                </div>
                <div className={styles.vrline2}></div>
                <div className={styles.circlelinecircletext}>
                    <p className={styles.text4}>
                        <span>
                            (2021 - 2022) -</span> Member of Data Anaytics Club, did many projects
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

                    <p className={styles.text7}>
                        <span>(2022 - 2023) -</span> Worked as Developer at Startup.
                    </p>
                </div>
                <div className={styles.vrline2}></div>

                <div className={styles.circlelinecircletext}>
                    <p className={styles.text8}>
                        <span>(2023 - till date) -</span>Learning new Technology and building projects with it.
                    </p>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative', left: '-60px' }}>
                            <button className={styles.circle}></button>
                            <p className={styles.hrline}></p>
                            <button className={styles.circle}></button>
                        </div>
                        <p className={styles.vrline}></p>
                        <div className={styles.vrline2}></div>
                        <p className={styles.arrow}>v</p>
                        <p style={{}} className={styles.text9}>
                            " It's great to have these experiences & I am willing to learn more in future. "
                        </p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Homesection2_5