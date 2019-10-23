import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li a href="">
          Contact us
        </li>
        <li a href="">
          CGU
        </li>
        <li a href="">
          <img src="./pictures/twitter.svg" alt="twitter" />
        </li>
        <li a href="">
          <img src="./pictures/copyright.svg" alt="copyright" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
