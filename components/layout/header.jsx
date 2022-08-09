import { useState } from "react";
import { FcDocument } from "react-icons/fc";

function Header() {
  return (
    <header>
      <a href="#" className="logo">
        <img src="/minju-kim.svg" alt="Minju Kim logo" />
      </a>
      <ul className="nav">
        <li>
          <a href="#project" className="navPrj">
            Project
          </a>
        </li>
        <li>
          <a href="/minju_kim_cv.pdf" target="_blank" className="cv">
            <FcDocument size="20" />
            <span>CV</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="navCon">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
