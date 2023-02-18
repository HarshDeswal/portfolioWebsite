import styles from '../styles/Homesection1.module.css'
import mainimg from '../media/photo1.png'
import Image from 'next/legacy/image'
const Homesection1 = () => {
  return (
    <div className={styles.section1outer}>
        <div className={styles.left}>
            <h2 className={styles.head2}>Hello There</h2>
            <h1 className={styles.head1}>
                I am <span>Harsh</span>
            </h1>
            <p className={styles.ptag}>A 20 year old tech enthusiast, I am a web developer and B.Tech CSE pre-final year student with deep interest in web developement and data science</p>
        </div>
        <div className={styles.right}>
            
            <Image src={mainimg} layout='responsive' ></Image>
        </div>
    </div>
  )
}

export default Homesection1