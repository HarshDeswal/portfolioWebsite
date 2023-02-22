import styles from '../styles/Homesection3.module.css'
import projectimg3 from '../media/project/proj3.png'
import projectimg4 from '../media/project/proj4.png'
import projectimg5 from '../media/project/proj5.png'
import projectimg6 from '../media/project/proj6.png'
import Card1_left from './cards/Card1_left'
import Card2_right from './cards/Card2_right'
import Link from 'next/link'
const Homesection3 = () => {
  return (
    <div className={styles.section3outer}>
        <h1>My Top Projects</h1>
        <Card1_left cimg={projectimg3} cname="ICC T20 WCC 2022 Prediction" cdescription="Predicted the winner of World cup using machine learning with 90% correct results" cvisit="https://medium.com/@harshdeswal81/prediction-of-icc-t20-wcc-2022-winner-be0970d5b58b" ccode="https://github.com/HarshDeswal/ICC-T20-world-cup-2022-Prediction"/> 

        <Card2_right cimg={projectimg4} cname="Brain Tumor Detection" cdescription="build using CNN. We used ResNet50. Deployed the model using Streamlit" cvisit="https://cse3505-mri-classifier.streamlit.app/" ccode="https://cse3505-mri-classifier.streamlit.app/"/> 

        <Card1_left cimg={projectimg5} cname="Audio Visualizer" cdescription="Built a real time audio visulaizer using P5.js" cvisit="https://audio-visualizer-345f1.web.app/" ccode="https://github.com/Harsh-Nishad/Audio_vizualizer"/> 

        <Card2_right cimg={projectimg6} cname="Catalog Mobile App" cdescription="Built the UI catalog mobile app using flutter" cvisit="#" ccode="https://github.com/HarshDeswal/Catalog-App"/> 

        <Link href="/projects">
        <button className={styles.mybtn}>Show All Projects</button>
        </Link>
    </div>
  )
}

export default Homesection3
