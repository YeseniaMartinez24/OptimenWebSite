import React from "react";
import "../css/footer.css";
import {  FormattedMessage } from "react-intl";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading"><FormattedMessage id="footer.enla" defaultMessage="Helpful Links"/></h3>
          <ul className="footer-list">
            <li>
              <a href="https://optimen.com.mx/securitypolicy/en">
              <FormattedMessage id="footer.poli" defaultMessage="Política de privacidad"/>
              </a>
            </li>
            <li>
              <a href="/Contact-Us"><FormattedMessage id="footer.cont" defaultMessage="contact"/></a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading"><FormattedMessage id="footer.sig" defaultMessage="follow us"/></h3>
          <ul className="footer-list">
            <li>
              <a href="https://www.facebook.com/optimen.mx/">Facebook</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/optimen-sc">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
        <FormattedMessage id="footer.derechos" defaultMessage="© 2023 Optimen SA de CV. All rights reserved..."/>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
