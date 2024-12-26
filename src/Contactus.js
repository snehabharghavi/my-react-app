import './Contactus';
import React from 'react';

function Contactus() {
  return (
    <div className="contact-us">
      <h1>Get in Touch</h1>
      <form>
        <label>Name:</label>
        <input type="text" /><br /><br />
        <label>Email:</label>
        <input type="email" /><br /><br />
        <label>Message:</label>
        <textarea></textarea><br /><br />
        <button>Send</button>
      </form>
      <address>
        Sneha Restaurant<br />
        Address: 1-1-1, Near Rama Temple, Kavali, Nellore District, Andhra Pradesh - 524201<br />
        Phone: +91 8612 345678<br />
        Email: <a href="mailto:info@sneharestaurant.com">info@sneharestaurant.com</a>
      </address>
    </div>
  );
}

export default Contactus;
