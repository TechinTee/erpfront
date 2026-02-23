import styles from './App.module.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.content}>

      </main>
    </div>

  )
}

export default App