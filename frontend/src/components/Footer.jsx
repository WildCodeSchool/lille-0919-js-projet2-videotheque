import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li>
          {" "}
          <Link to="/">Contact us</Link>
        </li>
        <li>
          {" "}
          <Link to="/">CGU</Link>
        </li>
        <li>
          {" "}
          <Link to="/">
            <img src="./pictures/twitter.svg" alt="twitter" />
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/">
            <img src="./pictures/copyright.svg" alt="copyright" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;