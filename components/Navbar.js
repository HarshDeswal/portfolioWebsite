import styles from '../styles/Navbar.module.css'
import signature from '../media/signature.png'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.navouter}>
        <div className={styles.left}>
            <Image src={signature} className={styles.sign} height={60} width={120} />

        </div>
        <div className={styles.right}>
            <Link href='/'><button>Home </button></Link>
            <Link href='/about'><button>About</button></Link>
            <Link href='/projects'><button>Projects</button></Link>
            <Link href='/contact'><button>Contact</button></Link>
        </div>
    </div> 
  )
}

export default Navbar