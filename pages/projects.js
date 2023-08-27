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
                <Card1_left cimg={projectimg1} cname="Denvo Ecommerce Store" cdescription="I built it using Next Js for frontend, sanity for CMS and integrated it with stripe payment gateway" cvisit="https://denvo.vercel.app/" ccode="https://github.com/HarshDeswal/ecommerce_Store"/> 

                <Card2_right cimg={projectimg2} cname="Travel Advisor" cdescription="I built a trave advisor website using React Js, Materil UI, Google Map React,Rapid API" cvisit="https://travellers2.netlify.app/" ccode="https://github.com/HarshDeswal/travel_advisor"/> 

                <Card1_left cimg={projectimg3} cname="Songify-Music Streaming website" cdescription="I built it using React Js,Tailwind CSS and RapidAPI " cvisit="https://songify1.vercel.app/" ccode="https://github.com/HarshDeswal/Songify"/> 

                <Card2_right cimg={projectimg5} cname="Audio Visualizer" cdescription="We used javacript,bootstrap and p5 js for visual rendering and interaction" cvisit="https://audio-visualizer-345f1.web.app" ccode="https://github.com/Harsh-Nishad/Audio_vizualizer" />

                <Card1_left cimg={projectimg4} cname="Talkie - BOT" cdescription="I have used javascipt for frontend,nodejs for backend and used OpenAI APIs for query answering" cvisit="https://talkie-ai-xi.vercel.app/" ccode="https://github.com/HarshDeswal/talkie_AI" />

                <Card2_right cimg={projectimg7} cname="Brain Tumor Detection" cdescription="We have used CNN's ResNet50 architecture and deployed using Streamlit" cvisit="https://kanishkaghosh21-brain-tumor-detection-tarp.streamlit.app/" ccode="https://github.com/HarshDeswal/BRAIN-TUMOR-DETECTION-USING-MRI-SCANS" />

                <Card1_left cimg={projectimg6} cname="ICC T20 world cup 2022 Prediction" cdescription="We have used Jupter Notebook, numpy, Pandas,Seaborn, Matplotlib and scikit Learn library" cvisit="https://medium.com/@harshdeswal81/prediction-of-icc-t20-wcc-2022-winner-be0970d5b58b" ccode="https://github.com/HarshDeswal/ICC-T20-world-cup-2022-Prediction" />
                

                

                {/* <button className={styles.mybtn}>Show All Projects</button> */}
            </div>
        <Homesection5/>
    </div>
  )
}

export default projects
