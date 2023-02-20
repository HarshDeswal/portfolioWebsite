import contactpic from '../media/contactuspic.png'
import styles from '../styles/Contact.module.css'
import Image from 'next/legacy/image'
import Navbar from '@/components/Navbar'
import Homesection5 from '@/components/Homesection5'
import emailjs from '@emailjs/browser'

const contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3tibkl', 'template_dtwo6jj', e.target, 'c4764iGvPUUElUqPs')
      .then((result) => {
          alert('Message sent successfully');
          e.target.reset()
      }, (error) => {
          alert(error.text);
      });
  }
  return (
    <div>
      <Navbar/>
      <div className={styles.contact_outer}>
        <div className={styles.contact_inner}>
          <p>Contact Me</p>
          <div className={styles.contact_innermost}>
            <div className={styles.img}>
              <Image src={contactpic} layout='responsive'/>
            </div>
            <form onSubmit={sendEmail}>
              <p>Get in touch</p>
              <input placeholder='Name' name='user_name'/>
              <input placeholder='Email' name='user_email' />
              <textarea placeholder='Message' name='message' />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Homesection5/>
    </div>
  )
}

export default contact