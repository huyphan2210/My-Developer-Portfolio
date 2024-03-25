import { FC, useState } from "react";
import "./Header.scss";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

const Header: FC = () => {
  const [isMenuClicked, setIsMenuCLicked] = useState(false);

  const name = "huy-phan";
  
  return (
    <header>
      <span>{name}</span>
      <div className="header-icons">
        {!isMenuClicked && (
          <img
            className="header-icons__menu"
            onClick={() => setIsMenuCLicked(true)}
            src={menuIcon}
            alt="Menu"
            loading="lazy"
          />
        )}
        {isMenuClicked && (
          <img
            className="header-icons__close"
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
