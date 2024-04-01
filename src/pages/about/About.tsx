import { FC, useEffect, useState } from "react";
import "./About.scss";
import AboutMobile from "./components/AboutMobile/AboutMobile";

const About: FC = () => {
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

  return windowSize < 1024 ? <AboutMobile /> : <></>;
};

export default About;
