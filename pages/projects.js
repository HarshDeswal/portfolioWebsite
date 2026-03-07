import Homesection5 from '@/components/Homesection5'
import Navbar from '@/components/Navbar'
import styles from '../styles/Homesection3.module.css'
import projectimg1 from '../media/project/project1.png'
import projectimg2 from '../media/project/project3.png'
import projectimg3 from '../media/project/project2.png'
import projectimg4 from '../media/project/project4.png'
import projectimg5 from '../media/project/project5.png'
import projectimg6 from '../media/project/project6.png'
import projectimg7 from '../media/project/project7.png'
import Card1_left from '@/components/cards/Card1_left'
import Card2_right from '@/components/cards/Card2_right'
import Head from 'next/head'

const projectList = [
  { img: projectimg1, name: 'Denvo Ecommerce Store', description: 'I built it using Next Js for frontend, sanity for CMS and integrated it with stripe payment gateway', visit: 'https://denvo.vercel.app/', code: 'https://github.com/HarshDeswal/ecommerce_Store', techStack: ['Next.js', 'Sanity', 'Stripe'] },
  { img: projectimg2, name: 'Travel Advisor', description: 'I built a travel advisor website using React Js, Material UI, Google Map React, Rapid API', visit: 'https://travellers2.netlify.app/', code: 'https://github.com/HarshDeswal/travel_advisor', techStack: ['React', 'Material UI', 'Google Maps', 'Rapid API'] },
  { img: projectimg3, name: 'Songify-Music Streaming website', description: 'I built it using React Js, Tailwind CSS and RapidAPI', visit: 'https://songify1.vercel.app/', code: 'https://github.com/HarshDeswal/Songify', techStack: ['React', 'Tailwind CSS', 'RapidAPI'] },
  { img: projectimg5, name: 'Audio Visualizer', description: 'We used JavaScript, Bootstrap and p5.js for visual rendering and interaction', visit: 'https://audio-visualizer-345f1.web.app', code: 'https://github.com/Harsh-Nishad/Audio_vizualizer', techStack: ['JavaScript', 'Bootstrap', 'p5.js'] },
  { img: projectimg4, name: 'Talkie - BOT', description: 'I have used JavaScript for frontend, Node.js for backend and used OpenAI APIs for query answering', visit: 'https://talkie-ai-xi.vercel.app/', code: 'https://github.com/HarshDeswal/talkie_AI', techStack: ['JavaScript', 'Node.js', 'OpenAI'] },
  { img: projectimg7, name: 'Brain Tumor Detection', description: "We have used CNN's ResNet50 architecture and deployed using Streamlit", visit: 'https://kanishkaghosh21-brain-tumor-detection-tarp.streamlit.app/', code: 'https://github.com/HarshDeswal/BRAIN-TUMOR-DETECTION-USING-MRI-SCANS', techStack: ['CNN', 'ResNet50', 'Streamlit'] },
  { img: projectimg6, name: 'ICC T20 world cup 2022 Prediction', description: 'We have used Jupyter Notebook, NumPy, Pandas, Seaborn, Matplotlib and scikit-learn library', visit: '#', code: 'https://github.com/HarshDeswal/ICC-T20-world-cup-2022-Prediction', techStack: ['Jupyter', 'Pandas', 'scikit-learn'] },
]

export default function Projects() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <div className={styles.section3outer}>
        <h1 className={styles.sectionTitle}>My Projects</h1>
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
              staggerDelay={i * 0.08}
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
              staggerDelay={i * 0.08}
            />
          )
        )}
      </div>
      <Homesection5 />
    </div>
  )
}
