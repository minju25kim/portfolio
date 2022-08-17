import TechLogo from "./TechLogo";
import { SiGithub } from "react-icons/si";

function Prj({ prj }) {
  return (
    <div className="prj">
      <div className="card">
        <h3>{prj.name}</h3>
        <div className="techStack">
          {prj.techStack.map((stack) => {
            return <TechLogo name={stack} key={stack} />;
          })}
        </div>
      </div>
      <div className="card">
        <a href={prj.github} target="_blank">
          <img src={prj.img} />
        </a>
        <div className="panel">
          <div className="description">{prj.description}</div>
          <div className="links">
            <a className="github" href={prj.github}>
              <SiGithub sizs={20} />
              Github
            </a>

            <a className="live" href={prj.live !== "" ? prj.live : prj.github}>
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Prj;
