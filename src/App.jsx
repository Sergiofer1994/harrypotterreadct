import { useState } from 'react'
import './app.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Fetchcard from './components/Fetchcard/Fetchcard.jsx'

function App() {
  return (
    <>
      <Header />
      <Fetchcard />
      <Footer/>
      
    </>
  )
}


export default App