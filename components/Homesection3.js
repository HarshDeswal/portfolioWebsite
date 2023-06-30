import styles from '../styles/Homesection3.module.css'
import projectimg1 from '../media/project/project1.png'
import projectimg2 from '../media/project/project2.png'
import projectimg3 from '../media/project/project3.png'

import Card1_left from './cards/Card1_left'
import Card2_right from './cards/Card2_right'
import Link from 'next/link'
const Homesection3 = () => {
  return (
    <div className={styles.section3outer}>
        <h1>My Top Projects</h1>
        <Card1_left cimg={projectimg1} cname="Denvo Ecommerce Store" cdescription="I built it using Next Js for frontend, sanity for CMS and integrated it with stripe payment gateway" cvisit="https://denvo.vercel.app/" ccode="https://github.com/HarshDeswal/ecommerce_Store"/>

        <Card2_right cimg={projectimg3} cname="Travel Advisor" cdescription="I built a trave advisor website using React Js, Materil UI, Google Map React,Rapid API" cvisit="https://travellers2.netlify.app/" ccode="https://github.com/HarshDeswal/travel_advisor"/> 

        <Card1_left cimg={projectimg2} cname="Songify-Music Streaming website" cdescription="I built it using React Js,Tailwind CSS and RapidAPI " cvisit="https://songify1.vercel.app/" ccode="https://github.com/HarshDeswal/Songify"/> 

        <Link href="/projects">
        <button className={styles.mybtn}>Show All Projects</button>
        </Link>
    </div>
  )
}

export default Homesection3
