import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Layout from './layouts/Layout'

import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className={styles.page}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="Products" element={<Products />} />
              <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App