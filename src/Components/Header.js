import React from 'react'

function Header() {
  return (
    <header>
      <div className="navbar-logo">De Gruyter ISBN Search</div>
      <nav className="navbar-end">
        <ul>
          <li><a href="#">Impressum</a></li>
          <li>|</li>
          <li><a href="#">Cookies</a></li>
          <li>|</li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
