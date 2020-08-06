import React from 'react'

import styles from './HomeContainer.module.scss'

import HeroSection from '../../components/Home/HeroSection/HeroSection'
import HistoriaSection from '../../components/Home/HistoriaSection/HistoriaSection'


function HomeContainer() {
  return (
    <main className={styles.HomeContainer}>
      <HeroSection/>
      <HistoriaSection/>
    </main> 
  )
}

export default HomeContainer
