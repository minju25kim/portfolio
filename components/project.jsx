import projects from "./projects";
import Prj from "./Prj.jsx";

function Project() {
  return (
    <section id="project">
      <h2>Project</h2>
      {Object.entries(projects).map((project) => {
        let prj = project[1];
        return <Prj prj={prj} key={prj.name} />;
      })}
    </section>
  );
}

export default Project;
