import React from 'react'

import styles from './HomeContainer.module.scss'

import HeroSection from '../../components/Home/HeroSection/HeroSection'

function HomeContainer() {
  return (
    <main className={styles.HomeContainer}>
      <HeroSection/>
    </main> 
  )
}

export default HomeContainer
