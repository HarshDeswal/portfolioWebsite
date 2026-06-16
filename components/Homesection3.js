import styles from '../styles/Homesection3.module.css'
import projectimg1 from '../media/project/project1.png'
import projectimg2 from '../media/project/project2.png'
import projectimg3 from '../media/project/project3.png'
import Card1_left from './cards/Card1_left'
import Card2_right from './cards/Card2_right'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

const projectList = [
  {
    img: projectimg1,
    name: 'Denvo Ecommerce Store',
    description: 'I built it using Next Js for frontend, sanity for CMS and integrated it with stripe payment gateway',
    visit: 'https://denvo.vercel.app/',
    code: 'https://github.com/HarshDeswal/ecommerce_Store',
    techStack: ['Next.js', 'Sanity', 'Stripe'],
  },
  {
    img: projectimg3,
    name: 'Travel Advisor',
    description: 'I built a travel advisor website using React Js, Material UI, Google Map React, Rapid API',
    visit: 'https://travellers2.netlify.app/',
    code: 'https://github.com/HarshDeswal/travel_advisor',
    techStack: ['React', 'Material UI', 'Google Maps', 'Rapid API'],
  },
  {
    img: projectimg2,
    name: 'Songify-Music Streaming website',
    description: 'I built it using React Js, Tailwind CSS and RapidAPI',
    visit: 'https://songify1.vercel.app/',
    code: 'https://github.com/HarshDeswal/Songify',
    techStack: ['React', 'Tailwind CSS', 'RapidAPI'],
  },
]

export default function Homesection3() {
  return (
    <AnimatedSection className={styles.section3outer} delayOrder={0}>
      <h1 className={styles.sectionTitle}>My Top Projects</h1>
      {projectList.map((proj, i) =>
        i % 2 === 0 ? (
          <Card1_left
            key={proj.name}
            cimg={proj.img}
            cname={proj.name}
            cdescription={proj.description}
            cvisit={proj.visit}
            ccode={proj.code}
            techStack={proj.techStack}
            staggerDelay={i * 0.1}
          />
        ) : (
          <Card2_right
            key={proj.name}
            cimg={proj.img}
            cname={proj.name}
            cdescription={proj.description}
            cvisit={proj.visit}
            ccode={proj.code}
            techStack={proj.techStack}
            staggerDelay={i * 0.1}
          />
        )
      )}
      <div className={styles.ctaWrap}>
        <Link href="/projects" className={styles.mybtn}>
          Show All Projects
        </Link>
      </div>
    </AnimatedSection>
  )
}
