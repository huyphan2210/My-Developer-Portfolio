import { FC, useEffect, useRef, useState } from "react";
import "./AboutMobile.scss";
import Utilities from "../../../../utilities";
import TypeWriter from "../../../../components/TypeWriter";
import CompanyCard, { CompanyCardProps } from "../CompanyCard/CompanyCard";

import authorMobileImg from "../../../../assets/img/author-mobile.png";

interface AboutMobileProps {
  greetings: string;
  professionParagraph: string;
  careerParagraph: string;
  companies: CompanyCardProps[];
}

const AboutMobile: FC<AboutMobileProps> = ({
  greetings,
  professionParagraph,
  careerParagraph,
  companies,
}) => {
  const professionRef = useRef<HTMLDivElement>(null);
  const authorMobileRef = useRef<HTMLImageElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);

  const [isCareerInView, setIsCareerInView] = useState(false);

  const speed = 25;

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
      <section className="about-page--mobile__personal">
        <h3 className="about-page--mobile__personal__header">
          <TypeWriter text="// personal-info" speed={speed} />
        </h3>
        <div
          className="about-page--mobile__personal__info"
          ref={authorMobileRef}
        >
          <img src={authorMobileImg} alt="Author" loading="lazy" />
          <p style={{ opacity: 1 }}>{greetings}</p>
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
          {companies.map(
            (
              { companyName, companyImg, companyURLs, startDate, endDate },
              index
            ) => (
              <CompanyCard
                key={index + companyName}
                companyName={companyName}
                companyImg={companyImg}
                companyURLs={companyURLs}
                startDate={startDate}
                endDate={endDate}
              />
            )
          )}
        </div>
      </section>
    </section>
  );
};

export default AboutMobile;
