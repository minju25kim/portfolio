import { useState } from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import cv from "./assets/cv.svg";

function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const value = "minju25kim@gamil.com";
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div>
        Send email to{" "}
        <a target="_blank" href="mailto:minju25kim@gmail.com">
          minju25kim@gmail.com
        </a>
        {copied ? <span>Copied!</span> : null}
        {copied ? null : (
          <HiOutlineClipboardCopy size="30" onClick={handleCopy} />
        )}
      </div>
      <div className="social">
        <a href="https://github.com/minju25kim" target="_blank">
          <FaGithub size="50" />
        </a>
        <a href="https://www.linkedin.com/in/minju-kim-minju/" target="_blank">
          <FaLinkedin size="50" />
        </a>
        <a href="/minju_kim_cv.pdf" target="_blank">
          <img src={cv} />
        </a>
        <a href="https://twitter.com/minju25kim" target="_blank">
          <FaTwitter size="50" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
