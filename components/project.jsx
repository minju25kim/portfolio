import { useState } from "react";
import  StreetCred from "./assets/StreetCred.png"
import TrainExit from "./assets/TrainExits.png"
import secTech from "./assets/secTech.png"
import searchflix from "./assets/searchflix.png"
import { SiVercel,SiNextdotjs,SiSupabase } from "react-icons/si";

function Project() {
  return (
    <section id="project">
      <h2>Projects</h2>
      <div className="scred prj">
        <h3>StreetCred</h3>
        <div>
        <a href="https://github.com/fac24/StreetCred" target="_blank">
          <img src={StreetCred} />
        </a>
        <p>Street cred is tech for better(TFB) project. StreetCred encourage people to make local community and sharing things within communities.
          <br/>
        </p>
        <SiNextdotjs /> 
        <SiVercel/>
        <SiSupabase/>
        </div>
      </div>
      <div className="texit prj">
        <h3>TrainExit</h3>
        <a href="https://github.com/fac24/finalProj-Bereket-Minju-Joe-George" target="_blank">
          <img src={TrainExit} />
        </a>
        <p>Train exit is the app that can help user to find where to take off from london tube. </p>

      </div>
      <div className="stech prj">
        <h3>SecTech</h3>
        <a href="https://github.com/fac24/week6-alex-george-minju-petra" target="_blank">
          <img src={secTech} />
        </a>
        <p>Sectech is the plaform for second hand electronics like laptop or smartphones. Sectech helps user not to buy new electronics but get second hand item.</p>

      </div>
      <div className="sflix prj">
        <h3>SearchFlix</h3>
        <a href="https://github.com/fac24/week5-bereket-minju" target="_blank">
          <img src={searchflix} />
        </a>
        <p>Search flix is the project using TMDB API for looking for movies and TV shows. This app help user to create movie menu so they can pick one in the menu like real menu in restaurants.</p>

      </div>
    </section>
  );
}

export default Project;
