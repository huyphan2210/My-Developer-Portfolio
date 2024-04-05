import { FC, SyntheticEvent, useState } from "react";
import "./SideBarForAboutPage.scss";
import SideBar from "../../../../../components/SiderBar/SiderBar";
import TypeWriter from "../../../../../components/TypeWriter";
import AboutStore, { AboutTab } from "../../../../../store/AboutStore";
import { observer } from "mobx-react";

interface SideBarForAboutPageProps {
  aboutStore: AboutStore;
}

const SideBarForAboutPage: FC<SideBarForAboutPageProps> = ({ aboutStore }) => {
  const [isRootOpened, setIsRootOpened] = useState(false);
  const [isProfessionOpened, setIsProfessionOpened] = useState(false);

  const handleToggle = (e: SyntheticEvent<HTMLDetailsElement, Event>) => {
    const isOpened = e.currentTarget.hasAttribute("open");
    setIsRootOpened(isOpened);
  };

  const handleProfessionToggle = (
    e: SyntheticEvent<HTMLDetailsElement, Event>
  ) => {
    const isOpened = e.currentTarget.hasAttribute("open");
    setIsProfessionOpened(isOpened);
  };

  const speed = 25;
  return (
    <SideBar>
      <details
        className="side-bar--about__personal"
        open
        onToggle={handleToggle}
      >
        <summary className="side-bar--about__personal__root">
          <TypeWriter text="Personal Info" speed={speed} />
        </summary>
        <p
          className={
            aboutStore.currentTab !== AboutTab.Bio
              ? "side-bar--about__personal__leave"
              : "side-bar--about__personal__leave active"
          }
          onClick={() => aboutStore.pushTab(AboutTab.Bio)}
        >
          {isRootOpened && <TypeWriter text={AboutTab.Bio} speed={speed} />}
        </p>
        <details
          className="side-bar--about__personal__leave"
          onToggle={handleProfessionToggle}
        >
          <summary>
            {isRootOpened && <TypeWriter text="Profession" speed={speed} />}
          </summary>
          <p
            className={
              aboutStore.currentTab !== AboutTab.Career
                ? "side-bar--about__personal__leave__leave"
                : "side-bar--about__personal__leave__leave active"
            }
            onClick={() => aboutStore.pushTab(AboutTab.Career)}
          >
            {isProfessionOpened && (
              <TypeWriter text={AboutTab.Career} speed={speed} />
            )}
          </p>
          <p
            className={
              aboutStore.currentTab !== AboutTab.TechStack
                ? "side-bar--about__personal__leave__leave"
                : "side-bar--about__personal__leave__leave active"
            }
            onClick={() => aboutStore.pushTab(AboutTab.TechStack)}
          >
            {isProfessionOpened && (
              <TypeWriter text={AboutTab.TechStack} speed={speed} />
            )}
          </p>
        </details>
      </details>
      <details className="side-bar--about__contact" open>
        {" "}
        <summary className="side-bar--about__contact__root">
          <TypeWriter text="Contact" speed={speed} />
        </summary>
      </details>
    </SideBar>
  );
};

export default observer(SideBarForAboutPage);
