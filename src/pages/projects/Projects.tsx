import { FC } from "react";
import "./Projects.scss";
import { data } from "../../project.json";
import SideBarForProjectPage from "./components/SideBarForProjectPage/SideBarForProjectPage";

type ProjectData = (typeof data)[0];
const projects: ProjectData[] = data;

const Projects: FC = () => {
  return (
    <section className="project">
      <SideBarForProjectPage />
      <section className="project__content">
        {projects.map((project, index) => (
          <img
            key={project.title + index}
            src={project.heroImage}
            loading="lazy"
            alt={project.title}
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
