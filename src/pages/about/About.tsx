import { FC, useEffect, useState } from "react";
import "./About.scss";
import AboutMobile, { TechStack } from "./components/AboutMobile/AboutMobile";
import { CompanyCardProps } from "./components/CompanyCard/CompanyCard";

import netcompanyImg from "../../assets/img/company/netcompany.png";
import tpsImg from "../../assets/img/company/tps.png";
import angularIcon from "../../assets/icons/tech-stack/angular.svg";
import cssIcon from "../../assets/icons/tech-stack/css.svg";
import htmlIcon from "../../assets/icons/tech-stack/html.svg";
import javascriptIcon from "../../assets/icons/tech-stack/javascript.svg";
import nodeIcon from "../../assets/icons/tech-stack/nodejs.svg";
import reactIcon from "../../assets/icons/tech-stack/react.svg";
import vueIcon from "../../assets/icons/tech-stack/vue.svg";
import typescriptIcon from "../../assets/icons/tech-stack/typescript.svg";
import dotnetIcon from "../../assets/icons/tech-stack/dotnet-core.svg";
import AboutDesktop from "./components/AboutDesktop/AboutDesktop";

const greetings = `Hi there! I'm Huy Phan, a passionate web developer born and raised in the beautiful country of Vietnam. With over ${
  new Date().getFullYear() - 2022
} years of hands-on experience in the field, I've had the opportunity to work on various web development projects, honing my skills and expertise along the way.`;
const professionParagraph =
  "As a developer, I approach my work with humility, recognizing my role in the broader web development community. I aim to create digital solutions that prioritize functionality and user-friendliness. While my contributions may appear modest, I take pride in my dedication to continuous improvement and making the web a more accessible and enjoyable space for all.";
const careerParagraph = "Here are the places I've worked with:";

const companies: CompanyCardProps[] = [
  {
    companyName: "Netcompany",
    companyImg: netcompanyImg,
    companyURLs: "https://netcompany.com/",
    startDate: new Date("04-03-2023"),
  },
  {
    companyName: "TPS Software",
    companyImg: tpsImg,
    companyURLs: "https://tpssoft.com/",
    startDate: new Date("01-13-2022"),
    endDate: new Date("12-12-2022"),
  },
];

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
    name: "JavaScript",
    icon: javascriptIcon,
  },
  {
    name: "TypeScript",
    icon: typescriptIcon,
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
];

const About: FC = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", () =>
        setWindowSize(window.innerWidth)
      );
    };
  }, []);

  return windowSize < 1024 ? (
    <AboutMobile
      greetings={greetings}
      professionParagraph={professionParagraph}
      careerParagraph={careerParagraph}
      companies={companies}
      techStackParagraph=""
      techStack={techStack}
    />
  ) : (
    <AboutDesktop
      greetings={greetings}
      professionParagraph={professionParagraph}
      careerParagraph={careerParagraph}
      companies={companies}
      techStackParagraph=""
      techStack={techStack}
    />
  );
};

export default About;
