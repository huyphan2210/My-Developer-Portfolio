import { FC } from "react";
import "./Navigations.scss";
import RouteURLs from "../../../../RouteUrls";
import TypeWriter from "../../../../components/TypeWriter";

const Navigations: FC = () => {
  const speed = 50;
  return (
    <nav className="navigations">
      <ul className="navigations__list">
        <li className="navigations__list__link home">
          <a href={RouteURLs.HOME}>
            <TypeWriter text="_home" speed={speed} />
          </a>
        </li>
        <li className="navigations__list__link">
          <a href={RouteURLs.ABOUT}>
            <TypeWriter text="_about-me" speed={speed} />
          </a>
        </li>
        <li className="navigations__list__link">
          <a href={RouteURLs.PROJECTS}>
            <TypeWriter text="_projects" speed={speed} />
          </a>
        </li>
        <li className="navigations__list__link">
          <a href={RouteURLs.CONTACT}>
            <TypeWriter text="_contact-me" speed={speed} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigations;
