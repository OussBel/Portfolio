import React from 'react'

import styles from '../layouts/Skills.module.css'

const Skill = ({ item }) => {
  const background = `${item.level ? styles.bg : styles.background}`

  return (
    <div className={styles.container}>
      <p className={styles.language}>{item.language}</p>
      <div className={styles.box}>
        <span className={background}></span>
        <span className={background}></span>
        <span className={background}></span>
        <span className={background}></span>
      </div>
    </div>
  )
}

export default Skill
