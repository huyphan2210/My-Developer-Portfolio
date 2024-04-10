import { FC, useEffect, useRef } from "react";
import { TechStack } from "../../../AboutMobile/AboutMobile";
import Image from "../../../Image/Image";
import "./TechStack.scss";
import AboutStore, { AboutTab } from "../../../../../../store/AboutStore";
import { observer } from "mobx-react";

interface TechStackProps {
  techStack: TechStack[];
  aboutStore: AboutStore;
}

const TechStackPage: FC<TechStackProps> = ({ techStack, aboutStore }) => {
  const techStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (techStackRef.current) {
      if (aboutStore.currentTab === AboutTab.TechStack) {
        const imageWrappers = techStackRef.current.getElementsByClassName(
          "image-wrapper"
        ) as HTMLCollectionOf<HTMLDivElement>;
        setTimeout(() => {
          for (let i = 0; i < imageWrappers.length; i++) {
            if (!imageWrappers[i].style.transform) {
              imageWrappers[i].style.transform = "translateY(0)";
              imageWrappers[i].style.opacity = "1";
            }
          }
        }, 0);
      }
    }
  }, [aboutStore.openTabs]);

  return (
    <div
      className="about__content__page--tech"
      ref={techStackRef}
      style={{
        display: aboutStore.currentTab === AboutTab.TechStack ? "flex" : "none",
      }}
    >
      {techStack.map(({ name, icon }, index) => (
        <Image
          key={index}
          src={icon}
          originalStyle={{}}
          inViewStyle={{}}
          isFromDesktop
          className=""
          name={name}
        />
      ))}
    </div>
  );
};

export default observer(TechStackPage);
