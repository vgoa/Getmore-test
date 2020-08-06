import React from 'react'

import Sidebar from '../Sidebar/Sidebar'

import styles from './HeroSection.module.scss'

function HeroSection() {
  return (
    <section className={styles.HeroSection}>
      <Sidebar/>
      <div>
        <nav>Este sera el nav</nav>
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Las mejores raquetas para jugar <span>Tennis</span>
        </h1>
        <div className={styles.heroButton}>
        <span>
          acerca de nosotros
        </span>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
