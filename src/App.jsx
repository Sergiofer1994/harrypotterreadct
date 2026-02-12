import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'  // Corregí mayúscula
import Fetchcard from './components/Fetchcard/Fetchcard.jsx'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1>App cargada correctamente</h1>
      <Header />
      <Fetchcard />
      <Footer />
    </div>
  )
}

export default App