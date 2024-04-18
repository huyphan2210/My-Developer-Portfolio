import { FC, useEffect, useRef } from "react";
import "./Projects.scss";
import { data } from "../../project.json";
import SideBarForProjectPage from "./components/SideBarForProjectPage/SideBarForProjectPage";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { observer } from "mobx-react";
import { useProjectStore } from "../../store/ProjectStore";

export type ProjectData = (typeof data)[0];
const projects: ProjectData[] = data;

const Projects: FC = () => {
  const projectStore = useProjectStore();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0 });
    }
  }, [projectStore.selectedTechs]);

  return (
    <section className="project">
      <SideBarForProjectPage projectStore={projectStore} />
      <section className="project__content" ref={contentRef}>
        {projects
          .filter((project) => {
            if (projectStore.selectedTechs.length === 0) return true;
            for (let i = 0; i < projectStore.selectedTechs.length; i++) {
              if (project.languages.includes(projectStore.selectedTechs[i])) {
                return true;
              }
            }
            return false;
          })
          .sort((a, b) => b.difficulty - a.difficulty)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </section>
    </section>
  );
};

export default observer(Projects);
