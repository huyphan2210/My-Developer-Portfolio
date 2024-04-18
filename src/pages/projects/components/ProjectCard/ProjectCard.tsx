import { FC, useRef } from "react";
import "./ProjectCard.scss";
import { ProjectData } from "../../Projects";
import { TechStack } from "../../../about/components/AboutMobile/AboutMobile";
import useElementInView from "../../../../hooks/useElementInView";

import angularIcon from "../../../../assets/icons/tech-stack/angular.svg";
import cssIcon from "../../../../assets/icons/tech-stack/css.svg";
import htmlIcon from "../../../../assets/icons/tech-stack/html.svg";
import javascriptIcon from "../../../../assets/icons/tech-stack/javascript.svg";
import nodeIcon from "../../../../assets/icons/tech-stack/nodejs.svg";
import reactIcon from "../../../../assets/icons/tech-stack/react.svg";
import vueIcon from "../../../../assets/icons/tech-stack/vue.svg";
import svelteIcon from "../../../../assets/icons/tech-stack/svelte.svg";
import typescriptIcon from "../../../../assets/icons/tech-stack/typescript.svg";
import dotnetIcon from "../../../../assets/icons/tech-stack/dotnet-core.svg";
import csharpIcon from "../../../../assets/icons/tech-stack/csharp.svg";

const techStack: TechStack[] = [
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "JS",
    icon: javascriptIcon,
  },
  {
    name: "TS",
    icon: typescriptIcon,
  },
  {
    name: "C#",
    icon: csharpIcon,
  },
  {
    name: "Node.js",
    icon: nodeIcon,
  },
  {
    name: ".NET",
    icon: dotnetIcon,
  },
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Vue",
    icon: vueIcon,
  },
  {
    name: "Angular",
    icon: angularIcon,
  },
  {
    name: "Svelte",
    icon: svelteIcon,
  },
];

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useElementInView(cardRef);

  const techs = project.languages.map((language) =>
    techStack.find((tech) => tech.name === language)
  );

  return (
    <article
      className="project-card"
      ref={cardRef}
      style={{ opacity: isInView ? 1 : 0 }}
    >
      <div className="project-card__header">
        <img src={project.heroImage} loading="lazy" alt={project.title} />
        <div className="project-card__header__techs">
          {techs.map((tech, index) => (
            <img
              key={index}
              src={tech?.icon}
              loading="lazy"
              alt={tech?.name}
            />
          ))}
        </div>
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
      </div>
      <div className="project-card__footer">
        <a
          className="project-card__footer__button view"
          href={project.liveURL}
          target="_blank"
        >
          View Site
        </a>
        <a
          className="project-card__footer__button repo"
          href={project.repository}
          target="_blank"
        >
          Repository
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
