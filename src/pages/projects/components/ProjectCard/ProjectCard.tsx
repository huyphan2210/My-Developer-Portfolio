import { FC, useRef } from "react";
import "./ProjectCard.scss";
import { ProjectData } from "../../Projects";
import useElementInView from "../../../../hooks/useElementInView";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useElementInView(cardRef);
  return (
    <article
      className="project-card"
      ref={cardRef}
      onClick={() => window.open(project.liveURL, "_blank")}
      style={{ opacity: isInView ? 1 : 0 }}
    >
      <div className="project-card__header">
        <img src={project.heroImage} loading="lazy" alt={project.title} />
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
      </div>
    </article>
  );
};

export default ProjectCard;
