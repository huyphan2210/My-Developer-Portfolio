import { FC, useState } from "react";
import "./Header.scss";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import Navigations from "./components/Navigation/Navigations";
import RouteURLs from "../../RouteUrls";

const Header: FC = () => {
  const [isMenuClicked, setIsMenuCLicked] = useState(false);

  const name = "huy-phan";

  return (
    <header>
      <a className="header__home-link" href={RouteURLs.HOME}>
        {name}
      </a>
      {isMenuClicked && (
        <div className="header__menu--mobile">
          <Navigations />
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
