import { FC, useEffect, useRef, useState } from "react";
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
import Bio from "./Bio/Bio";

export interface AboutTabProps {
  aboutStore: AboutStore;
}

interface AboutDesktopProps {
  greetings: string;
  greetings2: string;
  greetings3: string;
  professionParagraph: string;
  careerParagraph: string;
  techStackParagraph: string;
  companies: CompanyCardProps[];
  techStack: TechStack[];
}

const AboutDesktop: FC<AboutDesktopProps> = ({
  greetings,
  greetings2,
  greetings3,
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
          {aboutStore.openTabs.map((tab, index) => {
            switch (tab) {
              case AboutTab.Bio:
                return <BioTab key={index + AboutTab.Bio} aboutStore={aboutStore} />;
              case AboutTab.Career:
                return <CareerTab key={index + AboutTab.Career} aboutStore={aboutStore} />;
              case AboutTab.TechStack:
                return <TechStackTab key={index + AboutTab.TechStack} aboutStore={aboutStore} />;
            }
          })}
        </div>
        <div className="about__content__page">
          {aboutStore.openTabs.includes(AboutTab.Bio) && (
            <Bio
              aboutStore={aboutStore}
              greetings={greetings}
              greetings2={greetings2}
              greetings3={greetings3}
            />
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
