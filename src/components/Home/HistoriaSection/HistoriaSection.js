import React from 'react'

import styles from './HistoriaSection.module.scss'

function HistoriaSection() {
  return (
    <section className={styles.historiaSection}>
      <div className={styles.historiaTitle}>
        <p>Raquetas.Accesorios. Pelotas.</p>
        <div className={styles.historiaCategoria}>
        <span>TENNIS</span>
      </div>
      </div>
      <div className={styles.historiaLeyenda}>
        <span>Conoce nuestras raquetas y aprende a jugar tennis como un profesional</span>
      </div>
      <div className={styles.historiaButton}>
        <span>historia</span>
      </div>
    </section>      
  )
}

export default HistoriaSection
