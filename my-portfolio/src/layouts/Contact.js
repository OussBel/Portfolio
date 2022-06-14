import React from 'react'

import { ContactUs } from '../components/Form'
import styles from './Contact.module.css'

import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
      <h2 className='title'>Contact</h2>
      <p className={styles.phone}>
        <PhoneIcon fontSize='large' style={{ marginRight: '1.5rem' }} /> +33 7
        52 04 70 26
      </p>
      <p className={styles.email}>
        <EmailIcon style={{ marginRight: '1.5rem' }} fontSize='large' />
        oussamabelfarhi@gmail.com
      </p>
      <ContactUs />
    </section>
  )
}

export default Contact
