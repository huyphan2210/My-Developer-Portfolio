import { FC, useState } from "react";
import "./Header.scss";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import TypeWriter from "../../components/TypeWriter";

const Header: FC = () => {
  const [isMenuClicked, setIsMenuCLicked] = useState(false);

  const name = "huy-phan";

  return (
    <header>
      <TypeWriter text={name} speed={100}></TypeWriter>
      <div className=""></div>
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
