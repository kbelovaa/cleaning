import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer-section">
    <div className="container">
      <div className="footer">
        <p className="footer__text">Copyright © 2023 Maid for perfection. All rights reserved</p>
        <ul className="footer__links">
          <li>
            <a href="#" className="footer__link">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Cookies
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="footer__link">
              Legal Notice
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
