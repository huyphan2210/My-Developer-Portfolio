import { FC, useState } from "react";
import "./Header.scss";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import Navigations from "./components/Navigation/Navigations";
import RouteURLs from "../../RouteUrls";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const Header: FC = () => {
  const [isMenuClicked, setIsMenuCLicked] = useState(false);
  const name = "huy-phan";

  return (
    <header className="header">
      <a className="header__home-link" href={RouteURLs.HOME}>
        {name}
      </a>
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
