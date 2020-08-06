import React from 'react'

import styles from './BannerSection.module.scss'

import banner1 from '../../../assets/img/Home/action-athlete-ball-342361.jpg'
import banner2 from '../../../assets/img/Home/action-athlete-ball-342361@2x.jpg'
import banner3 from '../../../assets/img/Home/action-athlete-ball-342361@3x.jpg'

function BannerSection() {
  return (
    <section className={styles.BannerSection}>
      <div className={styles.bannerContainer}>
        <img src={banner1}
          srcset={banner2,banner3}     
          className={styles.actionA}></img>
      </div>
    </section>
  )
}

export default BannerSection
