import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'

import styles from './Toolbar.module.scss'

function Toolbar(props) {
  return (
    <header className={styles.Toolbar}>
      <NavigationItems/>
    </header>
  )
}

export default Toolbar
