import React from "react";
import "./Footer.css";

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
          <img src="./pictures/twitter.svg" />
        </li>
        <li a href="copyright">
          <img src="./pictures/copyright.svg" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
