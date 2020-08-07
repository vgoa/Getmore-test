import React from 'react'

import styles from './CarouselSection.module.scss'

import CarouselText from './CarouselText/CarouselText'

function CarouselSection() {
  return (
    <section className={styles.CarouselSection}>
      <CarouselText/>
    </section>
  )
}

export default CarouselSection
