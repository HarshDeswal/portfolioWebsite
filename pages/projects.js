import Homesection5 from '@/components/Homesection5'
import Navbar from '@/components/Navbar'
import styles from '../styles/Homesection3.module.css'
import projectimg1 from '../media/project/proj1.png'
import projectimg2 from '../media/project/proj2.png'
import Card1_left from '@/components/cards/Card1_left'
import Card2_right from '@/components/cards/Card2_right'
import Head from 'next/head'
const projects = () => {
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar/>
      <div className={styles.section3outer}>

                <h1>My Projects</h1>
                <Card1_left cimg={projectimg1} cname="Ecommerce Website" cdescription="I Built an Ecommerce Platform using MERN,It has all the functionalities like Amazon" cvisit="https://www.amazon.in/" ccode="https://www.amazon.in/" />

                <Card2_right cimg={projectimg2} cname="Movie Streaming Platform" cdescription="I Built a Movie Streaming Platform using MERN,It has all the functionalities like Netflix" cvisit="https://www.amazon.in/" ccode="https://www.amazon.in/" />

                <Card1_left cimg={projectimg1} cname="Ecommerce Website" cdescription="I Built an Ecommerce Platform using MERN,It has all the functionalities like amazon" cvisit="/https://www.amazon.in/" ccode="https://www.amazon.in/" />

                <Card2_right cimg={projectimg2} cname="Movie Streaming Platform" cdescription="I Built a Movie Streaming Platform using MERN,It has all the functionalities like Netflix" cvisit="https://www.amazon.in/" ccode="https://www.amazon.in/" />

                <Card1_left cimg={projectimg1} cname="Ecommerce Website" cdescription="I Built an Ecommerce Platform using MERN,It has all the functionalities like Amazon" cvisit="https://www.amazon.in/" ccode="https://www.amazon.in/" />

                <Card2_right cimg={projectimg2} cname="Movie Streaming Platform" cdescription="I Built a Movie Streaming Platform using MERN,It has all the functionalities like Netflix" cvisit="https://www.amazon.in/" ccode="https://www.amazon.in/" />

                <Card1_left cimg={projectimg1} cname="Ecommerce Website" cdescription="I Built an Ecommerce Platform using MERN,It has all the functionalities like amazon" cvisit="/https://www.amazon.in/" ccode="https://www.amazon.in/" />

                <Card2_right cimg={projectimg2} cname="Movie Streaming Platform" cdescription="I Built a Movie Streaming Platform using MERN,It has all the functionalities like Netflix" cvisit="https://www.amazon.in/" ccode="https://www.amazon.in/" />

                {/* <button className={styles.mybtn}>Show All Projects</button> */}
            </div>
        <Homesection5/>
    </div>
  )
}

export default projects