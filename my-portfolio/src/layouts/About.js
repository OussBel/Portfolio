import React from 'react'

import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about} id='a-propos-de-moi'>
      <h2 className='title'>A Propos de moi</h2>
      <div className={styles.education}>
        <h4 className={styles.course}>
          Formation front end développeur ( autodidacte via les cours en ligne,
          youtube et livres.)
        </h4>
        <div className={styles.year}> 2020 - 2022 </div>
      </div>

      <div className={styles.education}>
        <h4 className={styles.course}>
          Master en Mécanique Numérique - Université de Strasbourg.
        </h4>
        <div className={styles.year}> 2017 - 2020 </div>
      </div>

      <div className={styles.education}>
        <h4 className={styles.course}>
          Master 1 en Aéronautique - Université Saad Dahlab Blida Algérie.
        </h4>
        <div className={styles.year}> 2016 - 2017 </div>
      </div>

      <div className={styles.education}>
        <h4 className={styles.course}>
          Licence en Aéronautique - Université Saad Dahlab Blida Algérie.
        </h4>
        <div className={styles.year}> 2013 - 2016 </div>
      </div>

      <div className={styles.education}>
        <h4 className={styles.course}>Baccalauréat Maths Annaba Algérie </h4>
        <div className={styles.year}> 2012 - 2013</div>
      </div>
    </section>
  )
}

export default About
