import './Header.css';
import React from 'react';
function Header()
{
   return(
     <div className="Header">
      <header className="header">
        <div className="banner">Banners/Header</div>
        <nav>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Login</a></li>
            <li><a href="/">Register</a></li>
            <li><a href="/">Gallery</a></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <div className="contact">Contact</div>
        <div className="main-content">
          {/* Main content goes here */}
        </div>
      </main>

      <footer className="footer">Footer</footer>
    </div> 

   );
}
export default Header;