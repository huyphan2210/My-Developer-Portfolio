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
        <details className="side-bar--about__personal__leave">
          <summary>
            {isRootOpened && <TypeWriter text="Bio" speed={speed} />}
          </summary>
        </details>
        <details
          className="side-bar--about__personal__leave"
          onToggle={handleProfessionToggle}
        >
          <summary>
            {isRootOpened && <TypeWriter text="Profession" speed={speed} />}
          </summary>
          <details
            className="side-bar--about__personal__leave__leave"
            onToggle={() => aboutStore.pushTab(AboutTab.Career)}
          >
            <summary>
              {isProfessionOpened && <TypeWriter text="Career" speed={speed} />}
            </summary>
          </details>
          <details
            className="side-bar--about__personal__leave__leave"
            onToggle={() => aboutStore.pushTab(AboutTab.TechStack)}
          >
            <summary>
              {isProfessionOpened && (
                <TypeWriter text="Tech stack" speed={speed} />
              )}
            </summary>
          </details>
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
