import React from 'react'

import styles from './Card.module.css'

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.img} alt='Projet' className={styles.img} />
      <div className={styles.details}>
        <p className={styles.description}>{item.desc}</p>
        <span className={styles.languages}>{item.languages} </span>
        <span className={styles.names}>{item.text}</span>
        <div className={styles.links}>
          <a
            href={item.demolink}
            target='_blank'
            rel='noreferrer'
            className={styles.link}
          >
            Visitez le site
          </a>
          <a
            href={item.codeLink}
            target='_blank'
            rel='noreferrer'
            className={styles.link}
          >
            Voir le code
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
