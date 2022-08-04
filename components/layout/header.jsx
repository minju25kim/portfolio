import { useState } from "react";

function Header() {
  return (
    <header>
      <ul>
        <a href="#" target="_blank" className="logo">
          <img src="/minju-kim.svg" alt="Minju Kim logo" />
        </a>
        <div className="nav">
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="cv" target="_blank">
              CV
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
    </header>
  );
}

export default Header;
