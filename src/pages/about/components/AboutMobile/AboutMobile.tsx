import { FC, useEffect, useRef } from "react";
import "./AboutMobile.scss";
import TypeWriter from "../../../../components/TypeWriter";
import CompanyCard, { CompanyCardProps } from "../CompanyCard/CompanyCard";

import authorMobileImg from "../../../../assets/img/author-mobile.png";
import useElementInView from "../../../../hooks/useElementInView";

interface AboutMobileProps {
  greetings: string;
  professionParagraph: string;
  careerParagraph: string;
  techStackParagraph: string;
  companies: CompanyCardProps[];
}

const AboutMobile: FC<AboutMobileProps> = ({
  greetings,
  professionParagraph,
  careerParagraph,
  techStackParagraph,
  companies,
}) => {
  const professionRef = useRef<HTMLDivElement>(null);
  const authorMobileRef = useRef<HTMLImageElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

  const isCareerInView = useElementInView(careerRef);
  const isTechStackInView = useElementInView(techStackRef);

  const speed = 25;

  useEffect(() => {
    if (authorMobileRef.current && professionRef.current) {
      authorMobileRef.current.style.opacity = "1";
      professionRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <section className="about-page--mobile">
      <section className="about-page--mobile__personal">
        <h3 className="about-page--mobile__personal__header">
          <TypeWriter text="// Personal-info" speed={speed} />
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
          <TypeWriter text="// Profession" speed={speed} />
        </h3>
        <p style={{ opacity: 1 }}>{professionParagraph}</p>
        <div className="about-page--mobile__profession__career" ref={careerRef}>
          <h4>
            {isCareerInView && <TypeWriter text="/// Career" speed={speed} />}
          </h4>
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
        </div>
        <div
          className="about-page--mobile__profession__tech-stack"
          ref={techStackRef}
        >
          <h4>
            {isTechStackInView && (
              <TypeWriter text="/// Tech stack" speed={speed} />
            )}
          </h4>
          <p style={isTechStackInView ? { opacity: 1 } : {}}>
            {techStackParagraph}
          </p>
          <div className="about-page--mobile__profession__tech-stack__places">
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
        </div>
      </section>
    </section>
  );
};

export default AboutMobile;
