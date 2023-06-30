import Navbar from "@/components/Navbar"
import Image from "next/legacy/image"
import styles from '../styles/About.module.css'
import aboutimg from '../media/about-img.png'
import Head from "next/head"
import Homesection5 from "@/components/Homesection5"
const about = () => {
  return (
    <div className={styles.aboutoutermost}>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar/>
      <div className={styles.section1}>
      <h1 className={styles.head1}>About Me</h1>
                <p className={styles.para1}>I love building webpages & apps, I enjoy learning new stuff everyday and my main achievements are my skills which I got by building projects & solving bugs. I am also a programmer & I am still improving myself in this field, my main focus is Data Structures & Algorithms.<br /><br />

                    I did many internships related to application development at XciteEducation Worldwide. Apart from that I have been part of data analytics club also and headed various projects also.
                </p>
                <div className={styles.imgcont}>
                    <Image src={aboutimg} layout='responsive' />
                </div>

      </div>
      <div className={styles.details}>
                <div className={styles.detailsleft}>
                    <div className={styles.detailsinner}>
                        <h1>Education</h1>
                        <p><span>(2008-2020)</span> Kendriya Vidyalaya ( 10th : 93.4% and 12th : 94.0%  )</p>
                        <p><span>(2020-2024)</span> Vellore Institute of Technology (Btech in CSE with CPS with 9.06 CGPA)</p>
                    </div>
                </div>

                <div className={styles.detailsright}>
                    <div className={styles.detailsinner}>
                        <h1>Experience & Hackathons</h1>
                        <p><span>(2021 - 2022)</span> Core member of Data Analytics club</p>
                        <p><span>(2022 (Oct - Dec))</span> Application Developer at XciteEducation Worldwide</p>
                        <p><span>(2023 (April))</span> Got 282nd position in Amazon ML Challenge 2023 out of 5000 teams </p>
                        <p><span>(2023 - till date)</span> Shortlisted for Prototype phase in Broadridge India Innovation Hackathon 2023</p>
                    </div>
                </div>

                <div className={styles.detailsleft}>
                    <div className={styles.detailsinner}>
                        <h1>My Skills</h1>
                        <p><span>Programming in</span> C, C++, Python & Javascript</p>
                        <p><span>Comptitive Programming with</span> DSA in C/C++ </p>
                        <p><span>Web Development in</span> Next Js, React Js, SQL, MongoDB, Sanity, Tailwind CSS</p>
                    </div>
                </div>
            </div>

            <div className={styles.section1}>
                <h1 className={styles.head2}>To Know More about me</h1>
                <button><a href='#'>Download Resume</a></button>
            </div>
            <Homesection5/>
    </div>
  )
}

export default about