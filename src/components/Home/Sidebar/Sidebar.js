import React from 'react'

import styles from './Sidebar.module.scss'

import fill from '../../../assets/img/Home/fill-2.png'
import fill2 from '../../../assets/img/Home/fill-2@2x.png'

function Sidebar(props) {
  return (
    <>
      <div className={styles.Ball}>
      <img src={fill}
        srcSet={fill2}
        className={styles.Fill} alt="Ball">
      </img>
      </div>
    </>
  )
}

export default Sidebar
