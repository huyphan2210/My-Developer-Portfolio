import { FC, useEffect, useRef, useState } from "react";
import "./AboutMobile.scss";
import Utilities from "../../../../utilities";
import ShiningBackground from "../../../home/components/ShiningBackground/ShiningBackground";
import TypeWriter from "../../../../components/TypeWriter";
import authorMobileImg from "../../../../assets/img/author-mobile.png";

const AboutMobile: FC = () => {
  const professionRef = useRef<HTMLDivElement>(null);
  const authorMobileRef = useRef<HTMLImageElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);

  const [isCareerInView, setIsCareerInView] = useState(false);

  const speed = 25;

  const paragraph = `Hi there! I'm Huy Phan, a passionate web developer born and raised in the beautiful country of Vietnam. With over ${
    new Date().getFullYear() - 2022
  } years of hands-on experience in the field, I've had the opportunity to work on various web development projects, honing my skills and expertise along the way.`;
  const professionParagraph =
    "As a developer, I approach my work with humility, recognizing my role in the broader web development community. I aim to create digital solutions that prioritize functionality and user-friendliness. While my contributions may appear modest, I take pride in my dedication to continuous improvement and making the web a more accessible and enjoyable space for all.";
  const careerParagraph = "Here's are the places I've worked with:";

  useEffect(() => {
    if (authorMobileRef.current && professionRef.current) {
      authorMobileRef.current.style.opacity = "1";
      professionRef.current.style.opacity = "1";
    }
  }, []);

  useEffect(() => {
    const checkInView = () => {
      if (careerRef.current) {
        setIsCareerInView(Utilities.isTopOfElementInView(careerRef.current));
      }
    };

    // Attach scroll event listener when the component mounts
    window.addEventListener("scroll", checkInView);

    // Detach scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  return (
    <section className="about-page--mobile">
      <ShiningBackground position="fixed" />
      <section className="about-page--mobile__personal">
        <h3 className="about-page--mobile__personal__header">
          <TypeWriter text="// personal-info" speed={speed} />
        </h3>
        <div
          className="about-page--mobile__personal__info"
          ref={authorMobileRef}
        >
          <img src={authorMobileImg} alt="Author" loading="lazy" />
          <p style={{ opacity: 1 }}>{paragraph}</p>
        </div>
      </section>
      <section className="about-page--mobile__profession" ref={professionRef}>
        <h3 className="about-page--mobile__profession__header">
          <TypeWriter text="// profession" speed={speed} />
        </h3>
        <p style={{ opacity: 1 }}>{professionParagraph}</p>
        <div className="about-page--mobile__profession__career" ref={careerRef}>
          <h4>
            {isCareerInView && <TypeWriter text="/// career" speed={speed} />}
          </h4>
        </div>
        <p style={isCareerInView ? { opacity: 1 } : {}}>{careerParagraph}</p>
        <div className="about-page--mobile__profession__career__places">
          <div className="about-page--mobile__profession__career__places--netcompany"></div>
        </div>
      </section>
    </section>
  );
};

export default AboutMobile;
