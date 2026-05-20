import React from 'react'
import styles from "../style/Contact.module.css"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      

      <div className={styles.content}>
  <h1 className={styles.heading1}>Get In Touch</h1>
  <p className={styles.contactText}>
    Let's connect and build something amazing 🚀
  </p>

  <div className={styles.contactLinks}>

    <a href="mailto:jadondigvijay9926@gmail.com" className={styles.contactCard}>
      <FaEnvelope className={styles.icon}/> 
      <span>Email</span>
    </a>

    <a href="tel:+919926282467" className={styles.contactCard}>
      <FaPhone className={styles.icon}/> 
      <span>Phone</span>
    </a>

    <a href="https://github.com/digvijay-singh9926" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
      <FaGithub className={styles.icon}/> 
      <span>GitHub</span>
    </a>

    <a href="https://www.linkedin.com/in/digvijay-singh-367101312/" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
      <FaLinkedin className={styles.icon}/> 
      <span>LinkedIn</span>
    </a>

    {/* <a href="https:" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
      <FaTwitter className={styles.icon}/> 
      <span>Twitter</span>
    </a> */}

  </div>
</div>
    </div>
  )
}