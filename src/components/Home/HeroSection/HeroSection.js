import React from 'react'

import styles from './HeroSection.module.scss'

function HeroSection() {
  return (
    <section className={styles.HeroSection}>
      <div>
        <p>Este es el sidebar</p>
      </div>
      <div>
        <nav>Este sera el nav</nav>
      </div>
      <div className={styles.heroContent}>
        <h1>
          Las mejores raquetas para jugar <span>Tennis</span>
        </h1>
      </div>
    </section>
  )
}

export default HeroSection
