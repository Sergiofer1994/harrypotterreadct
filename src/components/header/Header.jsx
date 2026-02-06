import React from 'react'
import './Header.css'
function Header() {
  return (
    <header className="site-header" id="siteHeader">
      <div className="header-container">
        <a className="brand" href="index.html" aria-label="Ir a inicio">
          <img
            className="brand-logo"
            src="public\img\logoHarryPotter.png"
            alt="Harry Potter"
          />
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-controls="site-nav"
          aria-expanded="false"
          id="navToggle"
        >
          <span className="nav-toggle-line"></span>
          <span className="nav-toggle-line"></span>
          <span className="nav-toggle-line"></span>
        </button>

        <nav className="site-nav" id="site-nav">
          <a className="nav-link" href="#characters">Personajes</a>
          <a className="nav-link" href="#header-container">Filtros</a>
          <a className="nav-link" href="#about">Sobre la API</a>
        </nav>
      </div>
    </header>
  )
}

export default Header