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
                <p className={styles.para1}>I am a Backend Software Engineer with over 1.5 years of experience at PayPal and HPE, specializing in building high-throughput distributed microservices and scalable web architectures. I have a proven track record in optimizing system performance, reducing latency by 83%, and driving millions in incremental revenue through robust Java/Spring Boot and Next.js solutions.<br /><br />

                    At PayPal, I architected revenue-critical checkout microservices, led backend compliance for 15+ countries, and orchestrated event-driven payment flows via Kafka. I am passionate about system design, database optimization, and building reliable systems at scale.
                </p>
                <div className={styles.imgcont}>
                    <Image src={aboutimg} layout='responsive' />
                </div>

      </div>
      <div className={styles.details}>
                <div className={styles.detailsleft}>
                    <div className={styles.detailsinner}>
                        <h1>Education</h1>
                        <p><span>(2020 - 2024)</span> Vellore Institute of Technology — Bachelor of Technology in Computer Science (CGPA: 9.15)</p>
                    </div>
                </div>

                <div className={styles.detailsright}>
                    <div className={styles.detailsinner}>
                        <h1>Experience</h1>
                        <p><span>(Oct 2024 - Mar 2026)</span> Software Engineer at PayPal — owned high-concurrency checkout microservices, global expansion across 15+ countries, Kafka event-driven flows, and Next.js performance optimization</p>
                        <p><span>(Mar 2024 - Oct 2024)</span> R&D Intern at Hewlett Packard Enterprise (HPE) — automated kernel ABI validation, CI/CD pipeline engineering, and firmware deployment automation</p>
                    </div>
                </div>

                <div className={styles.detailsleft}>
                    <div className={styles.detailsinner}>
                        <h1>Notable Achievements</h1>
                        <p><span>PayPal Ideathon</span> Secured 2nd Prize for delivering an impactful product solution</p>
                        <p><span>WorldQuant Championship 2023</span> Ranked Global 497 in the WorldQuant International Championship</p>
                        <p><span>Broadridge Hackathon 2023</span> Finalist in the Broadridge India Innovation Hackathon</p>
                        <p><span>Leadership</span> On-boarded 10+ engineers onto PayPal&apos;s revenue-critical systems; served as Class Program Representative at VIT</p>
                    </div>
                </div>

                <div className={styles.detailsright}>
                    <div className={styles.detailsinner}>
                        <h1>My Skills</h1>
                        <p><span>Languages</span> Java, JavaScript (ES6+), Python, C++, SQL, NoSQL</p>
                        <p><span>Backend & Frameworks</span> Spring Boot, Node.js, GraphQL, Microservices, RESTful APIs, React Js, Next.js</p>
                        <p><span>Databases & Infrastructure</span> MySQL, PostgreSQL, MongoDB, Kafka, AWS, Azure, Docker, Jenkins, CI/CD, Datadog</p>
                        <p><span>AI Tools</span> Cursor, GitHub Copilot, GenAI, Claude — agentic development workflows</p>
                    </div>
                </div>
            </div>

            <div className={styles.section1}>
                <h1 className={styles.head2}>To Know More about me</h1>
                <button><a href='https://drive.google.com/file/d/1VhNrXLCKTLfPoaGcnXZeD49LmnNZ9669/view'>Download Resume</a></button>
            </div>
            <Homesection5/>
    </div>
  )
}

export default about
