import React from 'react'

import styles from './NavigationItems.module.scss'

function NavigationItems(props) {

  return (
    <nav>
      <ul className={styles.NavigationItems}>
        <li>inicio</li>
        <li>Acerca de nosotros</li>
        <li>Historia</li>
        <li>Contacto</li>
      </ul>
    </nav>
  )
}

export default NavigationItems
