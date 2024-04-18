import { FC, useRef } from "react";
import "./CompanyCard.scss";
import TypeWriter from "../../../../components/TypeWriter";
import useElementInView from "../../../../hooks/useElementInView";

interface CompanyProject {
  name: string;
  description: string;
  infoURL: string;
  img: string;
}

export interface CompanyCardProps {
  companyName: string;
  companyImg: string;
  companyURLs: string;
  companySummary?: string;
  startDate: Date;
  endDate?: Date;
  isFromDesktop?: boolean;
  companyProjects: CompanyProject[];
}

const formattedDate = (date: Date) =>
  date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const CompanyCard: FC<CompanyCardProps> = ({
  companyName,
  companyImg,
  companyURLs,
  companySummary,
  companyProjects,
  startDate,
  endDate,
  isFromDesktop,
}) => {
  const companyCardRef = useRef<HTMLDivElement>(null);
  const isInView = !isFromDesktop ? useElementInView(companyCardRef) : true;

  return (
    <article
      className="company-card"
      style={isInView ? { opacity: 1 } : {}}
      ref={companyCardRef}
      onClick={() => window.open(companyURLs, "_blank")}
    >
      <div className="company-card__info">
        <hgroup className="company-card__info__header">
          <h3>
            {isInView ? (
              <TypeWriter text={companyName} speed={50} />
            ) : (
              "placeholder"
            )}
          </h3>
          <span className="company-card__info__header__date">
            {formattedDate(startDate)} -{" "}
            {endDate ? (
              formattedDate(endDate)
            ) : (
              <span style={{ color: "var(--green)" }}>Present</span>
            )}
          </span>
        </hgroup>
        <div className="company-card__info__body">
          <img src={companyImg} alt={companyName} loading="lazy" />
        </div>
        {companySummary && (
          <p className="company-card__info__footer">{companySummary}</p>
        )}
      </div>
      <div className="company-card__projects">
        {companyProjects.map((project, index) => (
          <div key={index} className="company-card__projects__instance">
            <div className="company-card__projects__instance__header">
              <img src={project.img} alt={project.name} loading="lazy" />
            </div>
            <div className="company-card__projects__instance__body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="company-card__projects__instance__footer">
              <a href={project.infoURL} target="_blank">
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

CompanyCard.defaultProps = {
  endDate: undefined,
  companySummary: undefined,
};

export default CompanyCard;
