import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footerHarryPotter">
      <div className="footerContent">
        <p>&copy; 2024 Harry Pother. All rights reserved.</p>
        <p>
          Información obtenida de
          <a href="https://hp-api.onrender.com">aquí</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;