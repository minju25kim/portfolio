import { useState } from "react";

function Intro() {
  return (
    <section id="intro">
      <h1>
        Hello, I'm{" "}
        <a id="my-name" href="#contact">
          Minju Kim
        </a>
        . <br />I create and develop web apps.{" "}
      </h1>
      <a href="#about">Minju who?</a>
    </section>
  );
}

export default Intro;
