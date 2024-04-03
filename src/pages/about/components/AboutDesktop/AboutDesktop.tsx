import { FC } from "react";
import { observer } from "mobx-react";
import AboutStore from "../../../../store/AboutStore";
import "./AboutDesktop.scss";
import SideBarForAboutPage from "../SideBarForAboutPage/SideBarForAboutPage";
import { CompanyCardProps } from "../CompanyCard/CompanyCard";
import { TechStack } from "../AboutMobile/AboutMobile";

interface AboutDesktopProps {
  greetings: string;
  professionParagraph: string;
  careerParagraph: string;
  techStackParagraph: string;
  companies: CompanyCardProps[];
  techStack: TechStack[];
}

const AboutDesktop: FC<AboutDesktopProps> = ({
  greetings,
  professionParagraph,
  careerParagraph,
  techStackParagraph,
  companies,
  techStack,
}) => {
  const aboutStore = new AboutStore();
  return (
    <section className="about">
      <SideBarForAboutPage aboutStore={aboutStore} />
      <section className="about__content"></section>
    </section>
  );
};

export default observer(AboutDesktop);
