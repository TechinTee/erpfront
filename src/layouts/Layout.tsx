import { Outlet } from 'react-router-dom'
import styles from '../styles/Layout.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout() {
  return (
    <>
      <div className={styles.layout}>
        <Navbar />
        <main className={styles.content}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout