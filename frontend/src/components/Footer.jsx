import React from "react";
import { Link } from "react-router-dom";
import "./style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/">Contact us</Link>
        </li>
        <li>
          <Link to="/">Terms of use</Link>
        </li>
        <li>
          <Link to="/">
            <img src="./pictures/twitter.svg" alt="twitter" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img
              className="copyright"
              src="./pictures/copyright.svg"
              alt="copyright"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
