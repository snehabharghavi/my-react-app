import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom"

import "./Page.css";
import About from "./About";
import Starter from "./Starter";
import Enter from "./Enter";
import Register from "./Register";
import Gallery from "./Gallery";


function Page() {
  return (
    <Router>
      <div class="Page">
        <header className="header">
          <h1>Banners/Header</h1>
    
          <nav>
              <ul className="nav">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/starter">Starter</Link></li>
              <li><Link to="/enter">Enter</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <aside className="contact">
            <h2>Contact</h2>
            <p>Contact information goes here.</p>
            <p>Email:<a href="mailto:info@harshatrainings.com">info@harshatrainings.com</a></p>
            <p>Phone: +91 9876543210 </p>
            <p> Address: Harsha Trainings, Hyderabad,India</p>
          </aside>
          <main className="main-content">
            <Routes>
            <Route path='/about' element={<About></About>}>
          </Route>
          <Route path='/starter' element={<Starter></Starter>}>
          </Route>
          <Route path='/enter' element={<Enter></Enter>}>
          </Route>
          <Route path='/register' element={<Register></Register>}>
          </Route>
          <Route path='/gallery' element={<Gallery></Gallery>}>
          </Route>
            </Routes>
            
            
          </main>
        </div>
        <footer className="footer">
        <p>&copy; 2024 Harsha Trainings. All Rights Reserved.</p>

        </footer>
      </div>
      </Router>
  );
}

export default Page;