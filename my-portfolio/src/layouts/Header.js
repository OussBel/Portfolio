import React, { useRef, useState, useEffect, useMemo } from 'react'

import styles from './Header.module.css'

import GitHubIcon from '@mui/icons-material/GitHub'
import { LinkedIn } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'

const Header = () => {
  const bgRef = useRef()
  const targetRef = useRef()
  const [listIsShown, setListIsShown] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const clickHandler = () => {
    bgRef.current.classList.toggle('listBackground-visible')
    setListIsShown((currentState) => !currentState)
  }

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }
  }, [])

  const callback = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    const currentTarget = targetRef.current
    if (currentTarget) observer.observe(currentTarget)

    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [options])

  const nav = !isVisible ? `${styles.navFixed}` : `${styles.nav}`

  return (
    <header className={styles.header} ref={targetRef}>
      <div className={styles.container}>
        <nav className={nav}>
          <h2 className={styles['my-name']}>Oussama Belfarhi</h2>
          <button onClick={clickHandler}>
            {listIsShown ? (
              <CloseIcon
                style={{
                  fontSize: '6rem',
                  color: 'var(--color-grey-light-2)',
                }}
              />
            ) : (
              <span className={styles.hamburgerBar}></span>
            )}
          </button>
          <div className='listBackground' ref={bgRef}></div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href='#projets' className={styles.link}>
                Projets
              </a>
            </li>
            <li className={styles.item}>
              <a href='#compétences' className={styles.link}>
                Compétences
              </a>
            </li>
            <li className={styles.item}>
              <a href='#a-propos-de-moi' className={styles.link}>
                A propos de moi
              </a>
            </li>
            <li className={styles.item}>
              <a href='#contact' className={styles.link}>
                Contact
              </a>
            </li>
          </ul>
          {listIsShown && (
            <ul className={styles.mobileList}>
              <li className={styles.mobileItem} onClick={clickHandler}>
                <a href='#projets' className={styles.mobileLink}>
                  Projets
                </a>
              </li>
              <li className={styles.mobileItem} onClick={clickHandler}>
                <a href='#compétences' className={styles.mobileLink}>
                  Compétences
                </a>
              </li>
              <li className={styles.mobileItem} onClick={clickHandler}>
                <a href='#a-propos-de-moi' className={styles.mobileLink}>
                  A propos de moi
                </a>
              </li>
              <li className={styles.mobileItem}>
                <a
                  href='#contact'
                  className={styles.mobileLink}
                  onClick={clickHandler}
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </nav>

        <div className={styles.presentation}>
          <div className={styles.leftSide}>
            <h1 className={styles.name}>Salut, Je Suis Oussama.</h1>
            <p className={styles.description}>
              Développeur front end autodidacte spécialisé en Html, Css,
              JavaScript et React.js.
              <br />
              <br />
              Je Suis à la recherche de missions freelances ( mobilité: Toute la
              France).
            </p>
            <div className={styles['icons-box']}>
              <a
                href='https://github.com/OussBel'
                className={styles['icon-link']}
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon
                  style={{
                    fontSize: '3rem',
                  }}
                />
              </a>
              <a
                href='https://www.linkedin.com/in/oussama-belfarhi-6a04641a0'
                target='_blank'
                rel='noreferrer'
                className={styles['icon-link']}
              >
                <LinkedIn style={{ fontSize: '3rem', marginLeft: '2.5rem' }} />
              </a>
            </div>
            <a href='#contact' className={styles.btn}>
              Contact
            </a>
          </div>

          <div className={styles.rightSide}>
            <h2 className={styles.skills}>Ce que je maitrise :</h2>

            <div className={styles['dev-icons']}>
              <i className='devicon-html5-plain-wordmark'></i>
              <i className='devicon-css3-plain-wordmark'></i>
              <i className='devicon-sass-original'></i>
              <i className='devicon-bootstrap-plain-wordmark'></i>
              <i className='devicon-tailwindcss-original-wordmark'></i>
              <i className='devicon-javascript-plain'></i>
              <i className='devicon-react-original-wordmark'></i>
              <i className='devicon-redux-original'></i>
              <i className='devicon-nextjs-original-wordmark'></i>
              <i className='devicon-nodejs-plain-wordmark'></i>
              <i className='devicon-express-original-wordmark'></i>
              <i className='devicon-jest-plain'></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
