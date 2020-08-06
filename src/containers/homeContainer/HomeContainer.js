import React from 'react'

import styles from './HomeContainer.module.scss'

import HeroSection from '../../components/Home/HeroSection/HeroSection'
import HistoriaSection from '../../components/Home/HistoriaSection/HistoriaSection'
import BannerSection from '../../components/Home/BannerSecction/BannerSection'


function HomeContainer() {
  return (
    <main className={styles.HomeContainer}>
      <HeroSection/>
      <HistoriaSection/>
      <BannerSection/>
    </main> 
  )
}

export default HomeContainer
