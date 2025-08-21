import React, { Component } from 'react';
import './Footer.css';
import logo from '../../public/logo.png'; // Keep this if you really want it, but see note below

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="Victor Kirui Logo" className="footer-logo" />
          <p className="footer-text">
            <span className="footer-white">Website developed by</span>{' '}
            <span className="footer-name">Victor Kirui</span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
