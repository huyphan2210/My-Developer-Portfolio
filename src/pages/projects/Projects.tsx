import { FC } from "react";
import "./Projects.scss";
import { data } from "../../project.json";
import SideBarForProjectPage from "./components/SideBarForProjectPage/SideBarForProjectPage";
import ProjectCard from "./components/ProjectCard/ProjectCard";

export type ProjectData = (typeof data)[0];
const projects: ProjectData[] = data.filter((project) => project.submitted).sort((a, b) => b.difficulty - a.difficulty)

const Projects: FC = () => {
  return (
    <section className="project">
      <SideBarForProjectPage />
      <section className="project__content">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
