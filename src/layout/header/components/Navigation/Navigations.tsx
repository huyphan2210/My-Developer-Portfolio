import { FC, useEffect, useRef } from "react";
import "./Navigations.scss";
import RouteURLs from "../../../../RouteUrls";
import TypeWriter from "../../../../components/TypeWriter";

interface NavigationsProps {
  isMobile: boolean;
}

const Navigations: FC<NavigationsProps> = ({ isMobile }) => {
  const speed = 50;
  const currentPath = window.location.pathname;

  const homeRef = useRef<HTMLLIElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  const projectsRef = useRef<HTMLLIElement>(null);
  const contactRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const selected = " selected";
    if (
      homeRef.current &&
      aboutRef.current &&
      projectsRef.current &&
      contactRef.current
    ) {
      switch (currentPath) {
        case RouteURLs.HOME: {
          homeRef.current.className = homeRef.current.className + selected;
          break;
        }
        case RouteURLs.ABOUT: {
          aboutRef.current.className = aboutRef.current.className + selected;
          break;
        }
        case RouteURLs.PROJECTS: {
          projectsRef.current.className =
            projectsRef.current.className + selected;
          break;
        }
        case RouteURLs.CONTACT: {
          contactRef.current.className =
            contactRef.current.className + selected;
          break;
        }
      }
    }
  }, []);

  return (
    <nav className="navigations">
      <ul className="navigations__list">
        <li className="navigations__list__link home" ref={homeRef}>
          <a href={RouteURLs.HOME}>
            {isMobile ? <TypeWriter text="_home" speed={speed} /> : "_home"}
          </a>
        </li>
        <li className="navigations__list__link" ref={aboutRef}>
          <a href={RouteURLs.ABOUT}>
            {isMobile ? (
              <TypeWriter text="_about-me" speed={speed} />
            ) : (
              "_about-me"
            )}
          </a>
        </li>
        <li className="navigations__list__link" ref={projectsRef}>
          <a href={RouteURLs.PROJECTS}>
            {isMobile ? (
              <TypeWriter text="_projects" speed={speed} />
            ) : (
              "_projects"
            )}
          </a>
        </li>
        <li className="navigations__list__link contact" ref={contactRef}>
          <a href={RouteURLs.CONTACT}>
            {isMobile ? (
              <TypeWriter text="_contact-me" speed={speed} />
            ) : (
              "_contact-me"
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigations;
