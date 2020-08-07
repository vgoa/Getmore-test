import React from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Toolbar from '../../Navigation/Toolbar/Toolbar' 

import styles from './HeroSection.module.scss'

function HeroSection() {
  return (
    <section className={styles.HeroSection}>
      <Sidebar/>
      <Toolbar/>
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
