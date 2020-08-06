import React from 'react'

import styles from './Footer.module.scss'

import fill from '../../assets/img/Home/fill-2.png'
import fill2 from '../../assets/img/Home/fill-2@2x.png'
import fill3 from '../../assets/img/Home/fill-2@3x.png'

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className="footer-nav">
        <div>
          <span>
            crear el nav component
          </span>
        </div>
        <div>
          <span>
            y las redes
          </span>
        </div>
      </div>
      <div className={styles.Ball}>
        <img src={fill}
          srcSet={fill2,fill3}
          className={styles.Fill} alt="Ball">
        </img>
      </div>
    </footer>
  )
}

export default Footer
