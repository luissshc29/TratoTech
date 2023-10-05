import React from 'react'
import styles from './PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom'
import NavBar from 'Components/NavBar'
import Footer from 'Components/Footer'

export default function PaginaPadrao() {
  return (
    <div className={styles.container}>
        <NavBar/>
        <div className={styles['container-outlet']}>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
