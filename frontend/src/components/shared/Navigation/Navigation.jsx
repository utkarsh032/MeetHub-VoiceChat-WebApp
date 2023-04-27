import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navigation.module.css'

const Navigation = () => {
  const brandStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  }
  return (
    <nav className={`${styles.navbar} container`}>
      <Link to='/' style={brandStyle}>
        <img src='/images/hello.png' alt='logo' />
        <span>MeetHub</span>
      </Link>
    </nav>
  ) 
}

export default Navigation
