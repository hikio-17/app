import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 data-testid="footer-brand-name">Men Parfume</h3>
            <p data-testid="footer-tagline">Wangi Yang Berkarakter</p>
          </div>
          <div className="footer-contact">
            <h4>Hubungi Kami</h4>
            <p data-testid="footer-whatsapp">
              <i className="fab fa-whatsapp"></i> 0877-7808-6123
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p data-testid="footer-copyright">&copy; 2025 Men Parfume. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
