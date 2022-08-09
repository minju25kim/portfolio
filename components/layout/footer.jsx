import { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

function Footer() {
  return (
    <footer>
      <a href="#" className="back">
        <BiArrowToTop size="50" />
        <span>Back to top</span>
      </a>
      <a
        href="https://github.com/minju25kim/portfolio"
        target="_blank"
        className="portfolio"
      >
        Built & Designed by Minju Kim
      </a>
    </footer>
  );
}

export default Footer;
