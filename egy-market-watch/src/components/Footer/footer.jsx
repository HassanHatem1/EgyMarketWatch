import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="company-info">
          <h3>EgyMarketWatch</h3>
          <p>Your premier source for real-time news, market insights, and analysis, empowering your investment decisions.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>123 Street, City</p>
          <p>+1 234 567 890</p>
          <p>email@example.com</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="http://facebook.com">Facebook</a>
          <a href="http://twitter.com">Twitter</a>
          <a href="http://instagram.com">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Privacy Policy | Terms of Use</p>
        <p>&copy; {new Date().getFullYear()} EgyMarketWatch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;