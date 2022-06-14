import React from 'react'

import styles from './Skills.module.css'

import { skillSet } from '../data'
import Skill from '../components/Skill'

const Skills = () => {
  return (
    <section className={styles.skills} id='compétences'>
      <h2 className='title'>Compétences</h2>
      <div className={styles.bigContainer}>
        {skillSet.map((item) => (
          <Skill key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Skills
