import styles from './Form.module.css'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_gzlq3xt',
        'template_9moeg9i',
        form.current,
        'CquQkQ5kI68ES8w3u'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <label className={styles.label}>Name</label>
      <input type='text' name='user_name' required className={styles.input} />
      <label>Email</label>
      <input type='email' name='user_email' required />
      <label>Subject</label>
      <input type='text' name='user_subject' />
      <label>Message</label>
      <textarea name='message' required />
      <input type='submit' value='Envoyer' />
    </form>
  )
}
