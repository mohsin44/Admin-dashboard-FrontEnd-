import React from 'react'
import styles from './Button.module.scss'

const Button = ({button_name}) => {
  return (
    <>
    <button className={styles.btn}>{button_name}</button>
    </>
  )
}

export default Button