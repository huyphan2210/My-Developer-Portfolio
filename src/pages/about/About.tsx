import { FC, useEffect, useState } from "react";
import "./About.scss";
import AboutMobile, { TechStack } from "./components/AboutMobile/AboutMobile";
import { CompanyCardProps } from "./components/CompanyCard/CompanyCard";
import AboutDesktop from "./components/AboutDesktop/AboutDesktop";

import netcompanyImg from "../../assets/img/company/netcompany.png";
import tpsImg from "../../assets/img/company/tps.png";
import pulseImg from "../../assets/img/company/projects/pulse.jpg";
import brobizzImg from "../../assets/img/company/projects/brobizz.jpg";
import agoraImg from "../../assets/img/company/projects/agora.jpg";
import vibeImg from "../../assets/img/company/projects/vibe.fyi.png";

import angularIcon from "../../assets/icons/tech-stack/angular.svg";
import cssIcon from "../../assets/icons/tech-stack/css.svg";
import htmlIcon from "../../assets/icons/tech-stack/html.svg";
import javascriptIcon from "../../assets/icons/tech-stack/javascript.svg";
import nodeIcon from "../../assets/icons/tech-stack/nodejs.svg";
import reactIcon from "../../assets/icons/tech-stack/react.svg";
import vueIcon from "../../assets/icons/tech-stack/vue.svg";
import typescriptIcon from "../../assets/icons/tech-stack/typescript.svg";
import dotnetIcon from "../../assets/icons/tech-stack/dotnet-core.svg";
import csharpIcon from "../../assets/icons/tech-stack/csharp.svg";

const greetings = `Hi there! I'm Huy Phan, a software developer who's been navigating the coding world for over ${
  new Date().getFullYear() - 2022
} years now. I'm particularly interested in full-stack development, with a penchant for languages like JavaScript, TypeScript, HTML, CSS, and .NET (C#).`;
const greetings2 =
  "Beyond coding, I find joy in giving back to the tech community by sharing insights about my project experiences on LinkedIn. My primary goal remains unchanged: to continue learning and growing as a developer while making a positive impact through my work.";
const greetings3 =
  "When I step away from the screen, you'll often find me immersed in novels, grooving to Jazz/Soul music, or exploring the streets of Ho Chi Minh City on my bike or on foot.";
const professionParagraph =
  "As a software developer, I genuinely enjoy my career. I find satisfaction in solving problems, bringing ideas to life through code, and constantly learning and growing in this ever-evolving field. Being part of the tech community and contributing to meaningful projects brings me fulfillment and excitement every day.";
const careerParagraph =
  "Here's a list of the places where I've had the pleasure to work:";

const companies: CompanyCardProps[] = [
  {
    companyName: "Netcompany",
    companyImg: netcompanyImg,
    companyURLs: "https://netcompany.com/",
    companySummary:
      "Netcompany is a Danish IT services company founded in 2000. They specialize in developing and maintaining IT solutions for public and private sector clients. With a focus on employee satisfaction and professional development, Netcompany has expanded across Europe and garnered recognition for their work, particularly in the public sector. They offer a range of services including consulting, software development, and system integration, working with technologies such as Microsoft, Oracle, and SAP platforms.",
    startDate: new Date("04-03-2023"),
    companyProjects: [
      {
        name: "PULSE",
        description: "Comprehensive, data-driven platform for efficient IT project management",
        infoURL: "https://netcompany.com/platforms/pulse/",
        img: pulseImg,
      },
      {
        name: "BroBizz",
        description: "An automatic payment device for tolls and parking facilities",
        infoURL: "https://brobizz.com/",
        img: brobizzImg,
      },
    ],
  },
  {
    companyName: "TPS Software",
    companyImg: tpsImg,
    companyURLs: "https://tpssoft.com/",
    companySummary:
      "TPS Software is a software development company based in Vietnam, offering services in custom software development, mobile app development, and IT consulting. They cater to clients worldwide across diverse industries and possess expertise in technologies such as Java, .NET, Python, and others.",
    startDate: new Date("01-13-2022"),
    endDate: new Date("12-12-2022"),
    companyProjects: [
      {
        name: "VIBE",
        description: "A gamechanger for anyone with a hard-to-reach workforce",
        infoURL: "https://www.vibe.fyi/",
        img: vibeImg,
      },
      {
        name: "Agora Co-learning",
        description: "An education centre providing Preschool, Student Care and a wide range of enrichment programmes",
        infoURL: "https://www.agora-colearning.space/",
        img: agoraImg,
      },
    ],
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
];

const About: FC = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setWindowSize(window.innerWidth)
      );
    };
  }, []);

  return windowSize < 1024 ? (
    <AboutMobile
      greetings={greetings}
      greetings2={greetings2}
      greetings3={greetings3}
      professionParagraph={professionParagraph}
      careerParagraph={careerParagraph}
      companies={companies}
      techStackParagraph=""
      techStack={techStack}
    />
  ) : (
    <AboutDesktop
      greetings={greetings}
      greetings2={greetings2}
      greetings3={greetings3}
      professionParagraph={professionParagraph}
      careerParagraph={careerParagraph}
      companies={companies}
      techStackParagraph=""
      techStack={techStack}
    />
  );
};

export default About;
