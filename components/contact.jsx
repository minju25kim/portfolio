import { useState } from "react";
import {HiOutlineClipboardCopy} from "react-icons/hi"

function Contact() {

  function handleCopy() {
    const value= "minju25kim@gamil.com"
    navigator.clipboard.writeText(value);
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div>
        Send email to{" "}
        <a target="_blank" href="mailto:minju25kim@gmail.com">
          minju25kim@gmail.com
        </a>
        <HiOutlineClipboardCopy size="30" onClick={handleCopy}/>
      </div>
    </section>
  );
}

export default Contact;
