import { FC, SyntheticEvent, useState } from "react";
import "./SideBarForAboutPage.scss";
import SideBar from "../../../../components/SiderBar/SiderBar";
import TypeWriter from "../../../../components/TypeWriter";
import AboutStore, { AboutTab } from "../../../../store/AboutStore";

interface SideBarForAboutPageProps {
  aboutStore: AboutStore;
}

const SideBarForAboutPage: FC<SideBarForAboutPageProps> = ({ aboutStore }) => {
  const [isRootOpened, setIsRootOpened] = useState(false);
  const [isProfessionOpened, setIsProfessionOpened] = useState(false);
  const handleToggle = (e: SyntheticEvent<HTMLDetailsElement, Event>) => {
    const isOpened = e.currentTarget.hasAttribute("open");
    if (!isOpened) {
      aboutStore.setTab(AboutTab.Personal);
    }
    setIsRootOpened(isOpened);
  };
  const handleProfessionToggle = (
    e: SyntheticEvent<HTMLDetailsElement, Event>
  ) => {
    const isOpened = e.currentTarget.hasAttribute("open");
    if (!isOpened) {
      aboutStore.setTab(AboutTab.Personal);
    }
    setIsProfessionOpened(isOpened);
  };

  const speed = 25;
  return (
    <SideBar>
      <details className="side-bar--about" open onToggle={handleToggle}>
        <summary className="side-bar--about__root">
          <TypeWriter text="About me" speed={speed} />
        </summary>
        <details className="side-bar--about__leave">
          <summary>
            {isRootOpened && <TypeWriter text="Personal Info" speed={speed} />}
          </summary>
        </details>
        <details
          className="side-bar--about__leave"
          onToggle={handleProfessionToggle}
        >
          <summary>
            {isRootOpened && <TypeWriter text="Profession" speed={speed} />}
          </summary>
          <details
            className="side-bar--about__leave__leave"
            onToggle={() => aboutStore.setTab(AboutTab.Career)}
          >
            <summary>
              {isProfessionOpened && <TypeWriter text="Career" speed={speed} />}
            </summary>
          </details>
          <details
            className="side-bar--about__leave__leave"
            onToggle={() => aboutStore.setTab(AboutTab.TechStack)}
          >
            <summary>
              {isProfessionOpened && (
                <TypeWriter text="Tech stack" speed={speed} />
              )}
            </summary>
          </details>
        </details>
      </details>
    </SideBar>
  );
};

export default SideBarForAboutPage;
