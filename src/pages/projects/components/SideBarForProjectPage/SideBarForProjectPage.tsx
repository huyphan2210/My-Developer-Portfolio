import { FC } from "react";
import "./SideBarForProjectPage.scss";
import SideBar from "../../../../components/SiderBar/SiderBar";
import TypeWriter from "../../../../components/TypeWriter";
import { TechStack } from "../../../about/components/AboutMobile/AboutMobile";

import angularIcon from "../../../../assets/icons/tech-stack/angular.svg";
import javascriptIcon from "../../../../assets/icons/tech-stack/javascript.svg";
// import nodeIcon from "../../../../assets/icons/tech-stack/nodejs.svg";
import reactIcon from "../../../../assets/icons/tech-stack/react.svg";
import vueIcon from "../../../../assets/icons/tech-stack/vue.svg";
import svelteIcon from "../../../../assets/icons/tech-stack/svelte.svg";
import typescriptIcon from "../../../../assets/icons/tech-stack/typescript.svg";
import { observer } from "mobx-react";
import ProjectStore from "../../../../store/ProjectStore";
// import dotnetIcon from "../../../../assets/icons/tech-stack/dotnet-core.svg";
// import csharpIcon from "../../../../assets/icons/tech-stack/csharp.svg";

const techStack: TechStack[] = [
  {
    name: "JS",
    icon: javascriptIcon,
  },
  {
    name: "TS",
    icon: typescriptIcon,
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
  // {
  //   name: "C#",
  //   icon: csharpIcon,
  // },
  // {
  //   name: "Node.js",
  //   icon: nodeIcon,
  // },
  // {
  //   name: ".NET",
  //   icon: dotnetIcon,
  // },
];

interface SideBarForProjectPageProps {
  projectStore: ProjectStore;
}

const SideBarForProjectPage: FC<SideBarForProjectPageProps> = ({
  projectStore,
}) => {
  const speed = 50;

  const techStackRadioHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      projectStore.addTech(e.currentTarget.name);
    } else {
      projectStore.removeTech(e.currentTarget.name);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SideBar>
      <details className="side-bar--project__tech" open>
        <summary className="side-bar--project__tech__header">
          <TypeWriter text="Tech" speed={speed} />
        </summary>
        <ul className="side-bar--project__tech__body">
          {techStack.map((tech, index) => (
            <li key={index + tech.name}>
              <input
                id={tech.name}
                type="checkbox"
                name={tech.name}
                value={tech.name}
                onClick={techStackRadioHandler}
              />
              <label htmlFor={tech.name}>
                <img
                  key={index}
                  src={tech.icon}
                  loading="lazy"
                  alt={tech.name}
                />
                <TypeWriter text={tech.name} speed={speed} />
              </label>
            </li>
          ))}
        </ul>
      </details>
    </SideBar>
  );
};

export default observer(SideBarForProjectPage);
