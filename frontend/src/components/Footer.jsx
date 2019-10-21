import React from "react";
import "./Footer.css";
import Twitter from "./twitter.svg";
import Copyright from "./copyright.svg";

function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li a href="contact_us">
          Contact us
        </li>
        <li a href="cgu">
          CGU
        </li>
        <li a href="twitter">
          <img src={Twitter} />
        </li>
        <li a href="copyright">
          <img src={Copyright} />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
