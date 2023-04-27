import React from 'react'
import styles from './Button.module.css'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <img src='/images/right-arrow.png' alt='arrow' />
    </button>
  )
}

export default Button
