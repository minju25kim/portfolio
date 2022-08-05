import { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import cv from "../assets/cv.svg"

function Footer() {
  return (
    <footer>
      <div className="social">
        <a href="https://github.com/minju25kim" target="_blank">
          <FaGithub size="50" />
        </a>
        <a href="https://www.linkedin.com/in/minju-kim-minju/" target="_blank">
          <FaLinkedin size="50" />
        </a>
        <a href="/minju_kim_cv.pdf" target="_blank" >
          <img src={cv} />
        </a>
        <a href="https://twitter.com/minju25kim" target="_blank">
          <FaTwitter size="50" />
        </a>
      </div>
      <a href="#" className="back">
        <BiArrowToTop size="50" />
        <span>Back to top</span>
      </a>
    </footer>
  );
}

export default Footer;
