import { FC, useRef } from "react";
import { observer } from "mobx-react";
import "./AboutDesktop.scss";
import AboutStore, {
  AboutTab,
  useAboutStore,
} from "../../../../store/AboutStore";
import SideBarForAboutPage from "./SideBarForAboutPage/SideBarForAboutPage";
import { CompanyCardProps } from "../CompanyCard/CompanyCard";
import { TechStack } from "../AboutMobile/AboutMobile";
import BioTab from "./Tabs/BioTab";
import CareerTab from "./Tabs/CareerTab";
import TechStackTab from "./Tabs/TechStackTab";
import TypeWriter from "../../../../components/TypeWriter";
import authorImg from "../../../../assets/img/author.png";

export interface AboutTabProps {
  aboutStore: AboutStore;
}

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
  // professionParagraph,
  careerParagraph,
  techStackParagraph,
  // companies,
  // techStack,
}) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const aboutStore = useAboutStore();
  const speed = 10;

  return (
    <section className="about">
      <SideBarForAboutPage aboutStore={aboutStore} />
      <section className="about__content">
        <div className="about__content__tabs" ref={tabsRef}>
          {aboutStore.openTabs.map((tab) => {
            switch (tab) {
              case AboutTab.Bio:
                return <BioTab aboutStore={aboutStore} />;
              case AboutTab.Career:
                return <CareerTab aboutStore={aboutStore} />;
              case AboutTab.TechStack:
                return <TechStackTab aboutStore={aboutStore} />;
            }
          })}
        </div>
        <div className="about__content__page">
          {aboutStore.currentTab === AboutTab.Bio && (
            <div className="about__content__page--bio">
              <p>
                <TypeWriter text={greetings} speed={speed} />
              </p>
              <img src={authorImg} alt="Author" loading="lazy" />
            </div>
          )}
          {aboutStore.currentTab === AboutTab.Career && (
            <TypeWriter text={careerParagraph} speed={speed} />
          )}
          {aboutStore.currentTab === AboutTab.TechStack && (
            <TypeWriter text={techStackParagraph} speed={speed} />
          )}
        </div>
      </section>
    </section>
  );
};

export default observer(AboutDesktop);
