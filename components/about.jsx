import { useState } from "react";

function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <a href="https://github.com/minju25kim" target="_blank">
        <img src="/minju-github.png" />
      </a>
      <div className="bio">
        <p>
          {" "}
          I'm a developer who loves to make creative web apps with modern web
          technology. <br />
          Coding to solve problems and also for better communications within
          people.{" "}
        </p>
        <p>
          Plus, designed user jouney for better approach to user's experience in
          web apps.
          <br />
          Using design tools to create app prototypes and testing.
        </p>
      </div>
    </section>
  );
}

export default About;
