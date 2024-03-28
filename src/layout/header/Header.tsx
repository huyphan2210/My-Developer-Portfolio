import { FC, useEffect, useState } from "react";
import "./Header.scss";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import Navigations from "./components/Navigation/Navigations";
import RouteURLs from "../../RouteUrls";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import TypeWriter from "../../components/TypeWriter";

const Header: FC = () => {
  const [isMenuClicked, setIsMenuCLicked] = useState(false);
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

  let locationName = "";
  switch (window.location.pathname) {
    case RouteURLs.ABOUT:
      locationName = "_about-me";
      break;
    case RouteURLs.PROJECTS:
      locationName = "_projects";
      break;
    case RouteURLs.CONTACT:
      locationName = "_contact-me";
      break;
  }
  const name = "huy-phan";

  return (
    <header className="header">
      <div className="header__current-location">
        <a
          className="header__current-location__home-link"
          href={RouteURLs.HOME}
        >
          {name}
        </a>
        {locationName && windowSize < 1024 && (
          <span>
            /<TypeWriter text={locationName} color="white" speed={50} />
          </span>
        )}
      </div>
      <div className="header__menu--desktop">
        <Navigations isMobile={false} />
      </div>
      {isMenuClicked && (
        <div className="header__menu--mobile">
          <Navigations isMobile />
          <SocialLinks />
        </div>
      )}
      <div className="header__icons">
        {!isMenuClicked && (
          <img
            className="header__icons--menu"
            onClick={() => setIsMenuCLicked(true)}
            src={menuIcon}
            alt="Menu"
            loading="lazy"
          />
        )}
        {isMenuClicked && (
          <img
            className="header__icons--close"
            onClick={() => setIsMenuCLicked(false)}
            src={closeIcon}
            alt="Menu"
            loading="lazy"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
