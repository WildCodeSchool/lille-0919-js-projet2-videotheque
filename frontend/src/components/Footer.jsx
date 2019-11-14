import React from "react";
import { Link } from "react-router-dom";
import "./style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li className="footer-li">
          <Link to="/">Contact us</Link>
        </li>
        <li className="footer-li">
          <Link to="/">Terms of use</Link>
        </li>
        <li className="footer-li">
          <Link to="/">
            <img
              className="twitter"
              src="/pictures/twitter.svg"
              alt="twitter"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
