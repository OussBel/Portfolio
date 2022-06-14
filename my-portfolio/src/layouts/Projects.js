import React from 'react'
import Card from '../components/Card'
import styles from './Projects.module.css'
import projects from '../data.js'

const Section = () => {
  return (
    <section className={styles.projects} id='projets'>
      <h2 className='title'>Projets</h2>
      <div className={styles.cardContainer}>
        {projects.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Section
