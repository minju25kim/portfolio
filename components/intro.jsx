import { useState } from "react";
import { BsArrowBarDown } from "react-icons/bs";
function Intro() {
  return (
    <section id="intro">
      <h1>
        Hello, I'm{" "}
        <a id="minju-kim" href="#contact">
          Minju Kim
        </a>
        . <br />I create and develop{" "}
        <a id="web-apps" href="#project">
          web apps.
        </a>
      </h1>
      <a href="#about" className="minju-who">
        <BsArrowBarDown size="30" />
        <br />
        Minju who?
      </a>
    </section>
  );
}

export default Intro;
