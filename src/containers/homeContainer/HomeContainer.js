import React from 'react'

import styles from './HomeContainer.module.scss'

import HeroSection from '../../components/Home/HeroSection/HeroSection'
import HistoriaSection from '../../components/Home/HistoriaSection/HistoriaSection'
import BannerSection from '../../components/Home/BannerSecction/BannerSection'
import Footer from '../../components/Footer/Footer'
import CarouselSection from '../../components/Home/CarouselSection/CarouselSection'

function HomeContainer() {
  return (
    <main className={styles.HomeContainer}>
      <HeroSection/>
      <HistoriaSection/>
      <CarouselSection/>
      <BannerSection/>
      <Footer/>
    </main> 
  )
}

export default HomeContainer
