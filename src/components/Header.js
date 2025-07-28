import React, {useState} from 'react';
import '@styles/Header.css';
import { NavLink } from 'react-router-dom';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className='navbar-logo'> 🌸 Fleurora Shop </div>

      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✖' : '☰'}
      </div>
      <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/search" className="nav-link" onClick={() => setMenuOpen(false)}>search</NavLink>
        <NavLink to="/help" className="nav-link" onClick={() => setMenuOpen(false)}>Help</NavLink>
        <NavLink to="/signin" className="nav-link" onClick={() => setMenuOpen(false)}>Sign In</NavLink>
      </nav>
    </header>
  );
}

